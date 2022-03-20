import { CommandContext } from './CommandContext'
import { ICommand } from './interfaces/ICommand'
import { ICommandOption } from './interfaces/ICommandOption'

export abstract class BaseCommand implements ICommand<CommandContext> {
  public abstract name: string
  public abstract description: string
  public options: ICommandOption[] = []
  public abstract execute(context: CommandContext): Promise<any>
}
