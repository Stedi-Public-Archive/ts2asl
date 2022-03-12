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
import { ConverterOptions } from "../../convert";

export const createTransformers = (converterOptions: ConverterOptions = {}) => {
  return [
    removeUnnecessaryExpressionsTransformer(converterOptions),
    unsupportedStatementTransformer(converterOptions),
    ifStatementTransformer(converterOptions),
    arrayFilterTransformer(converterOptions),
    arrayMapTransformer(converterOptions),
    arrayLengthTransformer(converterOptions),
    switchStatementTransformer(converterOptions),
    throwStatementTransformer(converterOptions),
    tryStatementTransformer(converterOptions),
    variableStatementTransformer(converterOptions),
    promiseAllStatementTransformer(converterOptions),
    consoleLogStatementTransformer(converterOptions),
    callStatementTransformer(converterOptions),
    whileStatementTransformer(converterOptions),
    doWhileStatementTransformer(converterOptions),
    forOfStatementTransformer(converterOptions),
  ];
}