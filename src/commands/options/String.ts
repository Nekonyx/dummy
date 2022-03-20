import { CommandOptionType } from '../enums/CommandOptionType'
import { ICommandOption } from '../interfaces/ICommandOption'

export interface IStringOption {
  name: string
  description?: string
  required: boolean
  minLength?: number
  maxLength?: number
}

export const StringOption = (opts: IStringOption): ICommandOption => ({
  type: CommandOptionType.String,
  name: opts.name,
  description: opts.description,
  required: opts.required,
  async validate(input?: any): Promise<boolean> {
    if (!input) {
      return false
    }

    if (opts.minLength && String(input).length < opts.minLength) {
      return false
    }

    if (opts.maxLength && String(input).length > opts.maxLength) {
      return false
    }

    return true
  }
})
