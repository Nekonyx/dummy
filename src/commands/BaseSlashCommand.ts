import { ICommand } from './interfaces/ICommand'
import { ICommandOption } from './interfaces/ICommandOption'
import { SlashCommandContext } from './SlashCommandContext'

export abstract class BaseSlashCommand
  implements ICommand<SlashCommandContext>
{
  public abstract name: string
  public abstract description: string
  public options: ICommandOption[] = []
  public abstract execute(context: SlashCommandContext): any
}
