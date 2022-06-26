import { AslChoiceState, AslFailState, AslIntrinsicFunction, AslMapState, AslSucceedState, BinaryExpression, Block, BreakStatement, ConditionalExpression, ContinueStatement, DoWhileStatement, ForEachStatement, Function, Identifier, IfStatement, InvokeStateMachineState, LiteralArrayExpression, LiteralExpression, LiteralObjectExpression, AslParallelState, AslPassState, ReturnStatement, StateMachine, SwitchStatement, SyntaxKind, TaskState, TryStatement, TypeOfExpression, VariableAssignmentStatement, AslWaitState, WhileStatement, LiteralExpressionLike, RightHandSideExpression } from "./ast";
  export class IdentifierFactory {
    static create(args: Omit<Identifier, "_syntaxKind">): Identifier {
      return {...args, _syntaxKind: SyntaxKind.Identifier};     
    }
  }
  export class LiteralFactory {
    static createFromRuntime(val: string | number | boolean | null | undefined): LiteralExpression {
    if (val=== null) return this.create({value: val, type: "null"});
     const nodeType = typeof val;
     switch(nodeType) {
      case "number": return this.create({value: val as number, type: "numeric"});
      case "string": return this.create({value: val as string, type: "string"});
      case "boolean": return this.create({value: val as boolean, type: "boolean"});
      case "undefined": return this.create({value: undefined, type: "null"});
      default: throw new Error(`unable to convert runtime object ${val} of type ${nodeType} to a literal`)
     }
    }
    static create(args: Omit<LiteralExpression, "_syntaxKind">): LiteralExpression {
      return {...args, _syntaxKind: SyntaxKind.Literal};     
    }
  }
  export class LiteralArrayFactory {
    static create(args: Omit<LiteralArrayExpression, "_syntaxKind">): LiteralArrayExpression {
      return {...args, _syntaxKind: SyntaxKind.LiteralArray};     
    }
  }
  export class LiteralObjectFactory {
    static create(args: Omit<LiteralObjectExpression, "_syntaxKind">): LiteralObjectExpression {
      return {...args, _syntaxKind: SyntaxKind.LiteralObject};     
    }
  }
  export class StateMachineFactory {
    static create(args: Omit<StateMachine, "_syntaxKind">): StateMachine{
        return {...args, _syntaxKind: SyntaxKind.StateMachine};   
    }
  }
  export class FunctionFactory {
    static create(args: Omit<Function, "_syntaxKind">): Function {
      return {...args, _syntaxKind: SyntaxKind.Function};     
    }
  }
  export class BinaryExpressionFactory {
    static createIsTruthy(rhs: RightHandSideExpression): BinaryExpression {
      return this.create({rhs, operator: "is-truthy"}); 
    }
    static create(args: Omit<BinaryExpression, "_syntaxKind">): BinaryExpression {
      return {...args, _syntaxKind: SyntaxKind.BinaryExpression};     
    }
  }
  export class ConditionalExpressionFactory {
    static create(args: Omit<ConditionalExpression, "_syntaxKind">): ConditionalExpression{
        return {...args, _syntaxKind: SyntaxKind.ConditionalExpression};
    }
  }
  export class AslIntrinsicFunctionFactory {
    static create(args: Omit<AslIntrinsicFunction, "_syntaxKind">): AslIntrinsicFunction{
        return {...args, _syntaxKind: SyntaxKind.AslIntrinsicFunction};   
    }
  }
  export class VariableAssignmentFactory {
    static create(args: Omit<VariableAssignmentStatement, "_syntaxKind">): VariableAssignmentStatement {
      return {...args, _syntaxKind: SyntaxKind.VariableAssignment};     
    }
  }
  export class BlockFactory {
    static create(args: Omit<Block, "_syntaxKind">): Block {
      return {...args, _syntaxKind: SyntaxKind.Block};     
    }
  }
  export class IfFactory {
    static create(args: Omit<IfStatement, "_syntaxKind">): IfStatement {
      return {...args, _syntaxKind: SyntaxKind.If};     
    }
  }
  export class TryFactory {
    static create(args: Omit<TryStatement, "_syntaxKind">): TryStatement {
      return {...args, _syntaxKind: SyntaxKind.Try};     
    }
  }
  export class BreakFactory {
    static create(args: Omit<BreakStatement, "_syntaxKind">): BreakStatement {
      return {...args, _syntaxKind: SyntaxKind.Break};     
    }
  }
  export class ContinueFactory {
    static create(args: Omit<ContinueStatement, "_syntaxKind">): ContinueStatement {
      return {...args, _syntaxKind: SyntaxKind.Continue};     
    }
  }
  export class SwitchFactory {
    static create(args: Omit<SwitchStatement, "_syntaxKind">): SwitchStatement {
      return {...args, _syntaxKind: SyntaxKind.Switch};     
    }
  }
  export class WhileFactory {
    static create(args: Omit<WhileStatement, "_syntaxKind">): WhileStatement {
      return {...args, _syntaxKind: SyntaxKind.While};     
    }
  }
  export class ForEachFactory {
    static create(args: Omit<ForEachStatement, "_syntaxKind">): ForEachStatement {
      return {...args, _syntaxKind: SyntaxKind.ForEach};     
    }
  }
  export class DoWhileStatementFactory {
    static create(args: Omit<DoWhileStatement, "_syntaxKind">): DoWhileStatement {
      return {...args, _syntaxKind: SyntaxKind.DoWhile};     
    }
  }
  export class ReturnStatementFactory {
    static createReturnVoid(): ReturnStatement {
      return this.createReturnLiteral(undefined);
    }
    static createReturnLiteral(val: string | number | boolean | null | undefined, stateName?: string): ReturnStatement {
      return this.create({ expression: LiteralFactory.createFromRuntime(val), stateName });
    }
    static create(args: Omit<ReturnStatement, "_syntaxKind">): ReturnStatement {
      return {...args, _syntaxKind: SyntaxKind.Return};     
    }
  }
  export class AslWaitStateFactory {
    static create(args: Omit<AslWaitState, "_syntaxKind">): AslWaitState {
      return {...args, _syntaxKind: SyntaxKind.AslWaitState};     
    }
  }
  export class AslParallelStateFactory {
    static create(args: Omit<AslParallelState, "_syntaxKind">): AslParallelState {
      return {...args, _syntaxKind: SyntaxKind.AslParallelState};     
    }
  }
  export class AslPassStateFactory {
    static create(args: Omit<AslPassState, "_syntaxKind">): AslPassState {
      return {...args, _syntaxKind: SyntaxKind.AslPassState};     
    }
  }
  export class AslTaskStateFactory {
    static create(args: Omit<TaskState, "_syntaxKind">): TaskState {
      return {...args, _syntaxKind: SyntaxKind.AslTaskState};     
    }
  }
  export class AslInvokeStateMachineFactory {
    static create(args: Omit<InvokeStateMachineState, "_syntaxKind">): InvokeStateMachineState {
      return {...args, _syntaxKind: SyntaxKind.AslInvokeStateMachine};     
    }
  }
  export class AslChoiceStateFactory {
    static create(args: Omit<AslChoiceState, "_syntaxKind">): AslChoiceState {
      return {...args, _syntaxKind: SyntaxKind.AslChoiceState};     
    }
  }
  export class AslMapStateFactory {
    static create(args: Omit<AslMapState, "_syntaxKind">): AslMapState {
        return {...args, _syntaxKind: SyntaxKind.AslMapState};  
    }
  }
  export class AslFailStateFactory {
    static create(args: Omit<AslFailState, "_syntaxKind">): AslFailState {
      return {...args, _syntaxKind: SyntaxKind.AslFailState};     
    }
  }
  export class AslSucceedStateFactory {
    static create(args: Omit<AslSucceedState, "_syntaxKind">): AslSucceedState {
      return {...args, _syntaxKind: SyntaxKind.AslSucceedState};     
    }
  }
  export class TypeOfFactory {
    static create(args: Omit<TypeOfExpression, "_syntaxKind">): TypeOfExpression {
      return {...args, _syntaxKind: SyntaxKind.TypeOfExpression};     
    }
  }