import { Operator } from "asl-types/dist/choice";



export const internalWaitSeconds = async (seconds: number): Promise<void> => {
  return new Promise((resolve: Function) => {
    setTimeout(resolve, seconds * 1000);
  });
}

export const internalEvaluateOperator = (operator: Operator) => {
  return true;
};



