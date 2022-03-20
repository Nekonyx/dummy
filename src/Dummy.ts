import { Client } from 'discord.js'

import { decoratorStorage } from './decorators/storage'

export interface IDummyOptions {
  client: Client
}

export class Dummy {
  /**
   * Instances
   */
  public static readonly instances: Dummy[] = []

  /**
   * Client
   */
  public readonly client: Client

  public constructor(opts: IDummyOptions) {
    this.client = opts.client
    Dummy.instances.push(this)

    this.autoLoad()
  }

  public load(constructor: any) {
    for (const data of decoratorStorage.slashCommands) {
      if (data.target !== constructor) {
        continue
      }

      console.log(`Command ${data.target.name} is a SlashCommand!`)
      break
    }

    for (const data of decoratorStorage.commands) {
      if (data.target !== constructor) {
        continue
      }

      console.log(`Command ${data.target.name} is a Command!`)
      break
    }
  }

  private autoLoad() {
    for (const { target, dummy } of decoratorStorage.autoLoad) {
      if (!dummy || dummy === this) {
        try {
          this.load(target)
        } catch (error) {
          console.error(`Can't load ${target.name}:`, error)
        }
      }
    }
  }
}
