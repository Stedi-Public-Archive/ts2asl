https://asl.stedi.com/?share=eJx1kg9r2zAQxT_LggYdoiZK17UbdCx1ks5blmaJ124DZSjxpRHYcpHk_uN9-MmO25HSgcG-d373fjp77pX1fY_EaK9Vrh8Ic688OaT314Spcg4zclXup8pvwIJiVUGerMONsi5iYCwa3tGq8ro0UWKuK48J3YWRa8SbUq-ovTlcKKvVMiewqPFmlKv7xMxpVZrMIXGTqiCrV-g7p68MH-z247IoyHi4srIr-sD1mu_5QFmuua5jn83jr05OeMdUxZJs5w3nURRhQGsVzhLY_oj_pGxPi3OLlubMUliITTfKPEpjcq6pR0rnOzwvgnzkostfH8Xh2iVtmC6V9hhaW9qwoFxnql7kto5V5QjNy8HIXTuvqJznS-JmS8NvVF6FquRXW1TuA1udqUxWy65Qef4kP_H6jS1vuaFb_ix3r_NCZMPanqj5F4YmWxyiD7FYsC4EemAC7ABvcYh3OAI7xnsZ-qcSp7UeY4BPbIgRzrDfC43PUiLBF3zFWOLbo3WECUT4OLU4_uc7b71TiJ5E8_gd4kDWCbNm0DwMSiVmtWeGH7jAJX4G_ZdEWmspfgeT6GJfSCn_Ao-uGOs
import * as asl from "@cloudscript/asl-lib"

export const main = asl.deploy.asStateMachine(async (input: Input) =>{
    asl.typescriptIf({
        condition: () => typeof input.delayInSeconds !== "number",
        then: async () => {
            input.delayInSeconds = 5;
        },
        comment: "if (typeof input.delayInSeconds !== \"number\") {\n    input.delayInSeconds = 5;\n  }"
    })
    asl.typescriptIf({
        condition: () => input.delayInSeconds > 10 || input.delayInSeconds < 1,
        then: async () => {
            asl.fail({
                error: "ValidationError",
                cause: "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
                comment: "throw new ValidationError(\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\")"
            })
        },
        comment: "if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {\n    throw new ValidationError(\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\")\n  }"
    })
    await asl.wait({ seconds: input.delayInSeconds });
});

interface Input {
  delayInSeconds: number | undefined;
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}