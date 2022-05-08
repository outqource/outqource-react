import type { AsyncThunk, CaseReducerActions } from "@reduxjs/toolkit";
import type { Slice, SliceCaseReducers } from "@reduxjs/toolkit/dist/createSlice";
import { ReducerStateActions } from "../../types/util";
import { Reducer } from "../lib/createSlice";
declare type Action<T extends CaseReducerActions<any>> = {
    [H in keyof T]: (...args: any[]) => any;
};
declare type PromiseAction<T extends Record<string, AsyncThunk<any, any, any>>> = {
    [H in keyof T]: (...args: any[]) => Promise<any>;
};
declare type TUseSlice<State, T extends CaseReducerActions<any>, K extends Record<string, AsyncThunk<any, any, any>>> = State & ReducerStateActions<keyof State> & Action<T> & PromiseAction<K>;
declare const getUseSlice: <State, CaseReducers extends SliceCaseReducers<State> & Reducer<State>, Name extends string = string>(slice: Slice<State, CaseReducers, Name>, promises?: Record<string, AsyncThunk<any, any, any>>) => () => TUseSlice<State, CaseReducerActions<CaseReducers>, Record<string, AsyncThunk<any, any, any>>>;
export default getUseSlice;
