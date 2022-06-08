
export enum SyntaxKind {
  Identifier = "identifier",
  Literal = "literal",
  LiteralArray = "literal-array",
  LiteralObject = "literal-object",
  StateMachine = "statemachine",
  Function = "function",
  BinaryExpression = "binary-expression",
  ConditionalExpression = "conditional-expression",
  AslIntrinsicFunction = "asl-intrinsic-function",
  VariableAssignmentStatement = "variable-assignment",
  Block = "block",
  IfStatement = "if",
  TryStatement = "try",
  CaseStatement = "case",
  Break = "break",
  Continue = "continue",
  Switch = "switch",
  WhileStatement = "while",
  ForEachStatement = "for-each",
  DoWhileStatement = "do-while",
  ReturnStatement = "return",
  AslWaitState = "asl-wait-state",
  AslParallelState = "asl-parallel-state",
  AslPassState = "asl-pass-state",
  AslTaskState = "asl-task-state",
  AslInvokeStateMachine = "asl-invoke-state-machine",
  AslChoiceState = "asl-choice-state",
  AslMapState = "asl-map-state",
  AslFailState = "asl-fail-state",
  AslSucceedState = "asl-succeed-state",
  TypeOfExpression = "type-of-expression",
}

export class Check {
  static isIdentifier(expr: Identifier | Expression | Statement | undefined): expr is Identifier {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Identifier;
  }
  static isLiteralArray(expr: Identifier | Expression | Statement | undefined): expr is LiteralArrayExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.LiteralArray;
  }
  static isLiteral(expr: Identifier | Expression | Statement | undefined): expr is LiteralExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Literal;
  }
  static isLiteralObject(expr: Identifier | Expression | Statement | undefined): expr is LiteralObjectExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.LiteralObject;
  }
  static isStateMachine(expr: Identifier | Expression | Statement | undefined): expr is StateMachine {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.StateMachine;
  }
  static isFunction(expr: Identifier | Expression | Statement | undefined): expr is Function {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Function;
  }
  static isBlock(expr: Identifier | Expression | Statement | undefined): expr is Block {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Block;
  }
  static isSwitch(expr: Identifier | Expression | Statement | undefined): expr is SwitchStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Switch;
  }
  static isBinaryExpression(expr: Identifier | Expression | Statement | undefined): expr is BinaryExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.BinaryExpression;
  }
  static isVariableAssignment(expr: Identifier | Expression | Statement | undefined): expr is VariableAssignmentStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.VariableAssignmentStatement;
  }
  static isTypeOfExpression(expr: Identifier | Expression | Statement | undefined): expr is TypeOfExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.TypeOfExpression;
  }
  static isIfExpression(expr: Identifier | Expression | Statement | undefined): expr is IfStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.IfStatement;
  }
  static isTryExpression(expr: Identifier | Expression | Statement | undefined): expr is TryStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.TryStatement;
  }
  static isWhileStatement(expr: Identifier | Expression | Statement | undefined): expr is WhileStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.WhileStatement;
  }
  static isBreakStatement(expr: Identifier | Expression | Statement | undefined): expr is BreakStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Break;
  }
  static isContinueStatement(expr: Identifier | Expression | Statement | undefined): expr is ContinueStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Continue;
  }
  static isForEachStatement(expr: Identifier | Expression | Statement | undefined): expr is ForEachStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.ForEachStatement;
  }
  static isDoWhileStatement(expr: Identifier | Expression | Statement | undefined): expr is DoWhileStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.DoWhileStatement;
  }
  static isReturnStatement(expr: Identifier | Expression | Statement | undefined): expr is ReturnStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.ReturnStatement;
  }
  static isAslWaitState(expr: Identifier | Expression | Statement | undefined): expr is WaitState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslWaitState;
  }
  static isAslParallelState(expr: Identifier | Expression | Statement | undefined): expr is ParallelState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslParallelState;
  }
  static isAslPassState(expr: Identifier | Expression | Statement | undefined): expr is PassState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslPassState;
  }
  static isAslTaskState(expr: Identifier | Expression | Statement | undefined): expr is TaskState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslTaskState;
  }
  static isAslChoiceState(expr: Identifier | Expression | Statement | undefined): expr is ChoiceState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslChoiceState;
  }
  static isAslMapState(expr: Identifier | Expression | Statement | undefined): expr is MapState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslMapState;
  }
  static isAslFailState(expr: Identifier | Expression | Statement | undefined): expr is FailState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslFailState;
  }
  static isAslSucceedState(expr: Identifier | Expression | Statement | undefined): expr is SucceedState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslSucceedState;
  }
  static isAslIntrinsicFunction(expr: Identifier | Expression | Statement | undefined): expr is AslIntrinsicFunction {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslIntrinsicFunction;
  }
  static isConditionalExpression(expr: Identifier | Expression | Statement | undefined): expr is ConditionalExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.ConditionalExpression;
  }
  static isAslInvokeStateMachine(expr: Identifier | Expression | Statement | undefined): expr is InvokeStateMachineState {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslInvokeStateMachine;
  }
}


export const visitNodes = (node: Expression, visitor: (node: Expression) => void) => {
  visitor(node);
  if (Check.isVariableAssignment(node)) {
    visitNodes(node.name, visitor);
    visitNodes(node.expression, visitor);
  } else if (Check.isAslIntrinsicFunction(node)) {
    for (const arg of node.arguments) {
      visitNodes(arg, visitor);
    }
  } else if (Check.isAslTaskState(node)) {
    visitNodes(node.parameters, visitor);
  } else if (Check.isAslInvokeStateMachine(node)) {
    visitNodes(node.parameters, visitor);
  } else if (Check.isReturnStatement(node)) {
    visitNodes(node.expression, visitor);
  }
  else if (Check.isTypeOfExpression(node)) {
    visitNodes(node.operand, visitor);
  } else if (Check.isBinaryExpression(node)) {
    if (node.lhs) visitNodes(node.lhs, visitor);
    visitNodes(node.rhs, visitor);
  } else if (Check.isBlock(node)) {
    for (const child of node.statements) {
      visitNodes(child, visitor);
    }
  } else if (Check.isFunction(node)) {
    if (node.inputArgumentName) visitNodes(node.inputArgumentName, visitor);
    for (const child of node.statements) {
      visitNodes(child, visitor);
    }
  } else if (Check.isStateMachine(node)) {
    for (const child of node.statements) {
      visitNodes(child, visitor);
    }
  } else if (Check.isAslChoiceState(node)) {
    for (const choice of (node.choices || [])) {
      visitNodes(choice.condition, visitor);
      visitNodes(choice.block, visitor);
    }
    if (node.default) visitNodes(node.default, visitor);
  } else if (Check.isAslMapState(node)) {
    visitNodes(node.items, visitor);
    visitNodes(node.iterator, visitor);
  } else if (Check.isForEachStatement(node)) {
    visitNodes(node.items, visitor);
    visitNodes(node.iterator, visitor);
  } else if (Check.isAslParallelState(node)) {
    for (const child of node.branches) {
      visitNodes(child, visitor);
    }
  } else if (Check.isIfExpression(node)) {
    visitNodes(node.condition, visitor);
    visitNodes(node.then, visitor);
    if (node.else) visitNodes(node.else, visitor);
  } else if (Check.isSwitch(node)) {
    for (const child of (node.cases || [])) {
      if (child.when) {
        visitNodes(child.when, visitor);
      }
      visitNodes(child.then, visitor);
    }
  } else if (Check.isDoWhileStatement(node)) {
    visitNodes(node.condition, visitor);
    visitNodes(node.while, visitor);
  } else if (Check.isTryExpression(node)) {
    visitNodes(node.try, visitor);
    for (const child of (node.catch || [])) {
      visitNodes(child.block, visitor);
    }
    if (node.finally) visitNodes(node.finally, visitor);
  } else if (Check.isWhileStatement(node)) {
    visitNodes(node.condition, visitor);
    visitNodes(node.while, visitor);
  } else if (Check.isAslPassState(node)) {
    visitNodes(node.parameters, visitor);
  } else if (Check.isLiteralObject(node)) {
    for (const prop of Object.values(node.properties)) {
      visitNodes(prop, visitor);
    }
  } else if (Check.isAslWaitState(node)) {
    visitNodes(node.seconds, visitor);
    visitNodes(node.timestamp, visitor);
  } else if (Check.isConditionalExpression(node)) {
    visitNodes(node.condition, visitor);
    visitNodes(node.whenFalse, visitor);
    visitNodes(node.whenTrue, visitor);
  } else if (Check.isIdentifier(node)) {
    if (node.filterExpression) {
      visitNodes(node.filterExpression.argument, visitor);
      visitNodes(node.filterExpression.expression, visitor);
    }
    if (node.indexExpression) {
      visitNodes(node.indexExpression, visitor);
    }
  } else if (Check.isLiteralArray(node)) {
    for(const element of node.elements) {
      visitNodes(element, visitor);
    }
  }
};

let scopeCounter = 1;
export const assignScopes = (node: Expression, scope: Scope, visitor: (node: Expression, scope: Scope) => void) => {
  visitor(node, scope);
  if (Check.isVariableAssignment(node)) {
    assignScopes(node.name, scope, visitor);
    assignScopes(node.expression, scope, visitor);
  } else if (Check.isAslIntrinsicFunction(node)) {
    for (const arg of node.arguments) {
      assignScopes(arg, scope, visitor);
    }
  } else if (Check.isAslTaskState(node)) {
    assignScopes(node.parameters, scope, visitor);
  } else if (Check.isAslInvokeStateMachine(node)) {
    assignScopes(node.parameters, scope, visitor);
  }else if (Check.isReturnStatement(node)) {
    assignScopes(node.expression, scope, visitor);
  }
  else if (Check.isTypeOfExpression(node)) {
    assignScopes(node.operand, scope, visitor);
  } else if (Check.isBinaryExpression(node)) {
    if (node.lhs) assignScopes(node.lhs, scope, visitor);
    assignScopes(node.rhs, scope, visitor);
  } else if (Check.isBlock(node)) {
    const childScope = { accessed: [], enclosed: [], childScopes: [], parentScope: scope, id: "block-" + (scopeCounter += 1) } as Scope;
    scope.childScopes.push(childScope);
    for (const child of node.statements) {
      assignScopes(child, scope, visitor);
    }
    node.scope = childScope.id;
  } else if (Check.isFunction(node)) {
    if (node.inputArgumentName) assignScopes(node.inputArgumentName, scope, visitor);
    const childScope = { accessed: [], enclosed: [], childScopes: [], parentScope: scope, id: "function-" + (scopeCounter += 1) } as Scope;
    scope.childScopes.push(childScope);
    for (const child of node.statements) {
      assignScopes(child, childScope, visitor);
    }
    node.scope = childScope.id;
  } else if (Check.isStateMachine(node)) {
    const childScope = { accessed: [], enclosed: [], childScopes: [], parentScope: scope, id: "state-machine-" + (scopeCounter += 1) } as Scope;
    scope.childScopes.push(childScope);
    for (const child of node.statements) {
      assignScopes(child, childScope, visitor);
    }
    node.scope = childScope.id;
  } else if (Check.isAslChoiceState(node)) {
    for (const choice of (node.choices || [])) {
      assignScopes(choice.condition, scope, visitor);
      assignScopes(choice.block, scope, visitor);
    }
    if (node.default) assignScopes(node.default, scope, visitor);
  } else if (Check.isAslMapState(node)) {
    assignScopes(node.items, scope, visitor);
    assignScopes(node.iterator, scope, visitor);
  } else if (Check.isForEachStatement(node)) {
    assignScopes(node.items, scope, visitor);
    assignScopes(node.iterator, scope, visitor);
  } else if (Check.isAslParallelState(node)) {
    for (const child of node.branches) {
      assignScopes(child, scope, visitor);
    }
  } else if (Check.isIfExpression(node)) {
    assignScopes(node.condition, scope, visitor);
    assignScopes(node.then, scope, visitor);
    if (node.else) assignScopes(node.else, scope, visitor);
  } else if (Check.isSwitch(node)) {
    for (const child of (node.cases || [])) {
      if (child.when) {
        assignScopes(child.when, scope, visitor);
      }
      assignScopes(child.then, scope, visitor);
    }
  } else if (Check.isDoWhileStatement(node)) {
    assignScopes(node.condition, scope, visitor);
    assignScopes(node.while, scope, visitor);
  } else if (Check.isTryExpression(node)) {
    assignScopes(node.try, scope, visitor);
    for (const child of (node.catch || [])) {
      assignScopes(child.block, scope, visitor);
    }
    if (node.finally) assignScopes(node.finally, scope, visitor);
  } else if (Check.isWhileStatement(node)) {
    assignScopes(node.condition, scope, visitor);
    assignScopes(node.while, scope, visitor);
  } else if (Check.isAslPassState(node)) {
    assignScopes(node.parameters, scope, visitor);
  } else if (Check.isLiteralObject(node)) {
    for (const prop of Object.values(node.properties)) {
      assignScopes(prop, scope, visitor);
    }
  } else if (Check.isAslWaitState(node)) {
    assignScopes(node.seconds, scope, visitor);
    assignScopes(node.timestamp, scope, visitor);
  } else if (Check.isConditionalExpression(node)) {
    assignScopes(node.condition, scope, visitor);
    assignScopes(node.whenFalse, scope, visitor);
    assignScopes(node.whenTrue, scope, visitor);
  } else if (Check.isIdentifier(node)) {
    if (node.filterExpression) {
      assignScopes(node.filterExpression.argument, scope, visitor);
      assignScopes(node.filterExpression.expression, scope, visitor);
    }
    if (node.indexExpression) {
      assignScopes(node.indexExpression, scope, visitor);
    }
  } else if (Check.isLiteralArray(node)) {
    for(const element of node.elements) {
      assignScopes(element, scope, visitor);
    }
  }
};

export interface StateMachine extends Function {
  contextArgumentName?: Identifier;
  _syntaxKind: SyntaxKind.StateMachine;
}
export interface Function extends Block {
  inputArgumentName?: Identifier;
  _syntaxKind: SyntaxKind.Function | SyntaxKind.StateMachine;
}

//could be 'name' or 'name.path.parts'
export interface Identifier {
  compilerGenerated?: true;
  objectContextExpression?: true; //is this an expression against the statemachine global context?
  identifier: string;
  indexExpression?: Identifier | Expression;
  sliceExpression?: { start: number, end?: number, step?: number; };
  filterExpression?: {
    argument: Identifier,
    expression: BinaryExpression;
  },
  mapExpression?: string;
  jsonPathExpression?: string;
  lhs?: Identifier;
  type: Type;
  canBeNull?: true;
  _syntaxKind: SyntaxKind.Identifier;
}


export interface Expression {
  _syntaxKind: string;
  source?: string;
  comment?: string;
  stateName?: string;
  //type: Type;
}

export interface Statement {
  _syntaxKind: string;
  source?: string;
  comment?: string;
  stateName?: string;
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

export type BinaryOperator = "exists-in" | "and" | "or" | "not" | "is-truthy" | "matches" | "eq" | "gt" | "gte" | "lt" | "lte";

export interface BinaryExpression extends Expression {
  _syntaxKind: SyntaxKind.BinaryExpression;
  lhs?: Identifier | Expression; // unary expression lhs -> undefined
  operator: BinaryOperator;
  rhs: Identifier | Expression;
}

export interface ConditionalExpression extends Expression {
  _syntaxKind: SyntaxKind.ConditionalExpression;
  condition: BinaryExpression,
  whenTrue: Identifier | Expression;
  whenFalse: Identifier | Expression;
}

export type LiteralExpressionLike = LiteralExpression | LiteralObjectExpression | LiteralArrayExpression | StateMachine;

export interface LiteralExpression extends Expression {
  _syntaxKind: SyntaxKind.Literal;
  value: string | boolean | number | null;
  type: Type;
}

export type Type = "callable-lambda" | "callable-statemachine" | "callable" | "string" | "boolean" | "numeric" | "timestamp" | "object" | "array" | "unknown" | "null";

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

export interface IfStatement extends Statement {
  _syntaxKind: SyntaxKind.IfStatement;
  condition: BinaryExpression;
  then: Block;
  else?: Block;
}
export interface TypeOfExpression extends Expression {
  _syntaxKind: SyntaxKind.TypeOfExpression;
  operand: Identifier | Expression;
}

export interface TryStatement extends Statement {
  _syntaxKind: SyntaxKind.TryStatement;
  try: Block;
  catch?: CatchConfiguration;
  finally?: Block;
}

export interface BreakStatement extends Statement {
  _syntaxKind: SyntaxKind.Break;
}
export interface ContinueStatement extends Statement {
  _syntaxKind: SyntaxKind.Continue;
}
export interface ForEachStatement extends Statement {
  _syntaxKind: SyntaxKind.ForEachStatement;
  iterator: Function;
  items: Identifier;
}
export interface SwitchStatement extends Statement {
  _syntaxKind: SyntaxKind.Switch;
  cases?: Array<{ when?: BinaryExpression, then: Block; }>;
}
export interface DoWhileStatement extends Statement {
  _syntaxKind: SyntaxKind.DoWhileStatement;
  while: Block;
  condition: BinaryExpression;
}

export interface WhileStatement extends Statement {
  _syntaxKind: SyntaxKind.WhileStatement;
  condition: BinaryExpression;
  while: Block;
}

export interface VariableAssignmentStatement extends Statement {
  _syntaxKind: SyntaxKind.VariableAssignmentStatement;
  name: Identifier;
  expression: Expression;
}

export interface ReturnStatement extends Statement {
  _syntaxKind: SyntaxKind.ReturnStatement;
  expression: Expression;
}

export interface Block extends Expression, DeclaresScope {
  _syntaxKind: SyntaxKind.Block | SyntaxKind.Function | SyntaxKind.StateMachine;
  statements: Expression[];
}

///ASL States

export interface AslState extends Statement {
}

export declare type RetryConfiguration = Array<{
  errorEquals: string[];
  intervalSeconds?: number;
  maxAttempts?: number;
  backoffRate?: number;
}>;

export type CatchConfiguration = Array<{ errorEquals: string[], block: Function; }>;

export interface WaitState extends AslState {
  _syntaxKind: SyntaxKind.AslWaitState;
  seconds: LiteralExpressionLike | Identifier;
  timestamp: LiteralExpressionLike | Identifier;
}

export interface ParallelState extends AslState {
  _syntaxKind: SyntaxKind.AslParallelState;
  branches: (Function)[];
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

export interface InvokeStateMachineState extends AslState {
  _syntaxKind: SyntaxKind.AslInvokeStateMachine;
  retry?: RetryConfiguration;
  stateMachineName: string;
  integrationPattern: undefined | "sync" | "waitForTaskToken";
  stateMachineArn: string;
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
  _syntaxKind: SyntaxKind.AslChoiceState;
  choices?: Array<{ condition: BinaryExpression, block: Block; }>;
  default?: Block;
}


export interface MapState extends AslState {
  _syntaxKind: SyntaxKind.AslMapState;
  iterator: Function;
  items: Identifier;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  maxConcurrency?: number;
}

export interface FailState extends AslState {
  _syntaxKind: SyntaxKind.AslFailState;
  cause?: string;
  error?: string;
}

export interface SucceedState extends AslState {
  _syntaxKind: SyntaxKind.AslSucceedState;
}


