import * as asl from "asl-types";
import * as AWS from "aws-sdk";
import { CreateStateMachineInput, UpdateStateMachineInput } from "aws-sdk/clients/stepfunctions";

export const directDeploy = async (name: string, stateMachine: asl.StateMachine): Promise<string> => {
  const region = `us-east-1`;
  const client = new AWS.StepFunctions({ region });
  const sts = new AWS.STS();
  const callerId = await sts.getCallerIdentity().promise();
  const arnParts = callerId?.Arn?.split(':');
  const partition = arnParts?.[1];
  const accountId = arnParts?.[4];
  const stateMachineArn = `arn:${partition}:states:${region}:${accountId}:stateMachine:${name}`;
  const roleArn = `arn:${partition}:iam::${accountId}:role/ts2asl`
  const updateRequest = { stateMachineArn, definition: JSON.stringify(stateMachine, null, 2), roleArn } as UpdateStateMachineInput;
  const createRequest = { ...updateRequest, name } as CreateStateMachineInput;
  delete (createRequest as unknown as { stateMachineArn?: string }).stateMachineArn;
  try {
    await client.updateStateMachine(updateRequest).promise();
  } catch (err) {

    await client.createStateMachine(createRequest).promise();
  }

  return updateRequest.stateMachineArn;
}