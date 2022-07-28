import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as ts2asl from '@ts2asl/cdk-typescript-statemachine';

export class CdkV2ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const executionRole = new iam.Role(this, "executionRole", {
      assumedBy: new iam.ServicePrincipal("states.amazonaws.com")
    });
    executionRole.addManagedPolicy(iam.ManagedPolicy.fromManagedPolicyArn(this, "executionRolePolicy", "arn:aws:iam::aws:policy/service-role/AWSLambdaRole"));

    const logGroup = new logs.LogGroup(this, "TypescriptStateMachineLogs", {
      logGroupName: "/aws/vendedlogs/states/typescript-hello-world-v2",
      retention: logs.RetentionDays.ONE_MONTH,
    });

    // example resource
    new ts2asl.TypescriptStateMachine(this, "TypescriptStateMachine", {
      programName: "hello-world-v2",
      defaultFunctionProps: {},
      defaultStepFunctionProps: {
        role: executionRole,
        tracingEnabled: true,
        logs: { level: sfn.LogLevel.ALL, destination: logGroup, includeExecutionData: true },
      },
      sourceFile: "./src/program.ts",
    });
  }
}
