import { callStatementTransformer } from "./call-statement";
import { doWhileStatementTransformer } from "./do-while-statement";
import { forOfStatementTransformer } from "./for-of-statement";
import { ifStatementTransformer } from "./if-statement";
import { promiseAllStatementTransformer } from "./promise-all-statement";
import { removeUnnecessaryExpressionsTransformer } from "./remove-unneccesary-expressionts";
import { switchStatementTransformer } from "./switch-statement";
import { throwStatementTransformer } from "./throw-statement";
import { tryStatementTransformer } from "./try-statement";
import { unsupportedStatementTransformer } from "./unsupported";
import { variableStatementTransformer } from "./variable-statement";
import { whileStatementTransformer } from "./while-statement";
import { consoleLogStatementTransformer } from "./log-statement";
import { arrayFilterTransformer } from "./array-filter-statement";
import { arrayMapTransformer } from "./array-map-statement";
import { arrayLengthTransformer } from "./array-length-statement";

export const transformers = [
  removeUnnecessaryExpressionsTransformer,
  unsupportedStatementTransformer,
  ifStatementTransformer,
  arrayFilterTransformer,
  arrayMapTransformer,
  arrayLengthTransformer,
  switchStatementTransformer,
  throwStatementTransformer,
  tryStatementTransformer,
  variableStatementTransformer,
  promiseAllStatementTransformer,
  consoleLogStatementTransformer,
  callStatementTransformer,
  whileStatementTransformer,
  doWhileStatementTransformer,
  forOfStatementTransformer,
];