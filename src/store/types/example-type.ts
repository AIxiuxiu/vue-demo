/*
 * @Description: store 相关 声明
 * @Author: ahl
 * @Date: 2021-09-29 16:53:51
 */

export interface ExampleState {
  news: [];
}

export enum GetterExampleTypes {
  newsCount = 'newsCount'
}

export enum MutationExampleTypes {
  setNews = 'setNews',
  removeLast = 'removeLast'
}

export enum ActionExampleTypes {
  getNews = 'getNews'
}

export type StateExampleMapper = (keyof ExampleState)[] | { [k: string]: keyof ExampleState };

export type GetterExampleMapper = (keyof typeof GetterExampleTypes)[] | { [k: string]: keyof typeof GetterExampleTypes };

export type MutationExampleMapper = (keyof typeof MutationExampleTypes)[] | { [k: string]: keyof typeof MutationExampleTypes };

export type ActionExampleMapper = (keyof typeof ActionExampleTypes)[] | { [k: string]: keyof typeof ActionExampleTypes };
