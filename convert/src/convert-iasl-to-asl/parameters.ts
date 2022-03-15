import { Identifier, Scope } from "../convert-asllib-to-iasl/ast";


export const createParameters = (scope: Scope | Scope[], others: { mapInputArgument?: Identifier } = {}) => {
  const variables: Record<string, string> = {};
  if (others.mapInputArgument) {
    const name = others.mapInputArgument.identifier;
    variables[`${name}.$`] = "$$.Map.Item.Value";
  }

  const scopes = Array.isArray(scope) ? scope : [scope];
  for (const _scope of scopes) {
    for (const enclosed of _scope.enclosed) {
      variables[`${enclosed}.$`] = `$.vars.${enclosed}`;
    }
  }

  if (Object.entries(variables).length > 0) {
    return { Parameters: { vars: variables } }
  }

  return {};
}