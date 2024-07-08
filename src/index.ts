// 类型判断
import is from '@utils/is'
// 日期相关
import date from "@utils/date";
import type {IUtils} from "@/types";

const _: IUtils = {
  ...date,
  ...is,
}

export default _
