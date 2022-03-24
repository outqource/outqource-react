import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
export declare type NoInfer<T> = [T][T extends any ? 0 : never];
export declare const createAsyncExtraReducers: <State = any>(builder: ActionReducerMapBuilder<NoInfer<State>>, options?: {
    pagination: boolean;
} | undefined) => (thunk: any, key: string) => void;
export declare const createAsyncExtraReducer: <State = any>(builder: ActionReducerMapBuilder<NoInfer<State>>, options?: {
    pagination: boolean;
} | undefined) => (thunk: any, key: string) => void;
