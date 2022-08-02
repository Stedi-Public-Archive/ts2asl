/* tslint:disable */
/**
 * This file was automatically generated */

import {StateMachine} from "./state-machine";
import {State} from "./state";
import {Choice} from "./choice";
import {Fail} from "./fail";
import {Parallel} from "./parallel";
import {Succeed} from "./succeed";
import {Task} from "./task";
import {Wait} from "./wait";
import {Map} from "./map";

export interface Pass {
  Type: string;
  Next?: string;
  End?: true;
  Comment?: string;
  OutputPath?: string | null;
  InputPath?: string | null;
  ResultPath?: string;
  Parameters?: {
    [k: string]: any;
  };
  Result?: any;
}
