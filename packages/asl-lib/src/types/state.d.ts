/* tslint:disable */
/**
 * This file was automatically generated */

import {StateMachine} from "./state-machine";
import {Choice} from "./choice";
import {Fail} from "./fail";
import {Parallel} from "./parallel";
import {Pass} from "./pass";
import {Succeed} from "./succeed";
import {Task} from "./task";
import {Wait} from "./wait";
import {Map} from "./map";

export type State = Choice | Fail | Parallel | Pass | Succeed | Task | Wait | Map;
