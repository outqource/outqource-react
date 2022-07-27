import { throttle } from 'lodash-es';
import { useMemo, useRef } from 'react';
function useThrottleCallback(cb, delay) {
    if (delay === void 0) { delay = 300; }
    var cbRef = useRef(cb);
    cbRef.current = cb;
    return useMemo(function () { return throttle(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return cbRef.current.apply(cbRef, args);
    }, delay, { leading: true, trailing: false }); }, [delay]);
}
export default useThrottleCallback;
//# sourceMappingURL=useThrottleCallback.js.map