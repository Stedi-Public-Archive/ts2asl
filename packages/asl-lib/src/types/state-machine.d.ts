/* tslint:disable */
/**
 * This file was automatically generated */

import {State} from "./state";
import {Choice} from "./choice";
import {Fail} from "./fail";
import {Parallel} from "./parallel";
import {Pass} from "./pass";
import {Succeed} from "./succeed";
import {Task} from "./task";
import {Wait} from "./wait";
import {Map} from "./map";

/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.{1,128}$".
 */
export interface StateMachine {
  Comment?: string;
  StartAt: string;
  States: {
    [k: string]: State;
  };
  Version?: string;
  TimeoutSeconds?: number;
}
