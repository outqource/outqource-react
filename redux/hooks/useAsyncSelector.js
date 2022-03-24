import React from 'react';
import { useSelector } from 'react-redux';
var useAsyncSelector = function (_a) {
    var stateKey = _a.stateKey, _b = _a.paginationKey, paginationKey = _b === void 0 ? undefined : _b, _c = _a.limit, limit = _c === void 0 ? 20 : _c;
    var selectState = useSelector(function (state) {
        var stateKeys = stateKey.split('.');
        var itemState = state;
        stateKeys.forEach(function (stateKey) {
            itemState = itemState[stateKey];
        });
        return itemState;
    });
    var data = React.useMemo(function () {
        var _a;
        return (_a = selectState.data) !== null && _a !== void 0 ? _a : null;
    }, [selectState]);
    var error = React.useMemo(function () {
        var _a;
        return (_a = selectState.error) !== null && _a !== void 0 ? _a : null;
    }, [selectState]);
    var pagination = React.useMemo(function () {
        var _a;
        if (!paginationKey)
            return undefined;
        var _b = (_a = selectState.data) !== null && _a !== void 0 ? _a : {}, _c = _b.page, page = _c === void 0 ? 1 : _c, _d = _b.count, count = _d === void 0 ? 0 : _d;
        var data = selectState.data ? selectState.data[paginationKey] : [];
        var currentCount = 0;
        var isPrev = false;
        var isNext = false;
        if (Array.isArray(data) && data.length > 0) {
            currentCount = data.length;
            if (page > 1)
                isPrev = true;
            if (data.length < count)
                isNext = true;
        }
        return {
            page: page,
            count: count,
            currentCount: currentCount,
            limit: limit,
            isPrev: isPrev,
            isNext: isNext,
        };
    }, [selectState, paginationKey, limit]);
    return {
        data: data,
        error: error,
        pagination: pagination,
    };
};
export default useAsyncSelector;
//# sourceMappingURL=useAsyncSelector.js.map