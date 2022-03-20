import { CommandOptionType } from '../enums/CommandOptionType'

export interface ICommandOption {
  type: CommandOptionType
  name: string
  description?: string
  required: boolean
  validate(input?: any): Promise<boolean>
}
