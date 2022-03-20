import { BaseCommand } from '../BaseCommand'

export const isCommand = (object: object): boolean => {
  if (!object) {
    return false
  }

  return (
    object === BaseCommand ||
    object instanceof BaseCommand ||
    object.constructor === BaseCommand ||
    object.constructor instanceof BaseCommand ||
    isCommand(Object.getPrototypeOf(object))
  )
}
