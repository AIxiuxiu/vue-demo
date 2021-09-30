/*
 * @Description: store 相关 声明
 * @Author: ahl
 * @Date: 2021-09-29 16:53:51
 */

import { ExampleState } from './example-type';
import { TokenState } from './token-type';

export enum StoreModuleName {
  EXAMPLE = 'example',
  TOKEN = 'token'
}

export type IRState = ExampleState | TokenState;
