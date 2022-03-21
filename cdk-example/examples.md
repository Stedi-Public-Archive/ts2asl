

## serialize array

This example shows how to serialize and deserialize an array. Open in playground

``` typescript
export const serializeArray = asl.deploy.asStateMachine(async () => {
  let myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[];
  let mySerializedArray = asl.states.jsonToString(myArray);
  myArray = asl.states.stringToJson(mySerializedArray) as number[];
  return myArray;
});
````
