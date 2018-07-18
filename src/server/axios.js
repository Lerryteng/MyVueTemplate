/**
 * Created by tengteng on 18/7/17.
 */

// axios

import axios from 'axios';
import baseUrl from '../config';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 预处理请求信息（config）
  return config;
}, function (error) {
  // 预处理请求错误（error）
  return error;
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 预处理响应数据（response）
  return response;
}, function (error) {
  // 预处理响应错误（error）
  return error;
});

/**
 * 返回axios方法
 * @param url（如果传绝对地址则baseURL不会追加到url之前）
 * @param method
 * @param timeout
 * @param data
 * @param headers
 * @param dataType
 * @returns {AxiosPromise}
 */
export default function(url, {
  method = 'post',
  timeout = 10000,
  data = {},
  headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'},
  dataType = 'json'
}) {
  // 可根据不同method动态配置headers
  if (method === 'get') {
    headers = Object.assign({}, headers);
  } else {
    headers = Object.assign({}, headers);
  }
  const config = {
    method: method,
    timeout: timeout,
    url: url,
    baseURL: baseUrl.URL_EASYMOCK,
    data: data,
    headers: headers,
    dataType: dataType
  };
  return axios(config);
}