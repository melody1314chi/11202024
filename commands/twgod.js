import axios from 'axios'
import fs from 'node:fs'
import { distance } from '../utils/distance.js'
import template from '../templates/twgod.js'

export default async event => {
  try {
    const { data } = await axios.get('https://taiwangods.moi.gov.tw/Control/SearchDataViewer.ashx?t=landscape')
    const gods = data
      .map(god => {
        god.distance = distance(god.L_MapY, god.L_MapX, event.message.latitude, event.message.longitude, 'K')
        return god
      })
      .sort((a, b) => {
        return a.distance - b.distance
      })
      // 跑幾個出來的意思
      .slice(0, 3)
      .map(god => {
        const t = template()
        t.hero.url = god.L_sImg
        t.body.contents[0].text = god.LL_Title
        t.footer.contents[0].action.uri = 'https://taiwangods.moi.gov.tw/html/landscape/1_0011.aspx?i=' + god.L_ID
        return t
      })

    const result = await event.reply({
      type: 'flex',
      altText: '宗教百景',
      contents: {
        type: 'carousel',
        contents: gods
      }
    })
    console.log(result)

    if (process.env.DEBUG === 'true' && result.message) {
      fs.writeFileSync('./dump/twgod.json', JSON.stringify(gods, null, 2))
    }
  } catch (error) {
    console.log(error)
  }
}
