/* tslint:disable */
/**
 * This file was automatically generated */

import {StateMachine} from "./state-machine";
import {State} from "./state";
import {Choice} from "./choice";
import {Parallel} from "./parallel";
import {Pass} from "./pass";
import {Succeed} from "./succeed";
import {Task} from "./task";
import {Wait} from "./wait";
import {Map} from "./map";

export interface Fail {
  Type: string;
  Comment?: string;
  OutputPath?: string | null;
  InputPath?: string | null;
  Cause?: string;
  Error?: string;
}
