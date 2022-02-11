//source: https://asl.stedi.com/?share=eJytVAtT2zgQ_jOeApXrQQkJYaa0mBA4KHk0CfQ1ZkbYquOebQVJviO9vf_elezgJFM63NGMHa--_fbbh2R3RZbxXMN0liiC10IUkijNNCcZC2dJzmGimdS-hjOec2kcygDFnKQiJhlXisWcFCrJYzIxgco7FTJjmrA8Il2Ra36vyfD2Gw81lITfIjVdzDmMmFIwQLSWZDlhUrLFuo5vIKRLlnHNpYIq86WI-2Vez4G1nNtbtnGjwe95WOhE5ER8Jf_8S7Ag_P870TMiRcpLdMt1HM8q9MvBeQPMZcDeMtyzitNkEx6jiC_znac1kS3ss67XLrep23Cb7p7bctvuvttxD1y6uwM4tL-41ETPeKWoBbmYDAc4emmk1xJcKJFPxcR6nhOaLSZcJixNvvNoo9hV3rbjVc3Uha4muGXxnybp5iiUV8ZPhVF7TmhV1Cpmi9ooH8uT3OzLiGu1ZvfZHM612TQhoTsTScirhwI_j-CaodBtysGBczUoMtQNYSihMnt3BUvVcnVmheV0xvJlkhMRL80u06uomvMwwSwR2uXxDa0zOjbTXp5Fewihh5WsqIR4Y9GZGjE9g4dNWFIUnzN7CtNEaXO4ka_sK4i5VDVMM2wTTnr3c4lvEJ5jBWOuilRPeIovKM5jjhPCWp4ta4iAX6Y8Np15RvbL2-0jrxoBOTwkW8jZIi9ekCMPh_G6tROASKMn0t8cGr6p4jE6-jbUn0Isdf0oqo4h9lzkyV2B71PMf9Hx_wkpWT6SbNMmPW5H-HBUyaWZ-tWj8f-FG0tRzHk0Kre3nAR8TZnW-P1ah7-8DMrrhkITWrAPB-BDA_agDR3wb26cXaC4biLitMBpI6NjOc4xdIMATkoM1z04DdB3FsAfD9g5XBjsXQCXK7y-wQYBDA02gvfgNGBsEowNMIYJHDlTvK_gGj7AK4q7aZYfK-gT0M8IlWZjtzZpbTZqs1mZn6GxF9gfZqe7leijORqtWqJdm_u12anNg1qYmidtPLRLm0D3gLaQSNtAMZ52bD56sMbxf8IxSsdAu0b3BGgPmadwbdCzOhanTc-BXgB9B_QSff0SGFhgWFY1Qvx9HTMGOgGrZZxTdF6VTpt3hYIFfQD6Eegn098Pmr8QLA

// {
//   "Comment": "This is your state machine",
//   "StartAt": "Generate startup log message using States.Format and Context Object",
//   "States": {
//     "Generate startup log message using States.Format and Context Object": {
//       "Type": "Pass",
//       "Next": "Generate an array using States.Array",
//       "Parameters": {
//         "startupLogMessage.$": "States.Format('Starting execution of {} at {} with role of {}',$$.StateMachine.Name,$$.Execution.StartTime,$$.Execution.RoleArn)"
//       }
//     },
//     "Generate an array using States.Array": {
//       "Type": "Pass",
//       "Parameters": {
//         "myArray.$": "States.Array(1,2,3,4,5,6,7,8,9,10)"
//       },
//       "Next": "Convert the array to JSON string using States.JsonToString"
//     },
//     "Convert the array to JSON string using States.JsonToString": {
//       "Type": "Pass",
//       "Parameters": {
//         "mySerializedArray.$": "States.JsonToString($.myArray)"
//       },
//       "Next": "Convert JSON string bagk to array using Stats.StringToJson"
//     },
//     "Convert JSON string bagk to array using Stats.StringToJson": {
//       "Type": "Pass",
//       "Parameters": {
//         "myArray.$": "States.StringToJson($.mySerializedArray)"
//       },
//       "Next": "Create Pets"
//     },
//     "Create Pets": {
//       "Type": "Map",
//       "Iterator": {
//         "StartAt": "Choice",
//         "States": {
//           "Choice": {
//             "Type": "Choice",
//             "Choices": [
//               {
//                 "And": [
//                   {
//                     "Variable": "$",
//                     "IsNumeric": true
//                   },
//                   {
//                     "And": [
//                       {
//                         "Or": [
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 1
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 3
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 5
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 7
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 9
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericGreaterThan": 10
//                           }
//                         ]
//                       }
//                     ]
//                   }
//                 ],
//                 "Next": "Create Dog"
//               },
//               {
//                 "And": [
//                   {
//                     "Variable": "$",
//                     "IsNumeric": true
//                   },
//                   {
//                     "And": [
//                       {
//                         "Or": [
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 2
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 4
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 6
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 8
//                           },
//                           {
//                             "Variable": "$",
//                             "NumericEquals": 10
//                           }
//                         ]
//                       }
//                     ]
//                   }
//                 ],
//                 "Next": "Create Cat"
//               }
//             ]
//           },
//           "Create Dog": {
//             "Type": "Pass",
//             "Parameters": {
//               "species": "dog",
//               "age.$": "$",
//               "createdBy.$": "$$.State.Name"
//             },
//             "End": true
//           },
//           "Create Cat": {
//             "Type": "Pass",
//             "Parameters": {
//               "species": "cat",
//               "age.$": "$",
//               "createdBy.$": "$$.State.Name"
//             },
//             "End": true
//           }
//         }
//       },
//       "ItemsPath": "$.myArray",
//       "Next": "Create separate list of cats and dogs using JSONPath Expressions",
//       "ResultSelector": {
//         "pets.$": "$"
//       }
//     },
//     "Create separate list of cats and dogs using JSONPath Expressions": {
//       "Type": "Pass",
//       "Parameters": {
//         "cats": {
//           "young.$": "$.pets[?(@.species == 'cat' && @.age<5)]",
//           "old.$": "$.pets[?(@.species == 'cat' && @.age>=5)]"
//         },
//         "dogs": {
//           "young.$": "$.pets[?(@.species == 'dog' && @.age<5)]",
//           "old.$": "$.pets[?(@.species == 'dog' && @.age>=5)]"
//         }
//       },
//       "Next": "Add array of unique ages using JSONPath Expression"
//     },
//     "Add array of unique ages using JSONPath Expression": {
//       "Type": "Pass",
//       "Parameters": {
//         "uniqueAges.$": "$..age",
//         "pets.$": "$"
//       },
//       "Next": "Recreate Pet List Using JSONPath Expression"
//     },
//     "Recreate Pet List Using JSONPath Expression": {
//       "Type": "Pass",
//       "End": true,
//       "Parameters": {
//         "uniqueAges.$": "$..age",
//         "groupedPets.$": "$.pets",
//         "flattenedPets.$": "$.pets[*][*][*]"
//       }
//     }
//   }
// }