import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    const result = await event.reply(data.USDTWD.Exrate.toString())
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
