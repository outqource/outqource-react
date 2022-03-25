import { PayloadAction } from "@reduxjs/toolkit";
export declare type IUseAsyncDispatch = {
    [key: string]: Function;
};
export declare const createAsyncAction: (dataKey: string) => {
    [x: string]: (state: any, action: PayloadAction<any>) => void;
};
export declare const createAsyncActions: (dataKeys: string | string[]) => {
    [x: string]: (state: any, action: PayloadAction<any>) => void;
};
export declare const getAsyncActions: (actions: object, dataKeys: string | string[]) => any;
declare const useAsyncDispatch: (props: IUseAsyncDispatch) => any;
export default useAsyncDispatch;
