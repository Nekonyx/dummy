import { BaseSlashCommand } from '../BaseSlashCommand'

export const isSlashCommand = (object: object): boolean => {
  if (!object) {
    return false
  }

  return (
    object === BaseSlashCommand ||
    object instanceof BaseSlashCommand ||
    object.constructor === BaseSlashCommand ||
    object.constructor instanceof BaseSlashCommand ||
    isSlashCommand(Object.getPrototypeOf(object))
  )
}
