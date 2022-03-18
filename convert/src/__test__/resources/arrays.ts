
import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, context: asl.StateMachineContext<{}>) => {
  let myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[];
  let mySerializedArray = asl.states.jsonToString(myArray);
  myArray = asl.states.stringToJson(mySerializedArray) as number[];

  //Create Pets
  let pets = myArray.map(x => {
    if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {
      return {
        age: x,
        species: "dog",
        createdBy: context.state.name,
      }
    } else {
      return {
        age: x,
        species: "cat",
        createdBy: context.state.name,
      }
    }
  });

  //Create separate list of cats and dogs using JSONPath Expressions
  let bySpecies = {
    cats: {
      young: pets.filter(x => x.species === "cat" && x.age < 5),
      old: pets.filter(x => x.species === "cat" && x.age >= 5),
    },
    dogs: {
      young: pets.filter(x => x.species === "dog" && x.age < 5),
      old: pets.filter(x => x.species === "dog" && x.age >= 5),
    }
  }

  //Add array of unique ages using JSONPath Expression
  let uniqueAges = asl.jsonPathExpression(bySpecies, "..age");
  let flattenedPets = asl.jsonPathExpression(bySpecies, "[*][*][*]")
  let slicedArr = asl.jsonPathSlice(pets, 3, 5)

  return {
    bySpecies,
    uniqueAges,
    flattenedPets,
    slicedArr
  }
});
