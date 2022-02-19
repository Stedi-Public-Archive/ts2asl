import { Identifier, Scope } from "../convert-asllib-to-iasl/ast";


export const createParameters = (scope: Scope, others: { mapInputArgument?: Identifier } = {}) => {
  const variables: Record<string, string> = {};
  if (others.mapInputArgument) {
    const name = others.mapInputArgument.identifier;
    variables[`${name}.$`] = "$$.Map.Item.Value";
  }

  for (const enclosed of scope.enclosed) {
    variables[`${enclosed}.$`] = `$.vars.${enclosed}`;
  }

  if (Object.entries(variables).length > 0) {
    return { Parameters: { vars: variables } }
  }

  return {};
}