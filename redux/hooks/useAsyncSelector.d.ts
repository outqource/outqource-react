export declare type AsyncSelectorPagination = {
    page: number;
    count: number;
    currentCount: number;
    limit: number;
    isPrev: boolean;
    isNext: boolean;
} | undefined;
export declare type IUseAsyncSelector = {
    stateKey: string;
    paginationKey?: string;
    limit?: number;
};
export declare type TUseAsyncSelector = {
    data: any;
    error: any;
    pagination: AsyncSelectorPagination;
};
declare const useAsyncSelector: ({ stateKey, paginationKey, limit }: IUseAsyncSelector) => TUseAsyncSelector;
export default useAsyncSelector;
