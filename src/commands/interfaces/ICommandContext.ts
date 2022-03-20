import { Message, MessageOptions } from 'discord.js'

export interface ICommandContext {
  message: Message
  options: Record<string, any>
  reply(opts: MessageOptions): Promise<Message>
}
