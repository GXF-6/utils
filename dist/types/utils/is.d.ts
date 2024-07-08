declare const _default: {
    /**
     * 判断是否为字符串
     * @param {any} str 判断参数
     * @return {boolean}
     * */
    isString: (str: any) => boolean;
    /**
     * 判断是否为对象
     * @param {any} obj 判断参数
     * @return {boolean}
     * */
    isObject: (obj: null | any) => boolean;
    /**
     * 判断是否为事件
     * @param {any} fn 判断参数
     * @return {boolean}
     * */
    isFunction: (fn: any) => boolean;
    /**
     * 判断是否为布尔值
     * @param {any} bool 判断参数
     * @return {boolean}
     * */
    isBoolean: (bool: any) => boolean;
    /**
     * 判断是否为数组
     * @param {any} array 判断参数
     * @return {boolean}
     * */
    isArray: (array: any) => boolean;
    /**
     * 判断是否为日期格式
     * @param {any} date 判断参数
     * @return {boolean}
     * */
    isDate: (date: any) => boolean;
};
export default _default;
