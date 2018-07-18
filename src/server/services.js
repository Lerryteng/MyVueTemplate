/**
 * Created by tengteng on 18/7/17.
 */

import axios from './axios';

/**
 * 统一处理所有接口请求
 * 参数对象将会替换axios中默认参数中的键值对，其中可包含：
 * method
 * timeout
 * data
 * headers
 * dataType
 */
const requests = {
  getUserInfo(data = {}) {
    return axios('user_info', {
      method: 'get',
      data: data
    });
  },
  getListData(data = {}) {
    return axios('list_query', {
      method: 'post',
      data: data
    });
  }
};

export default requests;