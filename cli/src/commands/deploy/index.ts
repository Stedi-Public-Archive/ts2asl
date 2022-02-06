import { Command, Flags } from '@oclif/core'

export default class Hello extends Command {
  static description = 'Deploy program'
  static flags = {
    'hot-swap': Flags.string({ char: 'f', description: 'Whom is saying hello', required: false }),
  }

  static args = [{ name: 'file', description: 'path to typescript program', required: true }]

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Hello)

    console.log(args)
  }
}
