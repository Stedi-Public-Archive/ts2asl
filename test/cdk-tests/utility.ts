import * as asl from "@ts2asl/asl-lib";
import {CloudFormationClient, ListStackResourcesCommand, StackResourceSummary} from "@aws-sdk/client-cloudformation"
import {LambdaClient, GetFunctionConfigurationCommand } from "@aws-sdk/client-lambda"

asl.clientConfig.region = "us-east-1";
const lambda = new LambdaClient({region: "us-east-1"});
const cloudformation = new CloudFormationClient({region: "us-east-1"});

const listStackResources = async (fixture: string): Promise<StackResourceSummary[]> => {
  const stackName = fixture + "-test-stack";
  const listResources = await cloudformation.send(new ListStackResourcesCommand({
    StackName: stackName
  }));
  if (listResources.StackResourceSummaries === undefined) throw new Error(`unable to find stack ${stackName}`)
  return listResources.StackResourceSummaries;
}

export const listFunctionResources = async (fixture: string) => {
  const stackResources = await listStackResources(fixture);
  const functions = stackResources.filter(x=>x.ResourceType === "AWS::Lambda::Function");
  const getFunctionConfigurationPromises = functions?.map(x=> lambda.send(new GetFunctionConfigurationCommand({ FunctionName: x.PhysicalResourceId })));
  return Promise.all(getFunctionConfigurationPromises);
};
export const executeStepFunction = async (fixture: string, name: string, input: {} = {}): Promise<unknown> => {
  const logicalId = `TypescriptStateMachine${name.substring(0, 1).toUpperCase()}${name.substring(1)}`
  const stackResources = await listStackResources(fixture);
  const resource = stackResources.find(x=>x.LogicalResourceId && x.LogicalResourceId .startsWith(logicalId));
  if (!resource) throw new Error(`unable to find ${logicalId} in stack for fixture ${fixture}`)
  
  try {
    let execution: any | undefined = undefined;
    let retryCount = 0;
    do {
      try{
        execution = await asl.sdkSfnStartSyncExecution({ parameters: { stateMachineArn: resource.PhysicalResourceId, input: JSON.stringify(input, null, 2) } });
        if (execution.output === undefined) return undefined;
      } catch(err) {
        if ((retryCount++) > 2) throw err;
        const sdkError = err as {name:string};
        
        //retry if sm didnt exist
        if (sdkError.name !== "StateMachineDoesNotExist") throw err;
        await sleep(1000);
      }
    }while(execution === undefined);
    let status = "RUNNING";
    let output : string | undefined;
    do{ 
      await sleep(1000);
      const result = await asl.sdkSfnDescribeExecution({ parameters: {executionArn: execution.executionArn} });
      status = result.status as string;
      output = result.output
    }
    while(status === "RUNNING");
    
      if (output === undefined) return undefined;
      return JSON.parse(output as string);
  }
  catch (err) {
    console.log(err);
    throw err;
  }
  finally {
    
  }
};

const sleep = async (millis: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, millis);
  });
};
