import { Dummy } from '../Dummy'

export interface ISlashCommandManagerOptions {
  dummy: Dummy
}

export class SlashCommandManager {
  private readonly dummy: Dummy

  public constructor(opts: ISlashCommandManagerOptions) {
    this.dummy = opts.dummy
  }
}
