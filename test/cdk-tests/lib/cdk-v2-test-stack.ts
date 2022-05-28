import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import * as ts2asl from '@ts2asl/cdk-typescript-statemachine';

export class CdkV2TestStack extends Stack {
  constructor(scope: Construct, fixture: string ) {
    super(scope, fixture + '-test-stack', {});

    // The code that defines your stack goes here
    const executionRole = new iam.Role(this, "executionRole", {
      assumedBy: new iam.ServicePrincipal("states.amazonaws.com")
    });
    executionRole.addManagedPolicy(iam.ManagedPolicy.fromManagedPolicyArn(this, "executionRolePolicy", "arn:aws:iam::aws:policy/service-role/AWSLambdaRole"));
    
    executionRole.addToPolicy(
      new iam.PolicyStatement({
      //because of the nested stepfunction
      effect: iam.Effect.ALLOW,
      actions: ["events:PutTargets", "events:PutRule", "events:DescribeRule"],
      resources: [`arn:${this.partition}:events:${this.region}:${this.account}:rule/StepFunctionsGetEventsForStepFunctionsExecutionRule`],
    })
    ); 

    executionRole.addToPolicy(
      new iam.PolicyStatement({
        //because of the nested stepfunction
        effect: iam.Effect.ALLOW,
        actions: ["states:StartExecution"],
        resources: [`*`],
      })
    );

    const logGroup = new logs.LogGroup(this, "TypescriptStateMachineLogs", {
      logGroupName: "/aws/vendedlogs/states/typescript-" + fixture,
      retention: logs.RetentionDays.ONE_WEEK,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // example resource
    const host = new ts2asl.TypescriptStateMachine(this, "TypescriptStateMachine", {
      programName: fixture,
      defaultFunctionProps: {},
      defaultStepFunctionProps: {
        role: executionRole,
        tracingEnabled: true,
        logs: { level: sfn.LogLevel.ALL, destination: logGroup, includeExecutionData: true },
      },
      
      sourceFile: "../../packages/convert/src/__test__/resources/" + fixture + ".ts",
    });

    for(const [name, sm] of Object.entries(host.stateMachines)) {
      new CfnOutput(this, `${fixture}-${name}-output`, {
        exportName: `cdk-tests-${fixture}-${name}`,
        value: sm.stateMachineArn,
      });
    }

  }
}
