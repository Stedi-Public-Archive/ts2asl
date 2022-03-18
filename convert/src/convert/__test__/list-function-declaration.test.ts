import { Converter } from "..";
import { createCompilerHostFromSource } from "../..";

describe.skip("when converting ts source file", () => {

  const convert = (source: string) => {
    const host = createCompilerHostFromSource(source);
    const converter = new Converter(host);
    return converter.convert({});
  };

  it("wont throw if lambda decl has 0 arguments", () => {
    const source = `
    export const xxx = asl.deploy.asLambda(() => {}));
    `
    convert(source);
  })
  it("wont throw if lambda decl has 1 object", () => {
    const source = `
    export const xxx = asl.deploy.asLambda((input: {prop: string}) => {}));
    `
    convert(source);
  })
  it("wont throw if lambda decl has 1 unknown", () => {
    const source = `
    export const xxx = asl.deploy.asLambda((input: unknown) => {}));
    `
    convert(source);
  })

  it("wont throw if lambda decl has 1 any", () => {
    const source = `
    export const xxx = asl.deploy.asLambda((input: any) => {}));
    `
    convert(source);
  })

  it("wont throw if lambda decl has 1 error", () => {
    const source = `
    export const xxx = asl.deploy.asLambda((input: xxxxxx) => {}));
    `
    convert(source);
  })

  it("will throw if lambda decl has 1 primitive argument", () => {
    const source = `
    export const xxx = asl.deploy.asLambda((input: string) => {}));
    `
    expect(() => convert(source)).toThrowError();
  })
  it("will throw if lambda decl has 1 array argument", () => {
    const source = `
    export const xxx = asl.deploy.asLambda((input: Array<{}>}) => {}));
    `
    expect(() => convert(source)).toThrowError();

  })
  it("will throw if lambda decl has 1 function argument", () => {
    const source = `
    export const xxx = asl.deploy.asLambda((input: ()=> string)}) => {}));
    `
    expect(() => convert(source)).toThrowError();
  })
  it("will throw if lambda decl has 2 arguments", () => {
    const source = `
    export const xxx = asl.deploy.asLambda((input: any, input2: any) => {}));
    `
    expect(() => convert(source)).toThrowError();

  })
});