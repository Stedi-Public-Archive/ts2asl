
export enum SyntaxKind {
  Identifier = "identifier",
  Literal = "literal",
  LiteralArray = "literal-array",
  LiteralObject = "literal-object",
  StateMachine = "statemachine",
  Function = "function",
  BinaryExpression = "binary-expression",
  AslIntrinsicFunction = "asl-intrinsic-function",
  VariableAssignmentStatement = "variable-assignment",
  Block = "block",
  IfStatement = "if",
  TryStatement = "try",
  CaseStatement = "case",
  WhileStatement = "while",
  DoWhileStatement = "do-while",
  ReturnStatement = "return",
  AslWaitState = "asl-wait-state",
  AslParallelState = "asl-parallel-state",
  AslPassState = "asl-pass-state",
  AslTaskState = "asl-task-state",
  AslChoiceState = "asl-choice-state",
  AslMapState = "asl-map-state",
  AslFailState = "asl-fail-state",
  AslSucceedState = "asl-succeed-state",
  TypeOfExpression = "type-of-expression",
}

export class Check {
  static isIdentifier(expr: Identifier | Expression | undefined): expr is Identifier {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Identifier;
  }
  static isLiteralArray(expr: Identifier | Expression | undefined): expr is LiteralArrayExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.LiteralArray;
  }
  static isLiteral(expr: Identifier | Expression | undefined): expr is LiteralExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Literal;
  }
  static isLiteralObject(expr: Identifier | Expression | undefined): expr is LiteralObjectExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.LiteralObject;
  }
  static isStateMachine(expr: Identifier | Expression | undefined): expr is StateMachine {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.StateMachine;
  }
  static isFunction(expr: Identifier | Expression | undefined): expr is Function {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Function;
  }
  static isBlock(expr: Identifier | Expression | undefined): expr is Block {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Block;
  }
  static isBinaryExpression(expr: Identifier | Expression | undefined): expr is BinaryExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.BinaryExpression;
  }
  static isVariableAssignment(expr: Identifier | Expression | undefined): expr is VariableAssignmentStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.VariableAssignmentStatement;
  }
  static isTypeOfExpression(expr: Identifier | Expression | undefined): expr is TypeOfExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.TypeOfExpression;
  }
  static isIfExpression(expr: Identifier | Expression | undefined): expr is IfExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.IfStatement;
  }
  static isTryExpression(expr: Identifier | Expression | undefined): expr is TryStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.TryStatement;
  }
  static isCaseStatement(expr: Identifier | Expression | undefined): expr is CaseStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.CaseStatement;
  }
  static isWhileStatement(expr: Identifier | Expression | undefined): expr is WhileStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.WhileStatement;
  }
  static isDoWhileStatement(expr: Identifier | Expression | undefined): expr is DoWhileStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.DoWhileStatement;
  }
  static isReturnStatement(expr: Identifier | Expression | undefined): expr is ReturnStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.ReturnStatement;
  }
  static isAslWaitState(expr: Identifier | Expression | undefined): expr is WaitState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslWaitState;
  }
  static isAslParallelState(expr: Identifier | Expression | undefined): expr is ParallelState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslParallelState;
  }
  static isAslPassState(expr: Identifier | Expression | undefined): expr is PassState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslPassState;
  }
  static isAslTaskState(expr: Identifier | Expression | undefined): expr is TaskState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslTaskState;
  }
  static isAslChoiceState(expr: Identifier | Expression | undefined): expr is ChoiceState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslChoiceState;
  }
  static isAslMapState(expr: Identifier | Expression | undefined): expr is MapState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslMapState;
  }
  static isAslFailState(expr: Identifier | Expression | undefined): expr is FailState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslFailState;
  }
  static isAslSucceedState(expr: Identifier | Expression | undefined): expr is SucceedState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslSucceedState;
  }
  static isAslIntrinsicFunction(expr: Identifier | Expression | undefined): expr is AslIntrinsicFunction {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslIntrinsicFunction;
  }
}

export const visitScopes = (scope: Scope, visitor: (scope: Scope) => void) => {
  for (const child of scope.childScopes) {
    visitScopes(child, visitor)
  }
  visitor(scope);
}

let scopeCounter = 0;

export const visitNodes = (node: Expression, scope: Scope, visitor: (node: Expression, scope: Scope) => void) => {
  visitor(node, scope);
  if (Check.isVariableAssignment(node)) {
    visitNodes(node.name, scope, visitor);
    visitNodes(node.expression, scope, visitor);
  } else if (Check.isAslIntrinsicFunction(node)) {
    for (const arg of node.arguments) {
      visitNodes(arg, scope, visitor);
    }
  }
  else if (Check.isTypeOfExpression(node)) {
    visitNodes(node.operand, scope, visitor)
  } else if (Check.isBinaryExpression(node)) {
    if (node.lhs) visitNodes(node.lhs, scope, visitor)
    visitNodes(node.rhs, scope, visitor)
  } else if (Check.isBlock(node)) {
    for (const child of node.statements) {
      visitNodes(child, scope, visitor)
    }
  } else if (Check.isFunction(node)) {
    if (node.inputArgumentName) visitNodes(node.inputArgumentName, scope, visitor)
    for (const child of node.statements) {
      visitNodes(child, scope, visitor)
    }
  } else if (Check.isStateMachine(node)) {
    const childScope = { accessed: [], enclosed: [], childScopes: [], parentScope: scope, id: "state-machine" + (scopeCounter += 1) } as Scope;
    scope.childScopes.push(childScope);
    for (const child of node.statements) {
      visitNodes(child, childScope, visitor)
    }
    node.scope = childScope.id;
  } else if (Check.isAslChoiceState(node)) {
    for (const choice of (node.choices || [])) {
      visitNodes(choice.when, scope, visitor)
      visitNodes(choice.then, scope, visitor);
    }
    if (node.default) visitNodes(node.default, scope, visitor);
  } else if (Check.isAslMapState(node)) {
    const childScope = { accessed: [], enclosed: [], childScopes: [], parentScope: scope, id: "asl-map-state" + (scopeCounter += 1) } as Scope;
    scope.childScopes.push(childScope);
    visitNodes(node.iterator, childScope, visitor);
    visitNodes(node.items, childScope, visitor);
    node.iterator.scope = childScope.id;
  } else if (Check.isAslParallelState(node)) {
    for (const child of node.branches) {
      const childScope = { accessed: [], enclosed: [], childScopes: [], parentScope: scope, id: "asl-parallel-branch" + (scopeCounter += 1) } as Scope;
      scope.childScopes.push(childScope);
      visitNodes(child, childScope, visitor)
      child.scope = childScope.id;
    }
  } else if (Check.isIfExpression(node)) {
    visitNodes(node.condition, scope, visitor);
    visitNodes(node.then, scope, visitor);
    if (node.else) visitNodes(node.else, scope, visitor);
  } else if (Check.isCaseStatement(node)) {
    for (const child of (node.cases || [])) {
      for (const when of child.when) {
        visitNodes(when, scope, visitor);
      }
      visitNodes(child.then, scope, visitor)
    }
  } else if (Check.isDoWhileStatement(node)) {
    visitNodes(node.condition, scope, visitor);
    const childScope = { accessed: [], enclosed: [], childScopes: [], parentScope: scope, id: "ts-do-while" + (scopeCounter += 1) } as Scope;
    scope.childScopes.push(childScope);
    visitNodes(node.while, childScope, visitor)
    node.while.scope = childScope.id;
  } else if (Check.isTryExpression(node)) {
    visitNodes(node.try, scope, visitor);
    for (const child of (node.catch || [])) {
      visitNodes(child.block, scope, visitor)
    }
    if (node.finally) visitNodes(node.finally, scope, visitor);
  } else if (Check.isWhileStatement(node)) {
    visitNodes(node.condition, scope, visitor);
    const childScope = { accessed: [], enclosed: [], childScopes: [], parentScope: scope, id: "ts-while" + (scopeCounter += 1) } as Scope;
    scope.childScopes.push(childScope);
    visitNodes(node.while, childScope, visitor);
    node.while.scope = childScope.id;
  } else if (Check.isAslPassState(node)) {
    visitNodes(node.parameters, scope, visitor)
  } else if (Check.isLiteralObject(node)) {
    for (const prop of Object.values(node.properties)) {
      visitNodes(prop, scope, visitor)
    }
  } else if (Check.isAslWaitState(node)) {
    visitNodes(node.seconds, scope, visitor)
    visitNodes(node.timestamp, scope, visitor)
  }
}

export interface StateMachine extends Function {
  contextArgumentName?: Identifier;
  _syntaxKind: SyntaxKind.StateMachine;
}
export interface Function extends Block, DeclaresScope {
  inputArgumentName?: Identifier;
  _syntaxKind: SyntaxKind.Function | SyntaxKind.StateMachine;
}

//could be 'name' or 'name.path.parts'
export interface Identifier {
  objectContextExpression?: true;
  identifier: string;
  indexExpression?: Identifier | Expression;
  lhs?: Identifier;
  type: Type;
  _syntaxKind: SyntaxKind.Identifier;
}

export interface Expression {
  _syntaxKind: string;
  source?: string;
  comment?: string;
}

export interface DeclaresScope {
  scope?: string;
}

export interface Scope {
  id: string;
  accessed: string[];
  enclosed: string[];
  childScopes: Scope[];
  parentScope: Scope | undefined;
}

export type BinaryOperator = "and" | "or" | "not" | "is-present" | "matches" | "eq" | "gt" | "gte" | "lt" | "lte";


export interface BinaryExpression extends Expression {
  _syntaxKind: SyntaxKind.BinaryExpression;
  lhs?: Identifier | Expression; // unary expression lhs -> undefined
  operator: BinaryOperator;
  rhs: Identifier | Expression;
}

export type LiteralExpressionLike = LiteralExpression | LiteralObjectExpression | LiteralArrayExpression | StateMachine;

export interface LiteralExpression extends Expression {
  _syntaxKind: SyntaxKind.Literal;
  value: string | boolean | number | null;
  type: Type;
}

export type Type = "string" | "boolean" | "numeric" | "timestamp" | "object" | "array" | "unknown" | "null";

export interface AslIntrinsicFunction extends Expression {
  _syntaxKind: SyntaxKind.AslIntrinsicFunction;
  function: string;
  type: Type;
  arguments: Array<Identifier | LiteralExpressionLike>;
}

export interface LiteralObjectExpression extends Expression {
  _syntaxKind: SyntaxKind.LiteralObject;
  properties: Record<string, Expression | Identifier>;
}

export interface LiteralArrayExpression extends Expression {
  _syntaxKind: SyntaxKind.LiteralArray;
  elements: Array<Expression | Identifier>;
}

export interface IfExpression extends Expression {
  _syntaxKind: SyntaxKind.IfStatement;
  condition: BinaryExpression;
  then: Block;
  else?: Block;
}
export interface TypeOfExpression extends Expression {
  _syntaxKind: SyntaxKind.TypeOfExpression;
  operand: Identifier | Expression;
}

export interface TryStatement extends Expression {
  _syntaxKind: SyntaxKind.TryStatement;
  try: Block;
  catch?: { errorFilter: string[], block: Block }[]
  finally?: Block;
}

export interface CaseStatement extends Expression {
  _syntaxKind: SyntaxKind.CaseStatement;
  variable: Identifier;
  cases?: Array<{ when: LiteralExpression[], then: Block }>;
  default?: Block;
}

export interface DoWhileStatement extends Expression {
  _syntaxKind: SyntaxKind.DoWhileStatement;
  while: Block & DeclaresScope;
  condition: BinaryExpression;
}

export interface WhileStatement extends Expression {
  _syntaxKind: SyntaxKind.WhileStatement;
  condition: BinaryExpression;
  while: Block & DeclaresScope;
}

export interface VariableAssignmentStatement extends Expression {
  _syntaxKind: SyntaxKind.VariableAssignmentStatement;
  name: Identifier;
  expression: Expression;
}

export interface ReturnStatement extends Expression {
  _syntaxKind: SyntaxKind.ReturnStatement;
  expression: Expression;
}

export interface Block extends Expression {
  _syntaxKind: SyntaxKind.Block | SyntaxKind.Function | SyntaxKind.StateMachine;
  statements: Expression[]
}

///ASL States

export interface AslState extends Expression {
}

export declare type RetryConfiguration = Array<{
  errorFilter: string[];
  intervalSeconds?: number;
  maxAttempts?: number;
  backoffRate?: number;
}>

export type CatchConfiguration = Array<{ errorFilter: string[], block: Block }>;

export interface WaitState extends AslState {
  _syntaxKind: SyntaxKind.AslWaitState;
  seconds: LiteralExpressionLike | Identifier;
  timestamp: LiteralExpressionLike | Identifier;
}

export interface ParallelState extends AslState {
  _syntaxKind: SyntaxKind.AslParallelState
  branches: (Function & DeclaresScope)[];
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
}

export interface PassState extends AslState {
  _syntaxKind: SyntaxKind.AslPassState;

  //if identifier, assign to ResultPath
  //if (all) literal, assign to Result
  //otherwise assign to Parameters
  parameters: LiteralExpressionLike | Identifier;
}

export interface TaskState extends AslState {
  _syntaxKind: SyntaxKind.AslTaskState;
  resource: string;
  parameters: LiteralExpressionLike | Identifier;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
}

export interface ChoiceState extends AslState {
  _syntaxKind: SyntaxKind.AslChoiceState
  choices?: Array<{ when: BinaryExpression, then: Block }>;
  default?: Block;
}

export interface MapState extends AslState {
  _syntaxKind: SyntaxKind.AslMapState;
  iterator: Function & DeclaresScope;
  items: Identifier;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  maxConcurrency?: number;
}

export interface FailState extends AslState {
  _syntaxKind: SyntaxKind.AslFailState
  cause?: string;
  error?: string;
}

export interface SucceedState extends AslState {
  _syntaxKind: SyntaxKind.AslSucceedState;
}

