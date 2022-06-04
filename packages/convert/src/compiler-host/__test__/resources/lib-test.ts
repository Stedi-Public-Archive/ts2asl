import * as asl from '@ts2asl/asl-lib';
import { lambdaImplementation } from './lambda';
const num = asl.deploy.evalConst(23);
const str = asl.deploy.evalConst("");
const statemachine = asl.deploy.asStateMachine(async (arg: {}) => "hello");
const lambda = asl.deploy.asLambda(lambdaImplementation);
const result = (await lambda({ num, str })).num;
