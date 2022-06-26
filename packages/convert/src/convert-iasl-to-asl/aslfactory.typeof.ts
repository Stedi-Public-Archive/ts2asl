import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { AslRhsFactory } from "./aslfactory.rhs";

export class AslTypeofFactory {
  static appendIaslTypeof(
    expression: iasl.TypeOfExpression,
    scopes: Record<string, iasl.Scope>,
    context: AslWriter,
    resultPath: string | null,
    nameSuggestion: string | undefined,
  ) {
    let rhs = AslRhsFactory.appendIasl(expression.operand, scopes, context, true);
    rhs = AslRhsFactory.convertToPath(rhs, context);
    
    context.appendNextState(
      {
        Type: "Parallel",
        InputPath: "$",
        Branches: [
          {
            StartAt: "Typeof rhs",
            States: {
              "Typeof rhs": {
                Type: "Choice",
                Choices: [
                  {
                    Variable: rhs.path,
                    IsPresent: false,
                    Next: 'Evaluate to "undefined"',
                  },
                  {
                    Variable: rhs.path,
                    IsNull: true,
                    Next: 'Evaluate to "object"',
                  },
                  {
                    Variable: rhs.path,
                    IsNumeric: true,
                    Next: 'Evaluate to "number"',
                  },
                  {
                    Variable: rhs.path,
                    IsString: true,
                    Next: 'Evaluate to "string"',
                  },
                  {
                    Variable: rhs.path,
                    IsBoolean: true,
                    Next: 'Evaluate to "boolean"',
                  },
                ],
                Default: 'Evaluate to "object"',
              },
              'Evaluate to "string"': {
                Type: "Pass",
                Result: "string",
                End: true,
              },
              'Evaluate to "number"': {
                Type: "Pass",
                Result: "number",
                End: true,
              },
              'Evaluate to "boolean"': {
                Type: "Pass",
                Result: "boolean",
                End: true,
              },
              'Evaluate to "undefined"': {
                Type: "Pass",
                Result: "undefined",
                End: true,
              },
              'Evaluate to "object"': {
                Type: "Pass",
                Result: "object",
                End: true,
              },
            },
          },
        ],
        ResultPath: resultPath as any,
      },
      nameSuggestion,
    );
  }
  
}
