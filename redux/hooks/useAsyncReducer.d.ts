import { IUseAsyncSelector } from "./useAsyncSelector";
import { IUseAsyncDispatch } from "./useAsyncDispatch";
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
    getData: (data?: any) => void;
    refreshData: (data?: any) => void;
};
export default useAsyncReducer;
