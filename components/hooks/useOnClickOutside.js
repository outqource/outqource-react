import useEventListener from './useEventListener';
function useOnClickOutside(refs, handler, mouseEvent) {
    if (mouseEvent === void 0) { mouseEvent = 'mousedown'; }
    useEventListener(mouseEvent, function (event) {
        if (Array.isArray(refs)) {
            var isNotContained = false;
            for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
                var ref = refs_1[_i];
                var el = ref === null || ref === void 0 ? void 0 : ref.current;
                if (!el)
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
        }
        else {
            var el = refs === null || refs === void 0 ? void 0 : refs.current;
            if (!el || el.contains(event.target)) {
                return;
            }
            handler(event);
        }
    });
}
export default useOnClickOutside;
//# sourceMappingURL=useOnClickOutside.js.map