
import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (input: any) =>{
    var marker: string | undefined = asl.pass({
        name: "Assign marker",
        comment: "marker: string | undefined"
    });
    asl.typescriptDoWhile({
        name: "Do While (marker)",
        condition: () => marker,
        block: async () => {
            var response = await asl.sdkIAMListUsers({
                name: "List Users",
                parameters: {
                    PathPrefix: "/path",
                    Marker: marker
                }
            });
            asl.typescriptForeach({
                name: "For user Of response.Users",
                items: () => response.Users,
                iterator: user => {
                    //put your logic here
                    await asl.typescriptInvoke({
                        name: "doSomething(user)",
                        resource: doSomething,
                        parameters: () => user,
                        comment: "doSomething(user)"
                    });
                }
            })
            marker = response.IsTruncated ? response.Marker : undefined;
        }
    })
});


export const doSomething = asl.deploy.asStateMachine(async (input: User) => {
  console.log(input);
});