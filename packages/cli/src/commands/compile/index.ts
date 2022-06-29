import {Command, Flags} from '@oclif/core'
import {Converter, createCompilerHostFromFile} from '@ts2asl/convert'

const exampleTypescript = `
import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (input: unknown) => {
  console.log(input);
  return "ok"
});
`

export default class Compile extends Command {
  static description = 'Compile TypeScript to AWS ASL'

  static flags = {
    name: Flags.string({char: 'n', description: 'which step function to export'}),
  }

  static args = [
    {
      name: 'file',
      required: true,
      description: 'input file',
    },
  ]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Compile)
    const compilerHost = createCompilerHostFromFile(args.file)
    const converter = new Converter(compilerHost)
    const converted = converter.convert({})
    if (converted.stateMachines.length === 0) {
      this.error(`no step function found, try the following source:\n\n${exampleTypescript}`)
    }

    if (converted.stateMachines.length === 1 && flags.name === undefined) {
      this.log(JSON.stringify(converted.stateMachines[0].asl, null, 2))
      return
    }

    if (converted.stateMachines.length > 1 && Boolean(flags.name)) {
      this.error(`multiple step functions found. specify which of the following step functions (${converted.stateMachines.map(x => x.name).join(', ')}) should be compiled using the -n flag`)
    }

    const sfn = converted.stateMachines.find(x => x.name === flags.name)
    if (!sfn) {
      this.error(`step function with name ${flags.name} not found! the following step functions were found: ${converted.stateMachines.map(x => x.name).join(', ')}`)
    }

    this.log(JSON.stringify(sfn.asl, null, 2))
  }
}

