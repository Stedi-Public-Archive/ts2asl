#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkV2TestStack } from '../lib/cdk-v2-test-stack';
import { LocalTestStack } from '../lib/local-test-stack';

const app = new cdk.App();
new CdkV2TestStack(app, "parallel");
new CdkV2TestStack(app, "nested-stepfunctions");
new CdkV2TestStack(app, "closures");
new CdkV2TestStack(app, "hello-world");
new LocalTestStack(app, "program");