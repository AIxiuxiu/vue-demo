/*
 * @Description: vue相关声明
 * @Author: ahl
 * @Date: 2021-09-29 10:43:20
 * @LastEditTime: 2021-09-29 17:37:55
 */

import { AxiosInstance } from 'axios';
import { Dayjs } from 'dayjs';
import { Emitter, EventType } from 'mitt';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $store: Store<any>;
    $http: AxiosInstance;
    $dayjs: Dayjs;
    $eventBus: Emitter<Record<EventType, unknown>>;
  }
}
