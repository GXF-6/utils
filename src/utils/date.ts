import type {num_str} from '@/types'
import is from "@utils/is";

function transferDate(date: Date): string {
  // 年
  const year: number = date.getFullYear()
  // 月
  let month: num_str = date.getMonth() + 1
  // 日
  let day: num_str = date.getDate()

  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (day >= 0 && day <= 9) {
    day = '0' + day
  }
  return year + '-' + month + '-' + day
}

export default {
  /**
   * 获取一周
   * */
  getWeek: (startDate?: number): Array<string> => {
    const weekShift = startDate || 0

    // 获取当前日期
    const date = new Date()

    // 获取当前是本周第几天
    const today: number = date.getDay()

    const stepSunDay: number = today === 0 ? -7 : -today

    const time: number = date.getTime()

    const res: Array<string> = []

    for (let i = 0; i < 7; i++) {
      res.push(transferDate(new Date(time + (stepSunDay + i + 1 + weekShift * 7) * 24 * 3600 * 1000)))
    }

    return res
  },
  /**
   * 格式化日期
   * @param {string} format 格式化模板
   * @param {Date} date 日期(不传默认当前日期)
   * @return {string}
   * */
  DateFormat: (format: string, date?: Date): string => {
    // 定义当前日期
    date = date || new Date()

    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds() // 毫秒
    }

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ?
          // @ts-ignore
          (o[k]) :
          (('00' + o[k as keyof typeof o]).substring(('' + o[k as keyof typeof o]).length)))
      }
    }
    return format
  },
  /**
   * 判断传入日期（不传默认当前日期）是一年中的第几天
   * @param date 日期
   * @return {number}
   * */
  dayOfYear: (date?: Date | string): number => {
    let formatDate: Date | string
    if (!date) {
      formatDate = new Date()
    } else {
      formatDate = is.isString(date) ? new Date(date) : date
    }

    // 如果传入的是无效字符串就默认当天
    if (!(formatDate as Date).getFullYear) {
      formatDate = new Date()
    }

    const year = (formatDate as Date).getFullYear()
    const firstDayOfYear =  new Date(year, 0 , 0)
    const timeGap = (formatDate as Date).getTime() - firstDayOfYear.getTime()
    return Math.floor(timeGap / 1000 / 60 / 60 / 24)
  }
}
