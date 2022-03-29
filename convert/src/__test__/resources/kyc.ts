// https://asl.stedi.com/?share=eJyNVNtuGzcQ_ZlF0YKIYK6v0VNWsnyJbUWxbDdOIQPU7sgitCIVkitF6BTIP_Spv5cv6ZCrta52CwPe0cyZw7kcsqnHY1AOE3al9Iw96sKwZmGdHoNhv149Nn9jE6NTsJalWllpnWV6wARTxbhPELLTCi4zYpJuztIhpCPL3FA4yoYUMqCMDFJppVbMaSYmxDr1XgWzJYNQGbNOGMcoGZhW7_pamEyq56qKGnZ9PHHY9Ie8nOndDuym924-AewII_IccmzDd4eXa1VSV-NJDg4yvAVb5K4LOaROG6w4AiNktQijP_Z6tQ03imdQ6RqI92prTqzaa4sxVDSrvhdAkmXG97iBWbixYYSioqsmFaWGiYlF_BX3g8hlRsMpI79Ufvbzx9_VDDY3WKOZUWY5kcWnI9wQo63-WyrDJLTLLKSFCZPNQfha4Y3IelUz6YZkOZKHyEs4ocsxrhTqRVH29yyksiSTvFLkiOSr2AQ0bbNGda6v4NWld4o-UQwZTAnAZkNQGzJmQ2FZH8i_TLoTduSnQpeFOhFG1cXM1m1QYL1eD1y2PilcK1hBgGPKNJbG5YykFZ6CEzL3m16YQamvlhmIGoUNcon-bNIv0vSq9y_sluVQUo3KqY3mKT6AkYM5M9KO_AUayByobmfm2DJGm9a3QuR2cXVqyfU1XiqqciryLtBtz0hyIh3pweCWAHgjvifOwXhCHe0iboo8LXK_Ur-mSlM_f_xjSxwtqQ_-Kks11fkUMjKYpIv5TCsXqZPToLyoVj4fXoHUebJ4KbTxD0guFfw_V6kVelxEmuqCdmvgWwHWvxta0pjKj78dRoo-ld_QmsSpFjO5nwRxrjXYXmFbnJLR9gbCX5KdwV0s_8W8eBqz3c51va4_nuuNLoX7NmO3SFOgFzrb3cL2ga-e85Kzk-iMRL48Lvx84hjT38r_p6doL1j7eIDRIUZHeIwn-B4TjBrYxFNs4Rme4wVe9vAjfohivPLIa6S8GzzCNn7Cdxw7-Blvyej1ekiYrsfcecz9KuahwhDqdx_9QtFH_IqciuAY8ZhO4PvID5AfIj9Cfoz8BPl75InPIbOBvOlBp_iBt3rIzzCm6DnGCfILjBsexi89N_-4ejS_8tnXFLwJwTYF-SfkHU_22Ye5r82DutTC0hV7151nvUf-QJ9QOP8SyCn0SK6v3hXvvdVMzLebiePtZpqhmdPQTMvD4v1AfvAm-eEO8qNt8rNAfh7ILwJ57DceH_c83Fsn5P0XRI01NA

import * as asl from "@ts2asl/asl-lib"


export const main = asl.deploy.asStateMachine(async () => {
  const result = await Promise.all([
    performIdentifyCheck(),
    Promise.resolve({ agencyChecked: true }),
  ])

  await asl.sdkEventBridgePutEvents({
    parameters: {
      Entries: [
        {
          Detail: asl.states.jsonToString(result),
          DetailType: "Identity check completed",
          EventBusName: "eventbusname",
          Source: "com.aws.kyc"
        }
      ]
    }
  });

  const checksPassed = true;
  if (checksPassed) {
    //no-op update risk profile
    await asl.sdkEventBridgePutEvents({
      parameters: {
        Entries: [
          {
            Detail: asl.states.jsonToString(result),
            DetailType: "AccountApproved",
            EventBusName: "eventbusname",
            Source: "com.aws.kyc"
          }
        ]
      }
    });
  } else {
    await asl.sdkEventBridgePutEvents({
      parameters: {
        Entries: [
          {
            Detail: asl.states.jsonToString(result),
            DetailType: "AccountDeclined",
            EventBusName: "eventbusname",
            Source: "com.aws.kyc"
          }
        ]
      }
    });
  }
});



export const performIdentifyCheck = asl.deploy.asLambda(async () => {
  return { identityChecked: true, customerName: "name", customerAddress: "address" };
})
