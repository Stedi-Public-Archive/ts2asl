class ThrowableAslError extends Error {
  name: string;
  Cause: string;
  Error: string;
  constructor(error: string, cause: string) {
    super(cause);
    this.name = error;
    this.Cause = cause;
    this.Error = error;
  }
}

export namespace runtime {
  export const createError = (error: string, cause: string): ThrowableAslError & Error & { name: string; } => {
    return new ThrowableAslError(error, cause);
  };
}

export namespace deploy {
  export const asStateMachine = <T>(fn: T): T => { return fn; };
  export const asLambda = <T>(fn: T): T => { return fn; };
}
