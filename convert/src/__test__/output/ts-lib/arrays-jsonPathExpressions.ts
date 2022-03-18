
import * as asl from "@ts2asl/asl-lib"

export const serializeArray = asl.deploy.asStateMachine(async () => {
  let myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[];
  let mySerializedArray = asl.states.jsonToString(myArray);
  myArray = asl.states.stringToJson(mySerializedArray) as number[];
  return myArray;
});

export const mapArray = asl.deploy.asStateMachine(async () => {
  let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return myArray.map(x => {
    if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {
      return {
        age: x,
        species: "dog",
      }
    } else {
      return {
        age: x,
        species: "cat",
      }
    }
  });
});

export const filterArray = asl.deploy.asStateMachine(async () => {
  const mappedArray = [{ age: 1, species: "dog" }, { age: 2, species: "cat" }, { age: 3, species: "dog" }, { age: 4, species: "cat" }, { age: 11, species: "dog" }, { age: 12, species: "car" }, { age: 13, species: "dog" }, { age: 14, species: "cat" }]
  const filterArray = {
    cats: {
      young: mappedArray.filter(x => x.species === "cat" && x.age < 5),
      old: mappedArray.filter(x => x.species === "cat" && x.age >= 5),
    },
    dogs: {
      young: mappedArray.filter(x => x.species === "dog" && x.age < 5),
      old: mappedArray.filter(x => x.species === "dog" && x.age >= 5),
    }
  }
  return filterArray;
});

export const jsonPathExpressions = asl.deploy.asStateMachine(async () =>{
    const filterArray = asl.pass({
        name: "Assign filterArray",
        parameters: () => ({
            cats: {
                young: [{ age: 2, species: "cat" }, { age: 4, species: "cat" }],
                old: [{ age: 12, species: "cat" }, { age: 14, species: "cat" }],
            },
            dogs: {
                young: [{ age: 1, species: "dog" }, { age: 3, species: "dog" }],
                old: [{ age: 11, species: "dog" }, { age: 13, species: "dog" }]
            }
        }),
        comment: "filterArray = {\n    cats: {\n      young: [{ age: 2, species: \"cat\" }, { age: 4, species: \"cat\" }],\n      old: [{ age: 12, species: \"cat\" }, { age: 14, species: \"cat\" }],\n    },\n    dogs: {\n      young: [{ age: 1, species: \"dog\" }, { age: 3, species: \"dog\" }],\n      old: [{ age: 11, species: \"dog\" }, { age: 13, species: \"dog\" }]\n    }\n  }"
    });
    //Add array of unique ages using JSONPath Expression
    let uniqueAges = asl.jsonPathExpression(filterArray, "..age");
    let flattenedPets = asl.jsonPathExpression(filterArray, "[*][*][*]");
    let slicedArr = asl.jsonPathSlice(filterArray.cats.young, 1, 1);
    return {
        uniqueAges,
        flattenedPets,
        slicedArr
    };
});