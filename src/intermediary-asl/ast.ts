
export enum SyntaxKind {
  Identifier = "identifier",
  Literal = "literal",
  LiteralArray = "literal-array",
  LiteralObject = "literal-object",
  Function = "function",
  BinaryExpression = "binary-expression",
  AslIntrinsicFunction = "asl-intrinsic-function",
  Assignment = "assignment",
  Block = "block",
  IfStatement = "if",
  TryStatement = "try",
  CaseStatement = "case",
  WhileStatement = "while",
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
  static isIdentifier(expr: Identifier | Expression): expr is Identifier {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Identifier;
  }
  static isLiteralArray(expr: Identifier | Expression): expr is LiteralArrayExpression {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.LiteralArray;
  }
  static isLiteral(expr: Identifier | Expression): expr is LiteralExpression {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Literal;
  }
  static isLiteralObject(expr: Identifier | Expression): expr is LiteralObjectExpression {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.LiteralObject;
  }
  static isFunction(expr: Identifier | Expression): expr is Function {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Function;
  }
  static isBinaryExpression(expr: Identifier | Expression): expr is BinaryExpression {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.BinaryExpression;
  }
  static isVariableAssignment(expr: Identifier | Expression): expr is VariableAssignment {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.Assignment;
  }
  static isIfExpression(expr: Identifier | Expression): expr is IfExpression {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.IfStatement;
  }

  static isTryExpression(expr: Identifier | Expression): expr is TryExpression {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.TryStatement;
  }

  static isCaseStatement(expr: Identifier | Expression): expr is CaseExpression {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.CaseStatement;
  }
  static isWhileStatement(expr: Identifier | Expression): expr is WhileExpression {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.WhileStatement;
  }

  static isReturnStatement(expr: Identifier | Expression): expr is Return {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.ReturnStatement;
  }

  static isAslWaitState(expr: Identifier | Expression): expr is WaitState {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslWaitState;
  }

  static isAslParallelState(expr: Identifier | Expression): expr is ParallelState {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslParallelState;
  }

  static isAslPassState(expr: Identifier | Expression): expr is PassState {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslPassState;
  }

  static isAslTaskState(expr: Identifier | Expression): expr is TaskState {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslTaskState;
  }

  static isAslChoiceState(expr: Identifier | Expression): expr is ChoiceState {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslChoiceState;
  }

  static isAslMapState(expr: Identifier | Expression): expr is MapState {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslMapState;
  }

  static isAslFailState(expr: Identifier | Expression): expr is FailState {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslFailState;
  }

  static isAslSucceedState(expr: Identifier | Expression): expr is SucceedState {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslSucceedState;
  }

  static isAslIntrinsicFunction(expr: Identifier | Expression): expr is AslIntrinsicFunction {
    return expr && "_syntaxKind" in expr && expr._syntaxKind === SyntaxKind.AslIntrinsicFunction;
  }
}

//could be 'name' or 'name.path.parts'
export interface Identifier {
  identifier: string;
  indexExpression?: Identifier | Expression;
  lhs?: Identifier;
  _syntaxKind: SyntaxKind.Identifier;
}

export interface Expression {
  _syntaxKind: string;
  comment?: string;
}

export interface BinaryExpression extends Expression {
  _syntaxKind: SyntaxKind.BinaryExpression;
  lhs?: Identifier | Expression; // unary expression lhs -> undefined
  operator: "not" | "is-present" | "matches" | "eq" | "gt" | "gte" | "lt" | "lte";
  rhs: Identifier | Expression;
}

export type LiteralExpressionLike = LiteralExpression | LiteralObjectExpression | LiteralArrayExpression | Function;

export interface LiteralExpression extends Expression {
  _syntaxKind: SyntaxKind.Literal;
  value: string | boolean | number | null;
  type: "string" | "boolean" | "numeric" | "timestamp" | "null";
}

export interface AslIntrinsicFunction extends Expression {
  _syntaxKind: SyntaxKind.AslIntrinsicFunction;
  function: string;
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

export interface TryExpression extends Expression {
  _syntaxKind: SyntaxKind.TryStatement;
  try: Block;
  catch?: { errorFilter: string[], block: Block }[]
  finally?: Block;
}

export interface CaseExpression extends Expression {
  _syntaxKind: SyntaxKind.CaseStatement;
  variable: Identifier;
  cases?: Array<{ when: LiteralExpression[], then: Block }>;
  default?: Block;
}

export interface WhileExpression extends Expression {
  _syntaxKind: SyntaxKind.WhileStatement;
  condition: BinaryExpression;
  while: Block;
}

export interface VariableAssignment extends Expression {
  _syntaxKind: SyntaxKind.Assignment;
  name: Identifier;
  expression: Expression;
}

export interface Return extends Expression {
  _syntaxKind: SyntaxKind.ReturnStatement;
  expression: Expression;
}

export interface Block extends Expression {
  _syntaxKind: SyntaxKind.Block;
  expressions: Expression[]
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
