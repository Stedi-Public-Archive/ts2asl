
import * as asl from "@ts2asl/asl-lib"

export const listUsers = asl.deploy.asStateMachine(async (input: any) => {
  var marker: string | undefined;
  do{
    var response = await asl.sdkIAMListUsers({
      name: "List Users",
      parameters : {
        PathPrefix: "/path",
        Marker: marker
      }
    });

  for(const user of (response.Users || [])) {
    //put your logic here
    await doSomething(user);
  }
    marker = response.IsTruncated ? response.Marker : undefined;
  }while(marker)
});


export const doSomething = asl.deploy.asStateMachine(async (input: User) =>{
    asl.pass({
        name: "Log (input)",
        parameters: () => input,
        comment: "console.log(input)"
    });
});