import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as ts2asl from '@ts2asl/cdk-typescript-statemachine';

export class LocalTestStack extends Stack {
  constructor(scope: Construct, file: string ) {
    super(scope, file + '-test-stack', {});

    // The code that defines your stack goes here
    const executionRole = new iam.Role(this, "executionRole", {
      assumedBy: new iam.ServicePrincipal("states.amazonaws.com")
    });
    executionRole.addManagedPolicy(iam.ManagedPolicy.fromManagedPolicyArn(this, "executionRolePolicy", "arn:aws:iam::aws:policy/service-role/AWSLambdaRole"));

    const logGroup = new logs.LogGroup(this, "TypescriptStateMachineLogs", {
      logGroupName: "/aws/vendedlogs/states/typescript-" + file,
      retention: logs.RetentionDays.ONE_WEEK,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // example resource
    const host = new ts2asl.TypescriptStateMachine(this, "TypescriptStateMachine", {
      programName: file,
      defaultFunctionProps: {},
      conversionOptions: {
        emitStateLanguageFiles: true
      },
      defaultStepFunctionProps: {
        role: executionRole,
        tracingEnabled: true,
        logs: { level: sfn.LogLevel.ALL, destination: logGroup, includeExecutionData: true },
      },
      sourceFile: "./src/" + file + ".ts",
    });

    for(const [name, sm] of Object.entries(host.stateMachines)) {
      new CfnOutput(this, `${file}-${name}-output`, {
        exportName: `cdk-tests-${file}-${name}`,
        value: sm.stateMachineArn,
      });
    }

  }
}
