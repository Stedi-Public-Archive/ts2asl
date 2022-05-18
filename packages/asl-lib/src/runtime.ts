import { AslError } from "./asl";

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
  export const createError = (error: string, cause: string): AslError & Error & { name: string } => {
    return new ThrowableAslError(error, cause);
  }
}

