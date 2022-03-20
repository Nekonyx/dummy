import { ApplicationCommandOptionTypes } from 'discord.js/typings/enums'

export enum CommandOptionType {
  Unknown = 0,
  String = ApplicationCommandOptionTypes.STRING,
  Number = ApplicationCommandOptionTypes.NUMBER,
  Boolean = ApplicationCommandOptionTypes.BOOLEAN,
  User = ApplicationCommandOptionTypes.USER,
  Channel = ApplicationCommandOptionTypes.CHANNEL,
  Role = ApplicationCommandOptionTypes.ROLE
}
