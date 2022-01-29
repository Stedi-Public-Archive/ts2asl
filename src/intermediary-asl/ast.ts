
export enum SyntaxKind {
  Identifier = "identifier",
  Literal = "literal",
  LiteralArray = "literal-array",
  LiteralObject = "literal-object",
  Function = "function",
  BinaryExpression = "binary-expression",
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
}

//could be 'name' or 'name.path.parts'
export interface Identifier {
  identifier: string;
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
  _syntaxKind: "asl-intrinsic-function";
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
  _syntaxKind: "if";
  condition: BinaryExpression;
  then: Block;
  else?: Block;
}

export interface TryExpression extends Expression {
  _syntaxKind: "try";
  try: Block;
  catch?: { errorFilter: string[], block: Block }[]
  finally?: Block;
}

export interface CaseExpression extends Expression {
  _syntaxKind: "case";
  variable: Identifier;
  cases?: Array<{ when: LiteralExpression[], then: Block }>;
  default?: Block;
}

export interface WhileExpression extends Expression {
  _syntaxKind: "while";
  condition: BinaryExpression;
  while: Block;
}

export interface VariableAssignment extends Expression {
  _syntaxKind: "assignment";
  name: Identifier;
  expression: Expression;
}

export interface Return extends Expression {
  _syntaxKind: "return";
  expression: Expression;
}

export interface Block extends Expression {
  _syntaxKind: "block";
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
  _syntaxKind: "asl-wait-state";
  seconds: LiteralExpressionLike | Identifier;
  timestamp: LiteralExpressionLike | Identifier;
}

export interface ParallelState extends AslState {
  _syntaxKind: "asl-parallel-state";
  branches: Block[];
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
}

export interface PassState extends AslState {
  _syntaxKind: "asl-pass-state";

  //if identifier, assign to ResultPath
  //if (all) literal, assign to Result
  //otherwise assign to Parameters
  parameters: LiteralExpressionLike | Identifier;
}

export interface TaskState extends AslState {
  _syntaxKind: "asl-task-state";
  resource: string;
  parameters: LiteralExpressionLike | Identifier;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
}

export interface ChoiceState extends AslState {
  _syntaxKind: "asl-choice-state";
  choices?: Array<{ when: BinaryExpression, then: Block }>;
  default?: Block;
}

export interface MapState extends AslState {
  _syntaxKind: "asl-map-state";
  iterator: Block;
  items: Identifier;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  maxConcurrency?: number;
}

export interface FailState extends AslState {
  _syntaxKind: "asl-fail-state";
  cause?: string;
  error?: string;
}

export interface SucceedState extends AslState {
  _syntaxKind: "asl-succeed-state";
}
