import { IUseAsyncSelector } from './useAsyncSelector';
import { IUseAsyncDispatch } from './useAsyncDispatch';
export declare type IUseAsyncReducer = IUseAsyncSelector & IUseAsyncDispatch;
declare const useAsyncReducer: ({ stateKey, paginationKey, limit, ...props }: IUseAsyncReducer) => () => {
    data: any;
    error: any;
    pagination: import("./useAsyncSelector").AsyncSelectorPagination;
    setData: (data?: any) => void;
    setError: (data?: any) => void;
    setStatus: (data: import("..").AsyncModelStatus) => void;
    setPage: (data: number) => void;
    setCount: (data: number) => void;
    clear: () => void;
    clearData: () => void;
    getData: <T = any>(data?: T | undefined) => Promise<any>;
    refreshData: <T_1 = any>(data?: T_1 | undefined) => Promise<any>;
};
export default useAsyncReducer;
