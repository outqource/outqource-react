export declare type IUseAsyncSelector = {
    stateKey: string;
    stateItemKeys: string | string[];
};
export declare type TUseAsyncSelector = {
    [key: string]: any;
};
declare const useAsyncSelector: ({ stateKey, stateItemKeys }: IUseAsyncSelector) => TUseAsyncSelector;
export default useAsyncSelector;
