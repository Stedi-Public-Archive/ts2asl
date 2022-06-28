import { callStatementTransformer } from "./call-statement";
import { doWhileStatementTransformer } from "./do-while-statement";
import { forOfStatementTransformer } from "./for-of-statement";
import { ifStatementTransformer } from "./if-statement";
import { promiseAllStatementTransformer } from "./promise-all-statement";
import { removeUnnecessaryExpressionsTransformer } from "./remove-unneccesary-expressionts";
import { switchStatementTransformer } from "./switch-statement";
import { throwStatementTransformer } from "./throw-statement";
import { tryStatementTransformer } from "./try-statement";
import { unsupportedStatementTransformer } from "./unsupported";
import { whileStatementTransformer } from "./while-statement";
import { consoleLogStatementTransformer } from "./log-statement";
import { arrayFilterTransformer } from "./array-filter-statement";
import { arrayMapTransformer } from "./array-map-statement";
import { arrayLengthTransformer } from "./array-length-statement";
import { ConverterOptions } from "../../convert";
import { resolveExpressionsTransformer } from "./array-initializer";
import { stringTemplateTransformer } from "./string-template";
import { literalExpressionTransformer } from "./resolve-literal-expressions";
import { deployTimeStatementTransformer } from "./deploy-time-replacements";
import { stringConversionTransformer } from "./string-conversion";
import { ICompilerHost } from "../../compiler-host";
import { evalConstTransformer } from "./eval-const";
import { enumValueTransformer } from "./enum-values";
import { nullCoalescingStatementTransformer } from "./null-coalescing-statement";

export const createTransformers = (converterOptions: ConverterOptions = {}, host: ICompilerHost) => {
  return [
    evalConstTransformer(host.typeChecker),
    enumValueTransformer(host.typeChecker),
    removeUnnecessaryExpressionsTransformer(converterOptions),
    unsupportedStatementTransformer(converterOptions),
    ifStatementTransformer(converterOptions),
    arrayFilterTransformer(converterOptions),
    arrayMapTransformer(converterOptions),
    arrayLengthTransformer(converterOptions),
    switchStatementTransformer(converterOptions),
    tryStatementTransformer(converterOptions),
    resolveExpressionsTransformer(converterOptions),
    //variableStatementTransformer(converterOptions),
    promiseAllStatementTransformer(converterOptions),
    consoleLogStatementTransformer(converterOptions),
    callStatementTransformer(converterOptions),
    nullCoalescingStatementTransformer(converterOptions),
    deployTimeStatementTransformer,
    literalExpressionTransformer,
    stringTemplateTransformer,
    stringConversionTransformer,
    throwStatementTransformer(converterOptions),
    whileStatementTransformer(converterOptions),
    doWhileStatementTransformer(converterOptions),
    forOfStatementTransformer(converterOptions),
  ];
};