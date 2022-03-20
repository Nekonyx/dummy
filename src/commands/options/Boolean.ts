import { CommandOptionType } from '../enums/CommandOptionType'
import { ICommandOption } from '../interfaces/ICommandOption'

export interface IBooleanOption {
  name: string
  description?: string
  required: boolean
}

export const BooleanOption = (opts: IBooleanOption): ICommandOption => ({
  type: CommandOptionType.Boolean,
  name: opts.name,
  description: opts.description,
  required: opts.required,
  async validate(input?: any): Promise<boolean> {
    if (!input) {
      return false
    }

    return true
  }
})
