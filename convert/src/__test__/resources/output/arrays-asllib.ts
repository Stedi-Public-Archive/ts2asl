//source: https://asl.stedi.com/?share=eJytVAtT2zgQ_jOeApXrQQkJYaa0mBA4KHk0CfQ1ZkbYquOebQVJviO9vf_elezgJFM63NGMHa--_fbbh2R3RZbxXMN0liiC10IUkijNNCcZC2dJzmGimdS-hjOec2kcygDFnKQiJhlXisWcFCrJYzIxgco7FTJjmrA8Il2Ra36vyfD2Gw81lITfIjVdzDmMmFIwQLSWZDlhUrLFuo5vIKRLlnHNpYIq86WI-2Vez4G1nNtbtnGjwe95WOhE5ER8Jf_8S7Ag_P870TMiRcpLdMt1HM8q9MvBeQPMZcDeMtyzitNkEx6jiC_znac1kS3ss67XLrep23Cb7p7bctvuvttxD1y6uwM4tL-41ETPeKWoBbmYDAc4emmk1xJcKJFPxcR6nhOaLSZcJixNvvNoo9hV3rbjVc3Uha4muGXxnybp5iiUV8ZPhVF7TmhV1Cpmi9ooH8uT3OzLiGu1ZvfZHM612TQhoTsTScirhwI_j-CaodBtysGBczUoMtQNYSihMnt3BUvVcnVmheV0xvJlkhMRL80u06uomvMwwSwR2uXxDa0zOjbTXp5Fewihh5WsqIR4Y9GZGjE9g4dNWFIUnzN7CtNEaXO4ka_sK4i5VDVMM2wTTnr3c4lvEJ5jBWOuilRPeIovKM5jjhPCWp4ta4iAX6Y8Np15RvbL2-0jrxoBOTwkW8jZIi9ekCMPh_G6tROASKMn0t8cGr6p4jE6-jbUn0Isdf0oqo4h9lzkyV2B71PMf9Hx_wkpWT6SbNMmPW5H-HBUyaWZ-tWj8f-FG0tRzHk0Kre3nAR8TZnW-P1ah7-8DMrrhkITWrAPB-BDA_agDR3wb26cXaC4biLitMBpI6NjOc4xdIMATkoM1z04DdB3FsAfD9g5XBjsXQCXK7y-wQYBDA02gvfgNGBsEowNMIYJHDlTvK_gGj7AK4q7aZYfK-gT0M8IlWZjtzZpbTZqs1mZn6GxF9gfZqe7leijORqtWqJdm_u12anNg1qYmidtPLRLm0D3gLaQSNtAMZ52bD56sMbxf8IxSsdAu0b3BGgPmadwbdCzOhanTc-BXgB9B_QSff0SGFhgWFY1Qvx9HTMGOgGrZZxTdF6VTpt3hYIFfQD6Eegn098Pmr8QLA
import * as asl from "@cloudscript/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, context: asl.StateMachineContext<{}>) =>{
    asl.pass({
        parameters: () => asl.states.format("Starting execution of {} at {} with role of {}", context.stateMachine.name, context.execution.startTime, context.execution.roleArn),
        comment: "console.log(asl.states.format(\"Starting execution of {} at {} with role of {}\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn))"
    });
    let myArray = asl.pass({
        parameters: () => asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[],
        comment: "myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[]"
    });
    let mySerializedArray = asl.states.jsonToString(myArray);
    myArray = asl.states.stringToJson(mySerializedArray) as number[];
    //Create Pets
    let pets = asl.map({
        name: "For x Of myArray.map",
        items: () => myArray,
        iterator: x => {
            asl.typescriptIf({
                name: "If (x === 1 || x === 3 || ...",
                condition: () => x === 1 || x === 3 || x === 5 || x === 7 || x == 9,
                then: async () => {
                    return {
                        age: x,
                        species: "dog",
                        createdBy: context.state.name,
                    };
                },
                else: async () => {
                    return {
                        age: x,
                        species: "cat",
                        createdBy: context.state.name,
                    };
                },
                comment: "if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {\n      return {\n        age: x,\n        species: \"dog\",\n        createdBy: context.state.name,\n      }\n    } else {\n      return {\n        age: x,\n        species: \"cat\",\n        createdBy: context.state.name,\n      }\n    }"
            })
        }
    });
    //Create separate list of cats and dogs using JSONPath Expressions
    let bySpecies = asl.pass({
        parameters: () => ({
            cats: {
                young: asl.jsonPathFilter(pets, (x) => x.species === "cat" && x.age < 5),
                old: asl.jsonPathFilter(pets, (x) => x.species === "cat" && x.age >= 5),
            },
            dogs: {
                young: asl.jsonPathFilter(pets, (x) => x.species === "dog" && x.age < 5),
                old: asl.jsonPathFilter(pets, (x) => x.species === "dog" && x.age >= 5),
            }
        })
    });
    //Add array of unique ages using JSONPath Expression
    let uniqueAges = asl.jsonPathExpression(bySpecies, "..age");
    let falttenedPets = asl.jsonPathExpression(bySpecies, "[*][*][*]");
});
