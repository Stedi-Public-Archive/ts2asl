import sdkIntegrations from "./native-integrations.json";
import * as ts from "typescript";
import factory = ts.factory;
import { writeFileSync } from "fs";


const lambdaTypeOverloads = `declare module "@aws-sdk/client-lambda" {
  interface InvokeCommandInput {
      Payload: {};
  }
}
`;

const supportedServices = [
  { serviceId: "dynamodb", serviceName: "DynamoDB" },
  { serviceId: "ecs", serviceName: "ECS" },
  { serviceId: "eventbridge", serviceName: "EventBridge" },
  { serviceId: "lambda", serviceName: "Lambda", overloads: lambdaTypeOverloads },
  { serviceId: "s3", serviceName: "S3" },
  { serviceId: "ses", serviceName: "SES" },
  { serviceId: "sqs", serviceName: "SQS" },
  { serviceId: "sns", serviceName: "SNS" },
  { serviceId: "ssm", serviceName: "SSM" },
  { serviceId: "textract", serviceName: "Textract" },
  { serviceId: "apigateway", serviceName: "APIGateway" },
  { serviceId: "organizations", serviceName: "Organizations" },
  { serviceId: "sfn", serviceName: "Sfn" },
  { serviceId: "codebuild", serviceName: "CodeBuild" },
  { serviceId: "cloudwatch", serviceName: "CloudWatch" },
  { serviceId: "athena", serviceName: "Athena" },
  { serviceId: "sts", serviceName: "STS" },
  { serviceId: "iam", serviceName: "IAM" },
];

// interface NativeIntegrationDefinition {
//   docUrl: string;
//   asl: {
//     Type: string;
//     Resource: string;
//     Parameters: Record<string, string>
//   }
// }

const generateServiceAst = (serviceName: string): { importAst: ts.Node[]; } => {
  const lowercaseServiceId = serviceName.toLowerCase();
  const moduleName = (lowercaseServiceId === "apigateway") ? "api-gateway" : lowercaseServiceId;
  const clientName = (lowercaseServiceId === "sfn") ? "SFNClient" : `${serviceName}Client`;
  return {
    importAst: [
      factory.createImportDeclaration(
        undefined,
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(
              false,
              undefined,
              factory.createIdentifier(clientName)
            ),
          ])
        ),
        factory.createStringLiteral(`@aws-sdk/client-${moduleName}`),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(
              false,
              undefined,
              factory.createIdentifier("clientConfig")
            ),
          ])
        ),
        factory.createStringLiteral("."),
        undefined
      ),
      factory.createImportDeclaration(
        undefined,
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(
              false,
              undefined,
              factory.createIdentifier(`SdkIntegrationTask`)
            ),
          ])
        ),
        factory.createStringLiteral(`./asl`),
        undefined
      ),
    ],
  };
};
const generateFunctionAst = (serviceName: string, actionName: string): { functionAst: ts.Statement, importAst: ts.Node; } => {
  const lowercaseServiceId = serviceName.toLowerCase();
  const moduleName = (lowercaseServiceId === "apigateway") ? "api-gateway" : lowercaseServiceId;
  const actionNameCamel = actionName[0].toLowerCase() + actionName.substring(1);
  const clientName = (lowercaseServiceId === "sfn") ? "SFNClient" : `${serviceName}Client`;

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
      factory.createStringLiteral(`@aws-sdk/client-${moduleName}`),
      undefined
    ),
    functionAst:
      factory.createVariableStatement(
        [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        factory.createVariableDeclarationList(
          [factory.createVariableDeclaration(
            factory.createIdentifier(`sdk${serviceName}${actionName}`),
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
                  factory.createIdentifier("SdkIntegrationTask"),
                  [factory.createTypeReferenceNode(
                    factory.createIdentifier(`${actionName}CommandInput`),
                    undefined
                  )]
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
                          factory.createIdentifier(clientName),
                          undefined,
                          [factory.createIdentifier("clientConfig")]
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
                          [factory.createPropertyAccessExpression(
                            factory.createIdentifier("input"),
                            factory.createIdentifier("parameters")
                          )]
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
};

for (const service of sdkIntegrations.services) {
  const serviceConfig = supportedServices.find(x => x.serviceId === service.serviceId);
  if (!serviceConfig) continue;

  const filename = `../../packages/asl-lib/src/sdk-integrations-${serviceConfig.serviceId}.ts`;

  const functionNodes: ts.Statement[] = [];
  const importNodes: ts.Node[] = [];

  const sourceFile = ts.createSourceFile(filename, "", ts.ScriptTarget.Latest);
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const serviceAst = generateServiceAst(serviceConfig.serviceName);
  importNodes.push(...serviceAst.importAst);

  for (const action of service.actions) {
    if (action.actionName === "Invoke" && serviceConfig.serviceName === "APIGateway") continue;
    const result = generateFunctionAst(serviceConfig.serviceName, action.actionName);
    functionNodes.push(result.functionAst);
    importNodes.push(result.importAst);
  }
  // const namespace = factory.createModuleDeclaration(
  //   undefined,
  //   [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
  //   factory.createIdentifier("sdk"),
  //   factory.createModuleBlock(functionNodes),
  //   ts.NodeFlags.Namespace);

  let contents = "";
  for (const node of importNodes) {
    contents = contents + printer.printNode(ts.EmitHint.Unspecified, node, sourceFile) + "\n";
  }

  contents += "\n\n";

  if (serviceConfig.overloads) {
    contents += serviceConfig.overloads;
    contents += "\n\n";
  }
  for (const functionNode of functionNodes) {
    contents = contents + printer.printNode(ts.EmitHint.Unspecified, functionNode, sourceFile) + "\n\n";
  }
  writeFileSync(filename, contents);
}
