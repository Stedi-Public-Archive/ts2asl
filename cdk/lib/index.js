"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TypescriptStateMachine = void 0;
var aws_stepfunctions_1 = require("@aws-cdk/aws-stepfunctions");
var aws_lambda_1 = require("@aws-cdk/aws-lambda");
var core_1 = require("@aws-cdk/core");
var convert_1 = require("@ts2asl/convert");
var convert_2 = require("@ts2asl/convert");
var aws_lambda_nodejs_1 = require("@aws-cdk/aws-lambda-nodejs");
var TypescriptStateMachine = /** @class */ (function (_super) {
    __extends(TypescriptStateMachine, _super);
    function TypescriptStateMachine(scope, id, props) {
        var _this = this;
        //sourceFile, cwd & diagnostics are converted to a definitionString.
        var sourceFile = props.sourceFile, cwd = props.cwd, diagnostics = props.diagnostics;
        var compilerHost = (0, convert_2.createCompilerHostFromFile)(sourceFile, cwd);
        var converter = new convert_1.Converter(compilerHost);
        var converted = converter.convert(diagnostics);
        _this = _super.call(this, scope, id) || this;
        var typescriptDict = {};
        for (var _i = 0, _a = converted.lambdas; _i < _a.length; _i++) {
            var lambda = _a[_i];
            var entry = sourceFile;
            var handler = lambda.name;
            var fn = new aws_lambda_nodejs_1.NodejsFunction(scope, lambda.name, __assign(__assign({}, props.defaultFunctionProps), { functionName: "".concat(props.programName, "_").concat(lambda.name), entry: entry, handler: handler, runtime: aws_lambda_1.Runtime.NODEJS_14_X }));
            typescriptDict["typescript:" + lambda.name] = fn.functionArn;
        }
        for (var _b = 0, _c = converted.stateMachines; _b < _c.length; _b++) {
            var step = _c[_b];
            var replaced = replaceFunctionArns(step.asl, typescriptDict);
            new aws_stepfunctions_1.CfnStateMachine(scope, "".concat(id, "_").concat(step.name), __assign(__assign({}, props.defaultStepFunctionProps), { definitionString: JSON.stringify(replaced, null, 2), stateMachineName: "".concat(props.programName, "_").concat(step.name) }));
        }
        return _this;
    }
    return TypescriptStateMachine;
}(core_1.Construct));
exports.TypescriptStateMachine = TypescriptStateMachine;
var replaceFunctionArns = function (statemachine, typescriptDict) {
    for (var _i = 0, _a = Object.values(statemachine.States); _i < _a.length; _i++) {
        var state = _a[_i];
        if (state.Type === "Task") {
            var task = state;
            if (typescriptDict[task.Resource]) {
                task.Resource = typescriptDict[task.Resource];
            }
        }
    }
    return statemachine;
};
