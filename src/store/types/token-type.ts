/*
 * @Description: store 相关 声明
 * @Author: ahl
 * @Date: 2021-09-29 16:53:51
 */

export interface TokenState {
  token?: string | null;
  failuretime: number | null;
}

export enum GetterTokenTypes {
  SET_MUTATION = 'SET_MUTATION'
}

export enum MutationTokenTypes {
  SET_MUTATION = 'SET_MUTATION'
}

export enum ActionTokenTypes {
  GET_ACTION = 'GET_ACTION'
}

export type StateTokenMapper = (keyof TokenState)[] & { [k: string]: keyof TokenState };

export type GetterTokenMapper = (keyof typeof GetterTokenTypes)[] & { [k: string]: keyof typeof GetterTokenTypes };

export type MutationTokenMapper = (keyof typeof MutationTokenTypes)[] & { [k: string]: keyof typeof MutationTokenTypes };

export type ActionTokenMapper = (keyof typeof ActionTokenTypes)[] & { [k: string]: keyof typeof ActionTokenTypes };
