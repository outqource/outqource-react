import { PayloadAction } from "@reduxjs/toolkit";
import { AsyncModelStatus } from "../lib";
export declare type IUseAsyncDispatch = {
    setData?: Function;
    setError?: Function;
    setStatus?: Function;
    setPage?: Function;
    setCount?: Function;
    clear?: Function;
    clearData?: Function;
    getData?: Function;
    refreshData?: Function;
};
export declare const createAsyncActions: (stateKey: string) => {
    [x: string]: (state: any, action: PayloadAction<any>) => void;
};
export declare const getAsyncActions: (actions: object, stateKey: string) => any;
declare const useAsyncDispatch: (props: IUseAsyncDispatch) => {
    setData: (data?: any) => void;
    setError: (data?: any) => void;
    setStatus: (data: AsyncModelStatus) => void;
    setPage: (data: number) => void;
    setCount: (data: number) => void;
    clear: () => void;
    clearData: () => void;
    getData: <T = any>(data?: T | undefined) => Promise<any>;
    refreshData: <T_1 = any>(data?: T_1 | undefined) => Promise<any>;
};
export default useAsyncDispatch;
