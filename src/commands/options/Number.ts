import { CommandOptionType } from '../enums/CommandOptionType'
import { ICommandOption } from '../interfaces/ICommandOption'

export interface INumberOption {
  name: string
  description?: string
  required: boolean
  min?: number
  max?: number
}

export const NumberOption = (opts: INumberOption): ICommandOption => ({
  type: CommandOptionType.Number,
  name: opts.name,
  description: opts.description,
  required: opts.required,
  async validate(input?: any): Promise<boolean> {
    if (!input) {
      return false
    }

    if (opts.min && Number(input) < opts.min) {
      return false
    }

    if (opts.max && Number(input) > opts.max) {
      return false
    }

    return true
  }
})
