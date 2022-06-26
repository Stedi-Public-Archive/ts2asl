
import * as iasl from "../convert-asllib-to-iasl/ast";
import * as asl from "asl-types"
import { AslWriter, StateWithBrand } from "./asl-writer";
import { appendBlock } from ".";
import { createChoiceOperator } from "./choice-utility";

export class AslWhileFactory {
  static appendIaslWhile(expression: iasl.WhileStatement, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    if (expression.while === undefined) throw new Error("While must have at least one statement");
      if (expression.while.statements.length == 0) throw new Error("While must have at least one statement");
      const whileConditionName = context.appendNextState({ Type: "Choice", Choices: [] }, "While Condition");
      const whileConditionOperator = createChoiceOperator(expression.condition, scopes, context);
      const whileBodyBranch = context.appendChoiceOperator(whileConditionOperator);
      appendBlock(expression.while, scopes, whileBodyBranch);
      whileBodyBranch.joinTrailingStates(whileConditionName);

      const defaultWriter = context.appendChoiceDefault();
      const whileExitStateName = defaultWriter.appendNextState({ Type: "Pass", ResultPath: null }, "While Exit");

      const brandedStatements = context.finalizeChoiceState();
      for (const brandedStatement of brandedStatements) {
        if (brandedStatement.brand === "break") {
          delete brandedStatement.brand;
          (brandedStatement as asl.Pass).Next = whileExitStateName;
        } else if (brandedStatement.brand === "continue") {
          delete brandedStatement.brand;
          (brandedStatement as asl.Pass).Next = whileConditionName;
        }
      }
  }

  static appendIaslDoWhile(expression: iasl.DoWhileStatement, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
  //todo: optimize to no-op
  if (expression.while === undefined) throw new Error("Do while must have at least one statement");
  if (expression.while.statements.length == 0) throw new Error("Do while must have at least one statement");
  const childContext = appendBlock(expression.while, scopes, context.createChildContext());

  if (childContext.startAt !== undefined) {
    const breakStates: StateWithBrand[] = [], continueStates: StateWithBrand[] = [];
    for (const [name, state] of Object.entries(childContext.states)) {
      if (state.brand === "break") {
        delete state.brand;
        breakStates.push(state);
      } else if (state.brand === "continue") {
        delete state.brand;
        continueStates.push(state);
      }
      context.states[name] = state;
    }
    context.joinTrailingStates(childContext.startAt);
    context.appendTails(childContext.trailingStates);
    const whileConditionOperator = createChoiceOperator(expression.condition, scopes, context);
    whileConditionOperator.Next = childContext.startAt;
    const whileCondition = { Type: "Choice", Choices: [whileConditionOperator] } as asl.Choice;
    const whileConditionName = context.appendNextState(whileCondition, "Do While Condition");
    context.finalizeChoiceState();

    for (const continueState of continueStates) {
      (continueState as asl.Pass).Next = whileConditionName;
    }

    context.joinTrailingStates(whileConditionName, whileCondition);
    context.appendTails(breakStates);
  }

  }
};