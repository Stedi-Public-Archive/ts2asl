
import * as asl from "@ts2asl/asl-lib"

export const listUsers = asl.deploy.asStateMachine(async (input: any) =>{
    var marker: string | undefined;
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
                },
                comment: "for(const user of (response.Users || [])) {\n    //put your logic here\n    await doSomething(user);\n  }"
            })
            marker = response.IsTruncated ? response.Marker : undefined;
        },
        comment: "do{\n    var response = await asl.sdkIAMListUsers({\n      name: \"List Users\",\n      parameters : {\n        PathPrefix: \"/path\",\n        Marker: marker\n      }\n    });\n\n  for(const user of (response.Users || [])) {\n    //put your logic here\n    await doSomething(user);\n  }\n    marker = response.IsTruncated ? response.Marker : undefined;\n  }while(marker)"
    })
});


export const doSomething = asl.deploy.asStateMachine(async (input: User) => {
  console.log(input);
});