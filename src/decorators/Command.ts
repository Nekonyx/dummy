import { decoratorStorage } from './storage'

export interface ICommandDecoratorData {
  target: Function
}

export const Command = (constructor: Function) => {
  decoratorStorage.commands.push({
    target: constructor
  })
}
