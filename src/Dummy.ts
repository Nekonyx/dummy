import { Client } from 'discord.js'

export const DummyInstance = Symbol()

export interface IDummyOptions {
  client: Client
}

export class Dummy {
  /**
   * Singleton
   */
  public static [DummyInstance]: Dummy | null

  /**
   * Client
   */
  public readonly client: Client

  public constructor(opts: IDummyOptions) {
    if (Dummy[DummyInstance]) {
      throw new Error('Dummy can only be instantiated once')
    }

    Dummy[DummyInstance] = this

    this.client = opts.client
  }
}
