import { DebouncedFunc, throttle } from 'lodash-es';
import { useMemo, useRef } from 'react';

function useThrottleCallback<T extends any[]>(cb: (...args: T) => void, delay: number = 300) {
  const cbRef = useRef(cb);
  cbRef.current = cb;

  return useMemo(() => throttle((...args) => cbRef.current(...(args as any)), delay, { leading: true, trailing: false }), [delay]) as DebouncedFunc<(...args: T) => void>;
}

export default useThrottleCallback;
