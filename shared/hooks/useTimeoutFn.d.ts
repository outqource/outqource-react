declare type ReadyFunction = () => boolean | null;
declare type SetFunction = () => void;
declare type ClearFunction = SetFunction;
export declare type UseTimeoutFn = [SetFunction, ClearFunction, ReadyFunction];
export default function useTimeoutFn(fn: Function, ms?: number): UseTimeoutFn;
export {};
