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
import {Task} from "./task";
import {Wait} from "./wait";

export interface Map {
  Type: string;
  Next?: string;
  End?: true;
  Comment?: string;
  OutputPath?: string | null;
  InputPath?: string | null;
  ResultPath?: string | null;
  ItemsPath?: string | null;
  MaxConcurrency?: number;
  Iterator: StateMachine;
  Parameters?: {
    [k: string]: any;
  };
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
}
