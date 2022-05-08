import type { CaseReducerActions } from '@reduxjs/toolkit';
import type { Slice, SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';
import { ReducerStateActions } from '../../types/util';
import { Reducer } from '../lib/createSlice';
declare type Action<T extends CaseReducerActions<any>> = {
    [H in keyof T]: (...args: any[]) => Promise<any>;
};
declare const getUseSlice: <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(slice: Slice<State, CaseReducers & Reducer<State>, Name>) => () => State & Action<CaseReducerActions<CaseReducers & Reducer<State>>> & ReducerStateActions<keyof State>;
export default getUseSlice;
