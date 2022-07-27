/* eslint-disable @typescript-eslint/ban-types */
// https://github.com/streamich/react-use/blob/master/src/useTimeoutFn.ts
import { useCallback, useEffect, useRef } from 'react';
export default function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = useRef(false);
    var timeout = useRef();
    var callback = useRef(fn);
    var isReady = useCallback(function () { return ready.current; }, []);
    var set = useCallback(function () {
        ready.current = false;
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = useCallback(function () {
        if (timeout.current == null)
            return;
        ready.current = null;
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    }, []);
    // NOTE: unmount시 클리어 처리
    useEffect(function () {
        return clear;
    }, [clear]);
    return [set, clear, isReady];
}
//# sourceMappingURL=useTimeoutFn.js.map