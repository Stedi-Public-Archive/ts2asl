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
import {Map} from "./map";

export interface Wait {
  Type: string;
  Next?: string;
  End?: true;
  Comment?: string;
  OutputPath?: string | null;
  InputPath?: string | null;
  Seconds?: number;
  Timestamp?: string;
  SecondsPath?: string | null;
  TimestampPath?: string | null;
}
