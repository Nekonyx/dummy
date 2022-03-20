import {
  AutoLoad,
  Command,
  CommandContext,
  ICommand,
  NumberOption
} from '../../src'

@AutoLoad()
@Command
export class NonSlashRandomCommand implements ICommand<CommandContext> {
  public name = 'random'
  public description = 'Returns a random number'
  public options = [
    NumberOption({
      name: 'min',
      description: 'The minimum number',
      required: true,
      min: 0,
      max: 100
    }),
    NumberOption({
      name: 'max',
      description: 'The maximum number',
      required: true,
      min: 0,
      max: 100
    })
  ]

  public async execute(context: CommandContext) {
    const min = Number(context.options.min)
    const max = Number(context.options.max)

    const result = Math.floor(Math.random() * (max - min + 1)) + min

    await context.reply({
      content: `🎉 ${result}`
    })
  }
}
