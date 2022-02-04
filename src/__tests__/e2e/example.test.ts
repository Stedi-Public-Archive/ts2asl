import { Converter } from "../../convert";
import { directDeploy } from "../../deploy";
import * as AWS from "aws-sdk";

describe("when deploying example (native)", () => {
  it("then can be converted typescript", async () => {
    const c = Converter.FromFile(
      "src/__tests__/e2e/resources/example.native.ts"
    );
    const transformed = c.convertToTransformedBody();
    expect(transformed).toMatchSnapshot();
  });

  it("then can produce iasl", async () => {
    const c = Converter.FromFile(
      "src/__tests__/e2e/resources/example.native.ts"
    );
    const definition = c.convertToIasl();
    console.log(JSON.stringify(definition, null, 2));
    expect(definition).toMatchSnapshot();
  });

  it("then can produce asl", async () => {
    const c = Converter.FromFile(
      "src/__tests__/e2e/resources/example.native.ts"
    );
    const definition = c.convert();
    //console.log(JSON.stringify(definition, null, 2));
    expect(definition).toMatchSnapshot();
  });
});
