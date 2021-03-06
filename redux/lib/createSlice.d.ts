import type { CreateSliceOptions, Slice, SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';
import type { ReducerStateActions } from '../../types/util';
export declare type Reducer<T> = ReducerStateActions<keyof T>;
declare const createSlice: <State extends Record<string, unknown>, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>) => Slice<State, CaseReducers & Reducer<State>, Name>;
export default createSlice;
