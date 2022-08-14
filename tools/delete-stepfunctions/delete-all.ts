import { DeleteStateMachineCommand, ListStateMachinesCommand, SFNClient } from "@aws-sdk/client-sfn";

const deleteAll = async () => {
    const sfn = new SFNClient({region: "us-east-1"});
    let nextToken : string | undefined;
    do {
    const command = new ListStateMachinesCommand({nextToken});
    const result = await sfn.send(command);
    nextToken = result.nextToken;
    for(const stateMachine of (result.stateMachines || [])) {
      if (!(stateMachine.stateMachineArn || "").includes("642712255693"))  {
        console.log("statemachine does not belong to expected account");
        return;
      }

      if (!stateMachine.name?.startsWith("ts2asl")) {
        continue;
      }
      const deleteCommand = new DeleteStateMachineCommand({ stateMachineArn: stateMachine.stateMachineArn });
      await retryWhenTrottled(async() => await sfn.send(deleteCommand));
      console.log(`deleted ${stateMachine.name}`);

    }
  }while(nextToken)
}


deleteAll();



const retryWhenTrottled = async<T>(fn: ()=>Promise<T>) => {
  let retry = false;
  do {
    try{
      retry = false;
      return await fn();
    } catch(err) {
      if ((err as {name: string}).name === "ThrottlingException") {
        sleep(1000);
        retry = true;
      } else {
        throw err;
      }
    }
  } while(retry === true)
}

const sleep = async (millis: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, millis);
  });
};