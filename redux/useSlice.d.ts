import type { AsyncThunk, CaseReducerActions } from '@reduxjs/toolkit';
import type { Slice, SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';
import { Reducer } from './createCustomSlice';
import { ReducerStateActions } from './types';
declare type Action<T extends CaseReducerActions<any>> = {
    [H in keyof T]: (...args: any[]) => any;
};
declare type PromiseAction<T extends Record<string, AsyncThunk<any, any, any>>> = {
    [H in keyof T]: (...args: any[]) => Promise<any>;
};
declare type TUseSlice<State, T extends CaseReducerActions<any>, K extends Record<string, AsyncThunk<any, any, any>>> = State & ReducerStateActions<keyof State> & Action<T> & PromiseAction<K>;
export declare const createUseSlice: <State, CaseReducers extends SliceCaseReducers<State> & Reducer<State>, Name extends string = string, Promises extends Record<string, AsyncThunk<any, any, any>> = {}>(slice: Slice<State, CaseReducers, Name>, promises?: Promises) => () => TUseSlice<State, CaseReducerActions<CaseReducers>, Promises>;
export {};
