var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import useAsyncSelector from './useAsyncSelector';
import useAsyncDispatch from './useAsyncDispatch';
var useAsyncReducer = function (_a) {
    var stateKey = _a.stateKey, paginationKey = _a.paginationKey, limit = _a.limit, props = __rest(_a, ["stateKey", "paginationKey", "limit"]);
    return function () {
        var _a = useAsyncSelector({ stateKey: stateKey, paginationKey: paginationKey, limit: limit }), data = _a.data, error = _a.error, pagination = _a.pagination;
        var _b = useAsyncDispatch(props), setData = _b.setData, setError = _b.setError, setStatus = _b.setStatus, setPage = _b.setPage, setCount = _b.setCount, clear = _b.clear, clearData = _b.clearData;
        return {
            data: data,
            error: error,
            pagination: pagination,
            setData: setData,
            setError: setError,
            setStatus: setStatus,
            setPage: setPage,
            setCount: setCount,
            clear: clear,
            clearData: clearData,
        };
    };
};
export default useAsyncReducer;
//# sourceMappingURL=useAsyncReducer.js.map