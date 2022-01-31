import nativeIntegrations from "./native-integrations.json"
import fetch from 'node-fetch';
import * as ts from "typescript";
import factory = ts.factory;
import { writeFileSync } from "fs";



const supportedServices = [
  { serviceId: "dynamodb", serviceName: "DynamoDB" },
  { serviceId: "ecs", serviceName: "ECS" },
  { serviceId: "eventbridge", serviceName: "EventBridge" },
  { serviceId: "lambda", serviceName: "Lambda" },
  { serviceId: "s3", serviceName: "S3" },
  { serviceId: "ses", serviceName: "SES" },
  { serviceId: "sqs", serviceName: "SQS" },
  { serviceId: "sns", serviceName: "SNS" },
  { serviceId: "ssm", serviceName: "SSM" },
  { serviceId: "textract", serviceName: "Textract" },
  //  { serviceId: "secretsmanager", serviceName: "SecretsManager" }
]

// interface NativeIntegrationDefinition {
//   docUrl: string;
//   asl: {
//     Type: string;
//     Resource: string;
//     Parameters: Record<string, string>
//   }
// }

const generateServiceAst = (serviceName: string): { importAst: ts.Node } => {
  const lowercaseServiceId = serviceName.toLowerCase();

  return {
    importAst: factory.createImportDeclaration(
      undefined,
      undefined,
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports([
          factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier(`${serviceName}Client`)
          ),
        ])
      ),
      factory.createStringLiteral(`@aws-sdk/client-${lowercaseServiceId}`),
      undefined
    ),
  }
}
const generateFunctionAst = (serviceName: string, actionName: string): { functionAst: ts.Statement, importAst: ts.Node } => {
  const lowercaseServiceId = serviceName.toLowerCase();
  const actionNameCamel = actionName[0].toLowerCase() + actionName.substring(1);

  const result = {
    importAst: factory.createImportDeclaration(
      undefined,
      undefined,
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports([
          factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier(`${actionName}CommandInput`)
          ),
          factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier(`${actionName}CommandOutput`)
          ),
          factory.createImportSpecifier(
            false,
            undefined,
            factory.createIdentifier(`${actionName}Command`)
          )
        ])
      ),
      factory.createStringLiteral(`@aws-sdk/client-${lowercaseServiceId}`),
      undefined
    ),
    functionAst:
      factory.createVariableStatement(
        [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        factory.createVariableDeclarationList(
          [factory.createVariableDeclaration(
            factory.createIdentifier(`native${serviceName}${actionName}`),
            undefined,
            undefined,
            factory.createArrowFunction(
              undefined,
              undefined,
              [factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("input"),
                undefined,
                factory.createTypeReferenceNode(
                  factory.createIdentifier(`${actionName}CommandInput`),
                  undefined
                ),
                undefined
              )],
              factory.createTypeReferenceNode(
                factory.createIdentifier("Promise"),
                [factory.createTypeReferenceNode(
                  factory.createIdentifier(`${actionName}CommandOutput`),
                  undefined
                )]
              ),
              factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
              factory.createBlock(
                [
                  factory.createVariableStatement(
                    undefined,
                    factory.createVariableDeclarationList(
                      [factory.createVariableDeclaration(
                        factory.createIdentifier(lowercaseServiceId),
                        undefined,
                        undefined,
                        factory.createNewExpression(
                          factory.createIdentifier(`${serviceName}Client`),
                          undefined,
                          [factory.createObjectLiteralExpression(
                            [],
                            false
                          )]
                        )
                      )],
                      ts.NodeFlags.Const
                    )
                  ),
                  factory.createVariableStatement(
                    undefined,
                    factory.createVariableDeclarationList(
                      [factory.createVariableDeclaration(
                        factory.createIdentifier("command"),
                        undefined,
                        undefined,
                        factory.createNewExpression(
                          factory.createIdentifier(`${actionName}Command`),
                          undefined,
                          [factory.createIdentifier("input")]
                        )
                      )],
                      ts.NodeFlags.Const
                    )
                  ),
                  factory.createReturnStatement(factory.createCallExpression(
                    factory.createPropertyAccessExpression(
                      factory.createIdentifier(lowercaseServiceId),
                      factory.createIdentifier("send")
                    ),
                    undefined,
                    [factory.createIdentifier("command")]
                  ))
                ],
                true
              )
            )
          )],
          ts.NodeFlags.Const
        )
      )
  };

  const comment = ` Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:${lowercaseServiceId}:${actionNameCamel}'`;
  ts.addSyntheticLeadingComment(result.functionAst, ts.SyntaxKind.MultiLineCommentTrivia, comment, true);
  return result;
}

for (const service of nativeIntegrations.services) {
  const serviceConfig = supportedServices.find(x => x.serviceId === service.serviceId);
  if (!serviceConfig) continue;

  const functionNodes: ts.Statement[] = [];
  const importNodes: ts.Node[] = [];

  const filename = `lib/src/native-integrations-${serviceConfig.serviceId}.ts`
  const sourceFile = ts.createSourceFile(filename, "", ts.ScriptTarget.Latest);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const serviceAst = generateServiceAst(serviceConfig.serviceName);
  importNodes.push(serviceAst.importAst);

  for (const action of service.actions) {
    const result = generateFunctionAst(serviceConfig.serviceName, action.actionName);
    functionNodes.push(result.functionAst);
    importNodes.push(result.importAst);
  }
  // const exportNode = factory.createModuleDeclaration(
  //   undefined,
  //   [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
  //   factory.createIdentifier("ASL"),
  //   factory.createModuleBlock(functionNodes),
  //   ts.NodeFlags.Namespace
  //);

  let contents = "";
  for (const node of importNodes) {
    contents = contents + printer.printNode(ts.EmitHint.Unspecified, node, sourceFile) + "\n";
  }

  contents += "\n\n";
  for (const functionNode of functionNodes) {
    contents = contents + printer.printNode(ts.EmitHint.Unspecified, functionNode, sourceFile) + "\n\n";
  }
  writeFileSync(filename, contents);
}
