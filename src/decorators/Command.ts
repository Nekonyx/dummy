import { isCommand } from '../commands/utils/is-command'
import { Dummy, DummyInstance } from '../Dummy'

export const Command = (constructor: Function) => {
  if (!Dummy[DummyInstance]) {
    return
  }

  if (!isCommand(constructor)) {
    throw new Error('Command must be a Command')
  }
}
