/**
 * Created by tengteng on 18/7/16.
 */

// 工具函数

/**
 * 路由跳转
 * @param urlName：与router里name一致
 * @param param
 * @param reload：是否保存访问历史
 */
export function navigateTo (urlName = '', param = {}, reload = true) {
  if (reload) {
    window.vm.$router.push({name: urlName, query: param})
  } else {
    window.vm.$router.replace({name: urlName, query: param})
  }
};

/**
 * Date 转化为指定格式的String<br>
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符<br>
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * @param {string} date
 * @param {string} fmt
 * @returns {string}
 * @example
 *
 * formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss.S'); // => 2006-07-02 08:09:04.423
 *
 * formatDate(Date.now(), 'yyyy-MM-dd E HH:mm:ss'); // => 2009-03-10 二 20:09:04
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EE hh:mm:ss');  // => 2009-03-10 周二 08:09:04
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EEE hh:mm:ss'); // => 2009-03-10 星期二 08:09:04
 *
 * formatDate(Date.now(), 'yyyy-M-d h:m:s.S') // => 2006-7-2 8:9:4.18
 */
export function formatDate (date = new Date(), fmt = 'yyyy-MM-dd HH:mm:ss') {
  date = (typeof date === 'number' || typeof date === 'string') ? new Date(date) : date

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  var week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d'
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + ''])
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }

  return fmt
};

/**
 * 防抖函数
 * @param func
 * @param delay
 */
export function debounce(func, delay) {
  // 维护一个timer
  let timer = null;
  return function() {
    // 获取函数的作用域和变量
    let context = this;
    let args = arguments;
    // 清除timer
    clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  }
}

/**
 * 节流函数
 * @param func
 * @param delay
 */
export function throttle(func, delay) {
  // 维护一个timer
  let timer = null;
  return function() {
    // 获取函数的作用域和变量
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        func.apply(context, args);
        // 重置timer
        timer = null;
      }, delay);
    }
  }
}
