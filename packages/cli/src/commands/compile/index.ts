import {Command} from '@oclif/core'
import {Converter, createCompilerHostFromFile} from '@ts2asl/convert'
import { StateMachine } from "asl-types";

export default class Compile extends Command {
  static description = 'Compile TypeScript to AWS ASL'

  static args = [
    {
      name: 'file',
      required: true,
      description: 'input file',
    },
  ]

  async run(): Promise<void> {
    const {args} = await this.parse(Compile)
    const compilerHost = createCompilerHostFromFile(args.file)
    const converter = new Converter(compilerHost)
    const converted = converter.convert({})
    const result: Record<string, StateMachine> = {}
    for (const sm of converted.stateMachines) {
      if (sm.asl) {
        result[sm.name] = sm.asl
      }
    }

    this.log(JSON.stringify(result, null, 2))
  }
}

