import { Scope } from "../convert-asllib-to-iasl/ast";
import * as iasl from "../convert-asllib-to-iasl/ast"

export type Scopes = Record<string, Scope>

const getVariableName = (identifier: iasl.Identifier)  => {
  if (identifier.lhs) {
    return getVariableName(identifier.lhs)
  }
  const parts = identifier.identifier.split('.');
  return parts[0]
}

export const assignScopes = (statemachine: iasl.StateMachine) => {
  const scope = { accessed: [], enclosed: [], childScopes: [], parentScope: undefined, id: "root" };
  iasl.assignScopes(statemachine, scope, (expression, scope) => {

    if (iasl.Check.isIdentifier(expression)) {
    const variableName = getVariableName(expression);
      if (!scope.accessed.includes(variableName)) {
        scope.accessed.push(variableName);
      }
    }
  });

  let scopes: Scopes = {};
  visitScopes(scope, scope => {
    scopes[scope.id] = scope;
    for (const accessed of scope.accessed) {
      let contextual = scope.parentScope;
      let parents: iasl.Scope[] = [];
      let enclosed = false;
      while (contextual) {
        if (contextual.accessed.includes(accessed)) {
          enclosed = true;
          break;
        }
        parents.push(contextual);
        contextual = contextual.parentScope;
      }
      if (!enclosed) continue;
      for (const p of parents) {
        p.enclosed.push(accessed);
      }
      scope.enclosed.push(accessed);
    }
  });
  return scopes;

}
export const visitScopes = (scope: Scope, visitor: (scope: Scope) => void) => {
  for (const child of scope.childScopes) {
    visitScopes(child, visitor)
  }
  visitor(scope);
}

let scopeCounter = 0;