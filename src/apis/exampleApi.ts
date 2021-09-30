/*
 * @Description: 示例接口
 * @Author: ahl
 * @Date: 2021-09-30 13:38:19
 * @LastEditTime: 2021-09-30 13:48:59
 */

import { get } from './index';

//封装User类型的接口方法
export class ExampleApi {
  /**
   * 获取新闻
   * @returns
   */
  static async getNews() {
    return get<any>('news/list');
  }
}
