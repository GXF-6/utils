export type num_str = number | string

export interface IUtils {
  /**
   * 判断是否为字符串
   * @param {any} str 判断参数
   * @return {boolean}
   * */
  isString: (str: any) => boolean
  /**
   * 判断是否为对象
   * @param {any} obj 判断参数
   * @return {boolean}
   * */
  isObject: (obj: any) => boolean
  /**
   * 判断是否为事件
   * @param {any} fn 判断参数
   * @return {boolean}
   * */
  isFunction: (fn: any) => boolean
  /**
   * 判断是否为布尔值
   * @param {any} bool 判断参数
   * @return {boolean}
   * */
  isBoolean: (bool: any) => boolean
  /**
   * 判断是否为数组
   * @param {any} array 判断参数
   * @return {boolean}
   * */
  isArray: (array: any) => boolean
  /**
   * 判断是否为日期格式
   * @param {any} date 判断参数
   * @return {boolean}
   * */
  isDate: (date: any) => boolean
  /**
   * 获取一周
   * */
  getWeek: (startDate?: number) => Array<string>
  /**
   * 格式化日期
   * @param {string} format 格式化模板
   * @param {Date} date 日期(不传默认当前日期)
   * @return {string}
   * */
  DateFormat: (format: string, date?: Date) => string
  /**
   * 判断传入日期（不传默认当前日期）是一年中的第几天
   * @param date 日期
   * @return {number}
   * */
  dayOfYear: (date?: (Date | string)) => number
}
