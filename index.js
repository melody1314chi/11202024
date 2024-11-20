import 'dotenv/config'
import linebot from 'linebot'
import commandUSD from './commands/usd.js'
import commandFE from './commands/fe.js'
import commandQR from './commands/qr.js'
import commandTWGod from './commands/twgod.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    if (event.message.text === 'usd') {
      commandUSD(event)
    } else if (event.message.text === 'fe') {
      commandFE(event)
    } else if (event.message.text === 'qr') {
      commandQR(event)
    }
  } else if (event.message.type === 'location') {
    commandTWGod(event)
  }
})

bot.on('postback', event => {
  event.reply('postback: ' + event.postback.data)
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
