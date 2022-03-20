import { Dummy } from '../Dummy'

export interface ICommandManagerOptions {
  dummy: Dummy
}

export class CommandManager {
  private readonly dummy: Dummy

  public constructor(opts: ICommandManagerOptions) {
    this.dummy = opts.dummy
  }
}
