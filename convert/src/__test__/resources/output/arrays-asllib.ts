
import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, context: asl.StateMachineContext<{}>) => {
    asl.pass({
        parameters: () => asl.states.format("Starting execution of {} at {} with role of {}", context.stateMachine.name, context.execution.startTime, context.execution.roleArn),
        comment: "console.log(asl.states.format(\"Starting execution of {} at {} with role of {}\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn))"
    });
    let myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let mySerializedArray = asl.states.jsonToString(myArray);
    myArray = asl.states.stringToJson(mySerializedArray);
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
        name: "Assign bySpecies",
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
    const result = asl.jsonPathExpression(array, item => item.attr)
    //Add array of unique ages using JSONPath Expression
    let uniqueAges = asl.jsonPathExpression(bySpecies, "..age");
    let flattenedPets = asl.jsonPathExpression(bySpecies, "[*][*][*]");
    let slicedArr = asl.jsonPathSlice(pets, 3, 5);
    return {
        bySpecies,
        uniqueAges,
        flattenedPets,
        slicedArr
    };
});
