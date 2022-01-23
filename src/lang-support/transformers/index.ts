import { callStatementTransformer } from "./call-statement";
import { forOfStatementTransformer } from "./for-of-statement";
import { ifStatementTransformer } from "./if-statement";
import { promiseAllStatementTransformer } from "./promise-all-statement";
import { returnStatementTransformer } from "./return-statement";
import { switchStatementTransformer } from "./switch-statement";
import { throwStatementTransformer } from "./throw-statement";
import { tryStatementTransformer } from "./try-statement";
import { unsupportedStatementTransformer } from "./unsupported";
import { variableStatementTransformer } from "./variable-statement";
import { whileStatementTransformer } from "./while-statement";

export const transformers = [
  unsupportedStatementTransformer,
  ifStatementTransformer,
  returnStatementTransformer,
  switchStatementTransformer,
  throwStatementTransformer,
  tryStatementTransformer,
  variableStatementTransformer,
  promiseAllStatementTransformer,
  callStatementTransformer,
  whileStatementTransformer,
  forOfStatementTransformer
];