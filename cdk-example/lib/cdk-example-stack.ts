import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as cs from '@cloudscript/cdk';

export class CdkExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const executionRole = new iam.Role(this, "executionRole", {
      assumedBy: new iam.ServicePrincipal("states.amazonaws.com")
    })

    executionRole.addManagedPolicy(iam.ManagedPolicy.fromManagedPolicyArn(this, "executionRolePolicy", "arn:aws:iam::aws:policy/service-role/AWSLambdaRole"))

    // // example resource
    new cs.CloudScript(this, "cs", {
      programName: "hello-world",
      defaultFunctionProps: {},
      defaultStepFunctionProps: { roleArn: executionRole.roleArn },
      sourceFile: "./src/program.ts",
    });
  }
}
