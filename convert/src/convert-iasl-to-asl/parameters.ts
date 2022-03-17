import { Identifier, Scope } from "../convert-asllib-to-iasl/ast";
import * as iasl from "../convert-asllib-to-iasl/ast"
import { Scopes } from "./scopes";

export const createParametersForMap = (scopes: Scopes, iterator: iasl.Function, inputArgument?: Identifier) => {
  const variables = createVariables(scopes, iterator);
  if (inputArgument) {
    const name = inputArgument.identifier;
    variables[`${name}.$`] = "$$.Map.Item.Value";
  }
  return convertToParameters(variables);
}


export const createParameters = (scopes: Scopes, blocks: (iasl.Block | undefined)[]) => {
  const variables = blocks.filter(x => x).map(x => createVariables(scopes, x!));
  const combined = variables.reduce((res, item) => ({ ...res, ...item }), {})
  return convertToParameters(combined);
}


const createVariables = (scopes: Scopes, block: iasl.Block) => {
  const variables: Record<string, string> = {};

  if (block.scope) {
    const scope = scopes[block.scope]
    for (const enclosed of scope.enclosed) {
      variables[`${enclosed}.$`] = `$.vars.${enclosed}`;
    }
  }

  return variables;
}

const convertToParameters = (variables: Record<string, string>) => {
  if (Object.entries(variables).length > 0) {
    return { Parameters: { vars: variables } }
  }

  return {};
}


