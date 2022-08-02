/* tslint:disable */
/**
 * This file was automatically generated */

import {StateMachine} from "./state-machine";
import {State} from "./state";
import {Choice} from "./choice";
import {Fail} from "./fail";
import {Parallel} from "./parallel";
import {Pass} from "./pass";
import {Succeed} from "./succeed";
import {Wait} from "./wait";
import {Map} from "./map";

export interface Task {
  Type: string;
  Next?: string;
  End?: true;
  Comment?: string;
  OutputPath?: string | null;
  InputPath?: string | null;
  Resource:
    | string
    | {
        [k: string]: any;
      };
  ResultPath?: string | null;
  Retry?: {
    ErrorEquals: string[];
    IntervalSeconds?: number;
    MaxAttempts?: number;
    BackoffRate?: number;
    [k: string]: any;
  }[];
  Catch?: {
    ErrorEquals: string[];
    Next: string;
    [k: string]: any;
  }[];
  TimeoutSeconds?: number;
  HeartbeatSeconds?: number;
  Parameters?: {
    [k: string]: any;
  };
}
