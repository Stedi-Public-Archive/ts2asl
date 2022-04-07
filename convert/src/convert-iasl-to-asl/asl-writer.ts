import * as asl from "asl-types";
import { isNonTerminalState, NonTerminalState } from ".";

type ChoiceOperator = asl.Choice["Choices"][0];

export type StateWithBrand = asl.State & { brand?: "break" };

export class AslWriter {
  names: string[] = [];
  root: AslWriter;
  startAt: string | undefined;
  trailingStates: NonTerminalState[] = [];
  states: Record<string, StateWithBrand> = {};
  choiceOperators: { operator: ChoiceOperator, branch: AslWriter }[] = [];
  choiceDefault: AslWriter | undefined;
  exitScope: boolean = true;
  constructor() {
    this.root = this;
  }

  createName(nameSuggestion: string): string {
    let postFix = "";
    let n = 1;

    while (this.root.names.includes(nameSuggestion + postFix)) {
      postFix = `_${n}`;
      n++;
    }

    this.root.names.push(nameSuggestion + postFix);
    return nameSuggestion + postFix;
  }
  appendChoiceOperator(operator: ChoiceOperator): AslWriter {
    if (this.trailingStates.length !== 1) throw new Error("Cannot append operator while having multiple trailing states");
    if (this.trailingStates[0].Type !== "Choice") throw new Error(`Cannot append operator to state of type ${this.trailingStates[0].Type}`);
    const branch = this.createChildContext();
    branch.exitScope = false;
    this.choiceOperators.push({ operator, branch });
    return branch;
  }
  appendChoiceDefault(): AslWriter {
    if (this.choiceDefault) throw new Error("already has a choice default")
    const choiceDefault = this.createChildContext();
    choiceDefault.exitScope = false;
    return this.choiceDefault = choiceDefault;
  }
  finalizeChoiceState(): StateWithBrand[] {
    const breakStates: StateWithBrand[] = [];
    const states: asl.Choice[] = this.trailingStates.filter(x => x.Type === "Choice") as asl.Choice[];
    if (states.length !== 1) throw new Error("Must have exactly 1 choice state as tail");
    const choiceState = states[0];
    this.trailingStates = this.trailingStates.filter(x => x.Type !== "Choice");
    for (const choiceOperator of this.choiceOperators) {
      const result = choiceOperator.branch.finalize();
      const states = result?.States;

      if (result === undefined || !(states && Object.keys(states).length > 0)) {
        throw new Error("something to do here");
      }

      for (const [name, state] of Object.entries(states)) {
        this.states[name] = state;

        if (isNonTerminalState(state)) {
          if (!("Next" in state) && state.Type !== "Choice") {
            this.trailingStates.push(state);
          }
        }
        if ((state as StateWithBrand).brand === "break") {
          breakStates.push(state);
        }
      }
      choiceOperator.operator.Next = result.StartAt;
      choiceState.Choices.push(choiceOperator.operator);
    }
    if (this.choiceDefault) {
      const result = this.choiceDefault.finalize();
      const states = result?.States;

      if (!(states && Object.keys(states).length > 0)) {
        throw new Error("something to do here");
      }

      for (const [name, state] of Object.entries(states)) {
        this.states[name] = state;
        if (isNonTerminalState(state)) {
          if (!("Next" in state) && state.Type !== "Choice") {
            this.trailingStates.push(state);
          }
        }
        if ((state as StateWithBrand).brand === "break") {
          breakStates.push(state);
        }
      }
      choiceState.Default = result.StartAt;
    } else {
      this.trailingStates.push(choiceState);
    }
    this.choiceDefault = undefined;
    this.choiceOperators = [];

    return breakStates;
  }
  appendState(state: StateWithBrand, nameSuggestion?: string) {
    const name = this.createName(nameSuggestion ?? state.Type);
    this.states[name] = state;

    return name;
  }
  appendTails(state: (StateWithBrand | StateWithBrand[])) {
    const states = Array.isArray(state) ? state : [state]
    this.trailingStates.push(...states.filter(x => isNonTerminalState(x)));
  }
  nextStateCallBackOnce?: (stateName: string) => void;
  registerCallNextStateCallBackOnce(callback: (stateName: string) => void) {
    if (this.nextStateCallBackOnce !== undefined) throw new Error("only 1 callback allowed");
    this.nextStateCallBackOnce = callback;
  }
  appendNextState(state: StateWithBrand, nameSuggestion?: string) {
    const name = this.createName(nameSuggestion ?? state.Type);
    if (state.Comment) {
      const withoutWhiteSpace = state.Comment.replace(/\s{1,}/g, " ");
      state.Comment = "source: " + ((withoutWhiteSpace.length > 50) ? withoutWhiteSpace.substring(0, 46) + " ..." : withoutWhiteSpace);
    }
    if (this.nextStateCallBackOnce !== undefined) {
      this.nextStateCallBackOnce(name);
      this.nextStateCallBackOnce = undefined;
    }
    if (this.startAt === undefined) {
      this.startAt = name;
    }
    this.states[name] = state;
    for (const trailingState of this.trailingStates) {
      if (trailingState.Type === "Choice") {
        const choice = trailingState as asl.Choice;
        if (choice.Default === undefined) {
          choice.Default = name;
        }
      } else {
        trailingState.Next = name;
      }
    }
    this.trailingStates = [state].filter(x => isNonTerminalState(x));
    return name;
  }

  joinTrailingStates(nextStateName: string) {
    for (const trailingState of this.trailingStates) {
      if (trailingState.Type === "Choice") {
        const choice = trailingState as asl.Choice;
        if (choice.Default === undefined) {
          choice.Default = nextStateName;
        }
      } else {
        trailingState.Next = nextStateName;
      }
    }
    this.trailingStates = []
  }
  finalize(): asl.StateMachine | undefined {
    if (Object.entries(this.states).length === 0) {
      this.appendNextState({ Type: "Succeed" }, "Empty")
    }
    if (this.exitScope) {
      for (const state of Object.values(this.states)) {
        delete state.brand;
      }
    }
    for (const trailingState of this.trailingStates) {
      if (trailingState.Type === "Choice") {
        const trailingChoice = trailingState as asl.Choice;
        const name = this.createName("Empty Default Choice");
        const state = { Type: "Pass", ResultPath: null, End: true };
        this.states[name] = state;
        trailingChoice.Default = name;
      } else {
        if (this.exitScope) {
          trailingState.End = true;
        }
      }
    }
    if (this.startAt === undefined) return undefined;
    return {
      StartAt: this.startAt,
      States: this.states
    }
  }

  createChildContext(): AslWriter {
    const context = new AslWriter();
    context.root = this.root;
    return context;
  }
}