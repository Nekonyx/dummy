import { decoratorStorage } from './storage'

export interface ISlashCommandsDecoratorData {
  target: Function
}

export const SlashCommand = (constructor: Function) => {
  decoratorStorage.slashCommands.push({
    target: constructor
  })
}
