import { callStatementTransformer } from "./call-statement";
import { ifStatementTransformer } from "./if-statement";
import { promiseAllStatementTransformer } from "./promise-all-statement";
import { returnStatementTransformer } from "./return-statement";
import { switchStatementTransformer } from "./switch-statement";
import { throwStatementTransformer } from "./throw-statement";
import { tryStatementTransformer } from "./try-statement";
import { variableStatementTransformer } from "./variable-statement";
import { whileStatementTransformer } from "./while-statement";

export const transformers = [
  ifStatementTransformer,
  returnStatementTransformer,
  switchStatementTransformer,
  throwStatementTransformer,
  tryStatementTransformer,
  variableStatementTransformer,
  promiseAllStatementTransformer,
  callStatementTransformer,
  whileStatementTransformer
];