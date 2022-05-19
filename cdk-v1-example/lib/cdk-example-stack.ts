import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as logs from '@aws-cdk/aws-logs';
import * as ts2asl from '@ts2asl/cdk-typescript-statemachine';
import * as fs from "fs";
import { LogLevel } from '@aws-cdk/aws-stepfunctions';

export class CdkV1ExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const executionRole = new iam.Role(this, "executionRole", {
      assumedBy: new iam.ServicePrincipal("states.amazonaws.com")
    });
    executionRole.addManagedPolicy(iam.ManagedPolicy.fromManagedPolicyArn(this, "executionRolePolicy", "arn:aws:iam::aws:policy/service-role/AWSLambdaRole"));

    const logGroup = new logs.LogGroup(this, "TypescriptStateMachineLogs", {
      logGroupName: "/aws/vendedlogs/states/typescript-hello-world-v1",
      retention: logs.RetentionDays.ONE_MONTH,
    });

    // example resource
    new ts2asl.TypescriptStateMachine(this, "TypescriptStateMachine", {
      programName: "hello-world-v1",
      defaultFunctionProps: {},
      defaultStepFunctionProps: {
        role: executionRole,
        tracingEnabled: true,
        logs: { level: LogLevel.ALL, destination: logGroup, includeExecutionData: true },
      },
      sourceFile: "./src/program.ts",
    });
  }
};
