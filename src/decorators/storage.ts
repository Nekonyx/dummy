import { IAutoLoadDecoratorData } from './AutoLoad'
import { ICommandDecoratorData } from './Command'
import { ISlashCommandsDecoratorData } from './SlashCommand'

export const decoratorStorage = {
  autoLoad: Array<IAutoLoadDecoratorData>(),
  commands: Array<ICommandDecoratorData>(),
  slashCommands: Array<ISlashCommandsDecoratorData>()
}
