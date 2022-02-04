import util from 'util';

export namespace states {
  export function format(format: string, ...args: unknown[]): unknown {
    const formatNode = format.replace('{}', '%s')
    return util.format(formatNode, args);
  }

  export function stringToJson(arg: string | undefined): unknown {
    if (arg === undefined) return undefined;
    return JSON.parse(arg);
  }
  export function jsonToString(arg: unknown): string {
    switch (typeof arg) {
      case "number":
      case "boolean":
      case "string":
        arg.toString();
        break;
    }
    return JSON.stringify(arg);
  }
  export function array(...args: unknown[]): unknown[] {
    return args;
  }
}