import { useEffect } from 'react';
export var useClickOutside = function (refs, handler) {
    useEffect(function () {
        var listener = function (event) {
            var isNotContained = false;
            for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
                var ref = refs_1[_i];
                if (!ref.current)
                    break;
                var target = event.target;
                if (ref.current.contains(target)) {
                    isNotContained = false;
                    break;
                }
                else {
                    isNotContained = true;
                }
            }
            if (isNotContained)
                handler(event);
        };
        document.addEventListener('mousedown', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
        };
    }, [refs, handler]);
};
//# sourceMappingURL=useClickOutside.js.map