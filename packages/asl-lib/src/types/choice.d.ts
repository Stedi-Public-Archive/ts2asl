/* tslint:disable */
/**
 * This file was automatically generated */

import {StateMachine} from "./state-machine";
import {State} from "./state";
import {Fail} from "./fail";
import {Parallel} from "./parallel";
import {Pass} from "./pass";
import {Succeed} from "./succeed";
import {Task} from "./task";
import {Wait} from "./wait";
import {Map} from "./map";

export interface Choice {
  Type: string;
  Next?: string;
  End?: true;
  Comment?: string;
  OutputPath?: string | null;
  InputPath?: string | null;
  Choices: Operator[];
  Default?: string;
}
export interface Operator {
  Variable?: string;
  Next?: string;
  And?: Operator[];
  Or?: Operator[];
  Not?: Operator;
  BooleanEquals?: boolean;
  NumericEquals?: number;
  NumericGreaterThan?: number;
  NumericGreaterThanEquals?: number;
  NumericLessThan?: number;
  NumericLessThanEquals?: number;
  StringEquals?: string;
  StringGreaterThan?: string;
  StringGreaterThanEquals?: string;
  StringLessThan?: string;
  StringLessThanEquals?: string;
  TimestampEquals?: string;
  TimestampGreaterThan?: string;
  TimestampGreaterThanEquals?: string;
  TimestampLessThan?: string;
  TimestampLessThanEquals?: string;
  [k: string]: any;
}
