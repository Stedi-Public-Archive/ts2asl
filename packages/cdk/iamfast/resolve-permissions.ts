import { Construct } from "constructs/lib/construct";
import * as cdk from "aws-cdk-lib";
const { ResolvePermissions } = require("./asl.js");

interface PolicyDocument {
  Version: "2012-10-17" | string;
  Statement: Array<{
    Effect: "Allow" | "Deny"
    Action: string | string[];
    Resource: string | string[];
  } & Record<string, unknown>>
}

export const resolvePermissionsIamFast = (parent: Construct, aslDefinitionAsString: string, postProcess : (input: string) => string): PolicyDocument => {
  const policyDoc = ResolvePermissions(cdk.Stack.of(parent).account, cdk.Stack.of(parent).region, aslDefinitionAsString) as string;
  const postProcessedDoc = postProcess(policyDoc);
  return JSON.parse(postProcessedDoc);  
}
  