import { Client, Intents } from 'discord.js'

import { Dummy } from '../src'
import { autoLoad } from '../src/utils/auto-load'

const bootstrap = async () => {
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGES
    ]
  })

  const bot = new Dummy({
    client
  })

  console.log('Loading interactions, commands, and so on...')
  await autoLoad({
    path: __dirname,
    pattern: '**/*.ts'
  })
}

bootstrap()
  .then(() => {
    console.log('Ready!')
  })
  .catch((error) => {
    console.error(error)
  })
