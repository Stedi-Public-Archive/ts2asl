import * as asl from "asl-types";
import { isNonTerminalState, NonTerminalState } from ".";

type ChoiceOperator = asl.Choice["Choices"][0];
type Brand = "break" | "continue";
export type StateWithBrand = asl.State & { brand?: Brand };

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
    const brandedPassStates: StateWithBrand[] = [];
    const states: asl.Choice[] = this.trailingStates.filter(x => x.Type === "Choice") as asl.Choice[];
    if (states.length !== 1) throw new Error("Must have exactly 1 choice state as tail");
    const choiceState = states[0];
    this.trailingStates = this.trailingStates.filter(x => x.Type !== "Choice");
    for (const choiceOperator of this.choiceOperators) {

      if (choiceOperator.operator.Next === undefined) {
        const states = choiceOperator.branch.states;

        if (!(states && Object.keys(states).length > 0)) {
          choiceOperator.branch.appendNextState({ Type: "Pass", Result: null }, "Empty Branch");
        }

        for (const [name, state] of Object.entries(states)) {
          this.states[name] = state;

          if ((state as StateWithBrand).brand) {
            brandedPassStates.push(state);
          } else if (isNonTerminalState(state)) {
            if (!("Next" in state) && state.Type !== "Choice") {
              this.trailingStates.push(state);
            }
          }
        }
        choiceOperator.operator.Next = choiceOperator.branch.startAt;
      }
      choiceState.Choices.push(choiceOperator.operator);
      this.trailingStates.push(...choiceOperator.branch.trailingStates);
    }
    if (this.choiceDefault) {
      const states = this.choiceDefault.states;

      if (choiceState.Default === undefined) {
        if (!(states && Object.keys(states).length > 0)) {
          this.choiceDefault.appendNextState({ Type: "Pass", Result: null }, "Empty Branch");
        }
        for (const [name, state] of Object.entries(states)) {
          this.states[name] = state;
          if ((state as StateWithBrand).brand) {
            brandedPassStates.push(state);
          } else if (isNonTerminalState(state)) {
            if (!("Next" in state) && state.Type !== "Choice") {
              this.trailingStates.push(state);
            }
          }
        }
        choiceState.Default = this.choiceDefault.startAt;
      }
      this.trailingStates.push(...this.choiceDefault.trailingStates);
    } else {
      this.trailingStates.push(choiceState);
    }
    this.choiceDefault = undefined;
    this.choiceOperators = [];

    return brandedPassStates;
  }
  appendState(state: StateWithBrand, nameSuggestion?: string) {
    const name = this.createName(nameSuggestion ?? state.Type);
    this.states[name] = state;

    return name;
  }
  removeState(state: StateWithBrand) {
    const names = Object.entries(this.states).filter(x => x[1] === state)?.map(x => x[0] as string);
    if (!names || names.length === 0) throw new Error("State not found");
    const name = names[0];
    if (this.trailingStates.includes(state)) {
      this.trailingStates = this.trailingStates.filter(x => x !== state);
    }
    this.names = this.names.filter(x => x !== name);
    for (const state of Object.values(this.states)) {
      if ("Next" in state && state.Next === name) {
        state.Next = undefined;
        this.trailingStates.push(state);
      }
    }
    delete this.states[name];
  }

  replaceState(currentStateName: string, newStateNameSuggestion: string, newState: asl.State) {
    const newStateName = this.createName(newStateNameSuggestion);
    for (const state of Object.values(this.states)) {
      if (currentStateName === (state as asl.Pass).Next) {
        (state as asl.Pass).Next = newStateName;
      }
    }
    const currentState = this.states[currentStateName];
    delete this.states[currentStateName];
    this.states[newStateName] = newState;
    if (this.trailingStates.includes(currentState)) {
      this.trailingStates = this.trailingStates.filter(x => x !== currentState);
      this.trailingStates.push(newState);
    }
  }

  appendTails(state: (StateWithBrand | StateWithBrand[])) {
    const states = Array.isArray(state) ? state : [state]
    this.trailingStates.push(...states.filter(x => isNonTerminalState(x)));
  }

  appendNextState(state: StateWithBrand, nameSuggestion?: string) {
    const name = this.createName(nameSuggestion ?? state.Type);
    if (state.Comment) {
      const withoutWhiteSpace = state.Comment.replace(/\s{1,}/g, " ");
      state.Comment = "source: " + ((withoutWhiteSpace.length > 50) ? withoutWhiteSpace.substring(0, 46) + " ..." : withoutWhiteSpace);
    }

    if (this.startAt === undefined) {
      this.startAt = name;
    } else if (this.trailingStates.length === 0) {
      //unreachable code
      return name;
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

  joinUnbrandedStates(nextStateName: string) {
    const remainingTails: NonTerminalState[] = [];
    for (const trailingState of (this.trailingStates as StateWithBrand[])) {
      if (trailingState.brand === undefined) {
        (trailingState as asl.Pass).Next = nextStateName;
      } else {
        remainingTails.push(trailingState);
      }
    }
    this.trailingStates = remainingTails;
  }

  joinBrandedStates(brand: Brand, nextStateName: string) {
    const remainingTails: NonTerminalState[] = [];
    for (const trailingState of (this.trailingStates as StateWithBrand[])) {
      if (trailingState.brand === brand) {
        (trailingState as asl.Pass).Next = nextStateName;
      } else {
        remainingTails.push(trailingState);
      }
    }
    this.trailingStates = remainingTails;
  }

  joinTrailingStates(nextStateName: string, ...except: asl.State[]) {
    if (this.startAt === undefined) this.startAt = nextStateName;
    for (const trailingState of this.trailingStates) {
      if (except.includes(trailingState)) continue;
      if (trailingState.Type === "Choice") {
        const choice = trailingState as asl.Choice;
        if (choice.Default === undefined) {
          choice.Default = nextStateName;
        }
      } else {
        trailingState.Next = nextStateName;
      }
    }
    this.trailingStates = except
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