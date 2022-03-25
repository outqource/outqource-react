import { useSelector, shallowEqual } from 'react-redux';
var useAsyncSelector = function (_a) {
    var stateKey = _a.stateKey, stateItemKeys = _a.stateItemKeys;
    var state = useSelector(function (state) {
        var firstState = state[stateKey];
        var selector = {};
        if (Array.isArray(stateItemKeys)) {
            stateItemKeys.forEach(function (itemKey) {
                var _a, _b, _c;
                selector["".concat(itemKey, "Data")] = (_a = firstState[itemKey]) === null || _a === void 0 ? void 0 : _a.data;
                selector["".concat(itemKey, "Status")] = (_b = firstState[itemKey]) === null || _b === void 0 ? void 0 : _b.status;
                selector["".concat(itemKey, "Error")] = (_c = firstState[itemKey]) === null || _c === void 0 ? void 0 : _c.error;
            });
        }
        return selector;
    }, shallowEqual);
    return state;
};
export default useAsyncSelector;
//# sourceMappingURL=useAsyncSelector.js.map