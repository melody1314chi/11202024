// 測試 js 成功後再 變成指令
import axios from 'axios'
import * as cheerio from 'cheerio';

(async () => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    // console.log($('#fe .card-title').text())
    const courses = []
    $('#fe .card-title').each(function () {
      courses.push($(this).text().trim())
    })
    console.log(courses)
  } catch (error) {
    console.error(error)
  }
})()
