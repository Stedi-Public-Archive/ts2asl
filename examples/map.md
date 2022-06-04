
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGdldEVudHJpZXMoKTsKICBhd2FpdCBhc2wubWFwKHsKICAgIGl0ZW1zOiBlbnRyaWVzLAogICAgaXRlcmF0b3I6IChlbnRyeTogc3RyaW5nKSA9PgogICAgICB2b2lkIGFzbC5zZGtEeW5hbW9EQlB1dEl0ZW0oewogICAgICAgIGNhdGNoOiBbCiAgICAgICAgICB7CiAgICAgICAgICAgIGVycm9yRXF1YWxzOiBbIkR5bmFtb0RiLkNvbmRpdGlvbmFsQ2hlY2tGYWlsZWRFeGNlcHRpb24iXSwKICAgICAgICAgICAgYmxvY2s6ICgpID0+IHsKICAgICAgICAgICAgICAvL25vIG9wCiAgICAgICAgICAgIH0sCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgICAgcGFyYW1ldGVyczogewogICAgICAgICAgSXRlbTogewogICAgICAgICAgICBwazogeyBTOiAicGsiIH0sCiAgICAgICAgICAgIHNrOiB7IFM6IGBzayMke2VudHJ5fWAgfSwKICAgICAgICAgICAgc3RhdHVzOiB7IFM6ICJhdmFpbGFibGUiIH0sCiAgICAgICAgICB9LAogICAgICAgICAgQ29uZGl0aW9uRXhwcmVzc2lvbjogImF0dHJpYnV0ZV9ub3RfZXhpc3RzKDpzaykiLAogICAgICAgICAgVGFibGVOYW1lOiBhc2wuZGVwbG95LmdldFBhcmFtZXRlcigidGFibGVOYW1lIiksCiAgICAgICAgfSwKICAgICAgfSksCiAgfSk7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const entries = await getEntries();
  await asl.map({
    items: entries,
    iterator: (entry: string) =>
      void asl.sdkDynamoDBPutItem({
        catch: [
          {
            errorEquals: ["DynamoDb.ConditionalCheckFailedException"],
            block: () => {
              //no op
            },
          },
        ],
        parameters: {
          Item: {
            pk: { S: "pk" },
            sk: { S: `sk#${entry}` },
            status: { S: "available" },
          },
          ConditionExpression: "attribute_not_exists(:sk)",
          TableName: asl.deploy.getParameter("tableName"),
        },
      }),
  });
});

```


