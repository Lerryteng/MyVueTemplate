/**
 * Created by tengteng on 18/7/17.
 */

// filter

import { formatDate } from '@/utils';

/**
 * 格式化时间
 * @param timeStamp
 * @param fmt
 * @return {*}
 */
export function formatTimeFilter(timeStamp, fmt) {
  return formatDate(timeStamp, fmt);
}

/**
 * 数字格式化为百分比
 * @param number
 * @param needFlag
 * @return {*}
 */
export function parsePercentageFilter (number, needFlag) {
  number = (number * 100).toFixed(2);
  return needFlag ? (number + '%') : number;
}