import { Message, MessageOptions } from 'discord.js'

import { ICommandContext } from './interfaces/ICommandContext'

export type CommandContextOptions = {
  message: Message
  options: Record<string, any>
}

export class CommandContext implements ICommandContext {
  public readonly message: Message
  public readonly options: Record<string, any>

  public constructor(opts: CommandContextOptions) {
    this.message = opts.message
    this.options = opts.options
  }

  public async reply(opts: MessageOptions): Promise<Message> {
    return this.message.reply(opts)
  }
}
