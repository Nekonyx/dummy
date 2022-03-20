import {
  BaseCommand,
  Command,
  CommandContext,
  NumberOption
} from '../../../src'

@Command
export class RandomCommand extends BaseCommand {
  public override name = 'random'
  public override description = 'Returns a random number'
  public override options = [
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

  public override async execute(context: CommandContext) {
    const min = Number(context.options.min)
    const max = Number(context.options.max)

    const result = Math.floor(Math.random() * (max - min + 1)) + min

    await context.reply({
      content: `🎉 ${result}`
    })
  }
}
