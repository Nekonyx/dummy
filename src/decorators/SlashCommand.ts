import { isSlashCommand } from '../commands/utils/is-slash-command'
import { Dummy, DummyInstance } from '../Dummy'

export const Command = (constructor: Function) => {
  if (!Dummy[DummyInstance]) {
    return
  }

  if (!isSlashCommand(constructor)) {
    throw new Error('Command must be a SlashCommand')
  }
}
