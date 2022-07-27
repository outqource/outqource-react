declare function useThrottleCallback<T extends any[]>(cb: (...args: T) => void, delay?: number): DebouncedFunc<(...args: T) => void>;
export default useThrottleCallback;
