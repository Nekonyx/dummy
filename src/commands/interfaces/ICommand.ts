import { ICommandContext } from './ICommandContext'
import { ICommandOption } from './ICommandOption'

export interface ICommand<TContext extends ICommandContext> {
  name: string
  description: string
  options?: ICommandOption[]
  execute(context: TContext): any
}
