import { Operator } from "asl-types/dist/choice";
export declare const internalWaitSeconds: (seconds: number) => Promise<void>;
export declare const internalEvaluateOperator: (operator: Operator) => boolean;
