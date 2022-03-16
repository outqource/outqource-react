import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '.';
function useLockedBody(rootName, initialLocked) {
    if (rootName === void 0) { rootName = '__root'; }
    if (initialLocked === void 0) { initialLocked = false; }
    var _a = useState(initialLocked), locked = _a[0], setLocked = _a[1];
    // Do the side effect before render
    useIsomorphicLayoutEffect(function () {
        if (!locked) {
            return;
        }
        // Save initial body style
        var originalOverflow = document.body.style.overflow;
        var originalPaddingRight = document.body.style.paddingRight;
        // Lock body scroll
        document.body.style.overflow = 'hidden';
        // Get the scrollBar width
        var root = document.getElementById(rootName); // or root
        var scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;
        // Avoid width reflow
        if (scrollBarWidth) {
            document.body.style.paddingRight = "".concat(scrollBarWidth, "px");
        }
        return function () {
            document.body.style.overflow = originalOverflow;
            if (scrollBarWidth) {
                document.body.style.paddingRight = originalPaddingRight;
            }
        };
    }, [locked, rootName]);
    // Update state if initialValue changes
    useEffect(function () {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked]);
    return [locked, setLocked];
}
export default useLockedBody;
//# sourceMappingURL=useLockedBody.js.map