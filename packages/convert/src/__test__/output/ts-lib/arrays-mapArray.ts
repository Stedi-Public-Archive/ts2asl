
import * as asl from "@ts2asl/asl-lib"

export const serializeArray = asl.deploy.asStateMachine(async () => {
  let myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[];
  let mySerializedArray = asl.states.jsonToString(myArray);
  myArray = asl.states.stringToJson(mySerializedArray) as number[];
  return myArray;
});

export const mapArray = asl.deploy.asStateMachine(async () =>{
    let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return asl.map({
        name: "myArray.map => x",
        items: () => myArray,
        iterator: x => {
            asl.typescriptIf({
                name: "If (x === 1 || x === 3 || ...",
                condition: () => x === 1 || x === 3 || x === 5 || x === 7 || x == 9,
                then: async () => {
                    return {
                        age: x,
                        species: "dog",
                    };
                },
                else: async () => {
                    return {
                        age: x,
                        species: "cat",
                    };
                },
                comment: "if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {\n      return {\n        age: x,\n        species: \"dog\",\n      }\n    } else {\n      return {\n        age: x,\n        species: \"cat\",\n      }\n    }"
            })
        },
        comment: "myArray.map(x => {\n    if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {\n      return {\n        age: x,\n        species: \"dog\",\n      }\n    } else {\n      return {\n        age: x,\n        species: \"cat\",\n      }\n    }\n  })"
    });
});

export const mapArraySimple = asl.deploy.asStateMachine(async () => {
  const mappedArray = [{ age: 1, species: "dog" }, { age: 2, species: "cat" }, { age: 3, species: "dog" }, { age: 4, species: "cat" }, { age: 11, species: "dog" }, { age: 12, species: "car" }, { age: 13, species: "dog" }, { age: 14, species: "cat" }]
  const ages = mappedArray.map(x => x.age);
  const species = mappedArray.map(x => x.species);
  return {
    ages, species
  }
});

export const mapArrayNestedPropertyAccess = asl.deploy.asStateMachine(async () => {
  const source = [{ obj: { num: 23, str: "str" } }]
  const num = source.map(x => x.obj.num);
  const str = source.map(x => x.obj.str);
  return {
    num: num[0], 
    str: str[0]
  }
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

export const jsonPathExpressions = asl.deploy.asStateMachine(async () => {
  const filterArray = {
    cats: {
      young: [{ age: 2, species: "cat" }, { age: 4, species: "cat" }],
      old: [{ age: 12, species: "cat" }, { age: 14, species: "cat" }],
    },
    dogs: {
      young: [{ age: 1, species: "dog" }, { age: 3, species: "dog" }],
      old: [{ age: 11, species: "dog" }, { age: 13, species: "dog" }]
    }
  }
  //Add array of unique ages using JSONPath Expression
  let ages = asl.jsonPathExpression(filterArray, "..age");
  let flattenedPets = asl.jsonPathExpression(filterArray, "[*][*][*]")
  let slicedArr = asl.jsonPathSlice(filterArray.cats.young, 1, 1)

  return {
    ages,
    flattenedPets,
    slicedArr
  }
});