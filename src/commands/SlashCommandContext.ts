import { Message, MessageOptions } from 'discord.js'

import { ICommandContext } from './interfaces/ICommandContext'

export type SlashCommandContextOptions = {
  message: Message
  options: Record<string, any>
}

export class SlashCommandContext implements ICommandContext {
  public readonly message: Message
  public readonly options: Record<string, any>

  public constructor(opts: SlashCommandContextOptions) {
    this.message = opts.message
    this.options = opts.options
  }

  public async reply(opts: MessageOptions): Promise<Message> {
    return this.message.reply(opts)
  }
}
