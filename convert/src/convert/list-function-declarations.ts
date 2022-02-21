
import ts from "typescript";

export interface FunctionDeclaration {
  name: string;
  body: ts.ConciseBody;
  inputArgName: string | undefined;
  contextArgName: string | undefined;
  kind: "asl" | "lambda";
}

export const listFunctionDeclarations = (sourceFile: ts.SourceFile) => {
  const result: FunctionDeclaration[] = [];
  ts.forEachChild(sourceFile, node => {
    if (ts.isVariableStatement(node)) {
      const f = node as ts.VariableStatement;
      if (f.declarationList.declarations?.length === 1) {
        const decl = f.declarationList.declarations[0] as ts.VariableDeclaration;
        const name = decl.name.getText(sourceFile);
        if (!decl.initializer) throw new Error(`decl ${name} does not have initializer`);
        const AslDeclaration = aslDeclStyleCallExpression(sourceFile, decl.initializer);

        if (AslDeclaration) {
          if (!ts.isArrowFunction(AslDeclaration.argument)) throw new Error(`ASL decl ${name} must have arrow function as argument`);
          const arrowFunction: ts.ArrowFunction = AslDeclaration.argument;
          if (arrowFunction.parameters.length > 2) throw new Error(`ASL decl ${name} arrow function must have no more than 2 parameters (first is input, second is context)`);

          let argumentName: string | undefined;
          let argument2Name: string | undefined;
          const parameter = arrowFunction.parameters[0];
          if (parameter) {
            if (!ts.isIdentifier(parameter.name)) throw new Error(`Parameter name of ASL decl ${name} must be identifier`);
            argumentName = parameter.name.text;
          }
          const parameter2 = arrowFunction.parameters[1];
          if (parameter2) {
            if (!ts.isIdentifier(parameter2.name)) throw new Error(`Parameter name of ASL decl ${name} must be identifier`);
            argument2Name = parameter2.name.text;
          }
          const kind = AslDeclaration.operation === "asLambda" ? "lambda" : "asl";
          result.push({
            name,
            body: arrowFunction.body,
            inputArgName: argumentName,
            contextArgName: argument2Name,
            kind,
          })
        }
      }
    }
  });
  return result;
}

export const aslDeclStyleCallExpression = (source: ts.SourceFile, expression: ts.Node) => {
  const aslCallExpression = aslStyleCallExpression(source, expression);
  const operations = ["asLambda", "asStateMachine"];
  if (aslCallExpression && operations.includes(aslCallExpression.operation)) {

    if (aslCallExpression.arguments.length !== 1) throw new Error(`ASL call expression must have 1 argument`);

    return {
      operation: aslCallExpression.operation,
      argument: aslCallExpression.arguments[0] as ts.Expression,
    }
  }
}


export const aslStyleCallExpression = (source: ts.SourceFile, expression: ts.Node) => {
  if (ts.isAwaitExpression(expression)) return aslStyleCallExpression(source, expression.expression);
  if (ts.isCallExpression(expression) && ts.isPropertyAccessExpression(expression.expression) && ts.isPropertyAccessExpression(expression.expression.expression)) {
    if ("asl" === expression.expression.expression.expression.getText(source).toLowerCase()) {
      return {
        operation: expression.expression.name.getText(source),
        arguments: expression.arguments
      }
    }
  }
  return undefined;
}
