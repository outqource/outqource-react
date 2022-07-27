import { useCallback } from 'react';
import { useMount, useUnmount } from 'react-use';
export default function useKeys() {
    var useKey = function (key, cb) {
        var handleKeyDown = useCallback(function (e) {
            if (e.key !== key)
                return;
            cb(e);
        }, [cb, key]);
        useMount(function () {
            window.addEventListener('keydown', handleKeyDown);
        });
        useUnmount(function () {
            window.removeEventListener('keydown', handleKeyDown);
        });
    };
    var useEnterToConfirm = function (btnRef, cb) {
        var handleKeyDown = useCallback(function (e) {
            if (e.key !== 'Enter')
                return;
            if (!btnRef.current)
                return;
            if (cb) {
                cb(e);
                return;
            }
            btnRef.current.click();
        }, [btnRef, cb]);
        useMount(function () {
            window.addEventListener('keydown', handleKeyDown);
        });
        useUnmount(function () {
            window.removeEventListener('keydown', handleKeyDown);
        });
    };
    return {
        useKey: useKey,
        useEnterToConfirm: useEnterToConfirm,
    };
}
//# sourceMappingURL=useKeys.js.map