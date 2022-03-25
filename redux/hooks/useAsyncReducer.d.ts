import { IUseAsyncSelector } from './useAsyncSelector';
import { IUseAsyncDispatch } from './useAsyncDispatch';
export declare type IUseAsyncReducer = IUseAsyncSelector & IUseAsyncDispatch;
declare const useAsyncReducer: ({ stateKey, stateItemKeys, ...props }: IUseAsyncReducer) => () => any;
export default useAsyncReducer;
