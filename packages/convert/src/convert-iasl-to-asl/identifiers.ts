import * as iasl from "../convert-asllib-to-iasl/ast";

export const replaceIdentifiers = <T extends iasl.Expression>(expression: T, replacers: IdentifierReplacer[]): T => {
  const clone = JSON.parse(JSON.stringify(expression)) as T;
  const rootScope = { accessed: [], enclosed: [], childScopes: [], parentScope: undefined, id: "root" };
  iasl.visitNodes(clone, (expression) => {
    if (iasl.Check.isIdentifier(expression)) {
      for (const replacer of replacers) {
        replacer.replace(expression);
      }
    }
  });
  return clone;
};


export interface IdentifierReplacer {
  replace: (identifier: iasl.Identifier) => void;
}

export const createObjectContextReplacer = (objectContextName: string) => {
  return {
    replace: (identifier: iasl.Identifier) => {
      if (identifier.identifier === objectContextName) {
        identifier.identifier = "$$";
      } else if (identifier.identifier.startsWith(objectContextName + ".")) {
        const parts = identifier.identifier.replace(objectContextName + ".", "").split(".");
        const converted = parts.map(x => x[0].toUpperCase() + x.substring(1)).join(".");
        identifier.identifier = converted;
        identifier.objectContextExpression = true;
      } 
    }
  } as IdentifierReplacer;
};

export const createReplacer = (inputArgumentName: string, root: string = "$.vars") => {
  return {
    replace: (identifier: iasl.Identifier) => {
      if (identifier.identifier === inputArgumentName) {
        identifier.identifier = root;
      } else if (identifier.identifier.startsWith(inputArgumentName + ".")) {
        identifier.identifier = identifier.identifier.replace(inputArgumentName + ".", root + ".");
      } else {
        
      }
    }
  } as IdentifierReplacer;
};