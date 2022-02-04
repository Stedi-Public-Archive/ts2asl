
export enum SyntaxKind {
  Identifier = "identifier",
  Literal = "literal",
  LiteralArray = "literal-array",
  LiteralObject = "literal-object",
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
  static isFunction(expr: Identifier | Expression | undefined): expr is Function {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Function;
  }
  static isBinaryExpression(expr: Identifier | Expression | undefined): expr is BinaryExpression {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.BinaryExpression;
  }
  static isVariableAssignment(expr: Identifier | Expression | undefined): expr is VariableAssignmentStatement {
    return expr !== undefined && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.VariableAssignmentStatement;
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

//could be 'name' or 'name.path.parts'
export interface Identifier {
  identifier: string;
  indexExpression?: Identifier | Expression;
  lhs?: Identifier;
  type: Type;
  _syntaxKind: SyntaxKind.Identifier;
}

export interface Expression {
  _syntaxKind: string;
  comment?: string;
}

export type BinaryOperator = "and" | "or" | "not" | "is-present" | "matches" | "eq" | "gt" | "gte" | "lt" | "lte";

export interface BinaryExpression extends Expression {
  _syntaxKind: SyntaxKind.BinaryExpression;
  lhs?: Identifier | Expression; // unary expression lhs -> undefined
  operator: BinaryOperator;
  rhs: Identifier | Expression;
}

export type LiteralExpressionLike = LiteralExpression | LiteralObjectExpression | LiteralArrayExpression | Function;

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
  while: Block;
  condition: BinaryExpression;
}

export interface WhileStatement extends Expression {
  _syntaxKind: SyntaxKind.WhileStatement;
  condition: BinaryExpression;
  while: Block;
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
  _syntaxKind: SyntaxKind.Block;
  statements: Expression[]
}

export interface Function extends Expression {
  _syntaxKind: SyntaxKind.Function;
  block: Block;
  argName: string;
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
  branches: Block[];
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
  iterator: Block;
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
