var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { useDispatch } from "react-redux";
import { createAsyncModel } from "../lib";
var capitalizeString = function (text) {
    if (text.length === 0)
        return text;
    return text[0].toUpperCase() + text.slice(1);
};
var getMethodName = function (stateKeys) {
    var methodName = "";
    stateKeys.forEach(function (stateKey) {
        methodName = "".concat(methodName).concat(capitalizeString(stateKey));
    });
    return methodName;
};
export var createAsyncActions = function (stateKey) {
    var _a;
    var stateKeys = stateKey.split(".");
    if (stateKeys.length !== 2)
        throw new Error("StateKey가 잘못되었습니다");
    var methodName = getMethodName(stateKeys);
    var dataKey = stateKeys[1];
    var setData = function (state, action) {
        state[dataKey].data = action.payload;
    };
    var setError = function (state, action) {
        state[dataKey].data = action.payload;
    };
    var setStatus = function (state, action) {
        state[dataKey].status = action.payload;
    };
    var setPage = function (state, action) {
        var prevData = state[dataKey].data || {};
        state[dataKey].data = __assign(__assign({}, prevData), { page: action.payload });
    };
    var setCount = function (state, action) {
        var prevData = state[dataKey].data || {};
        state[dataKey].data = __assign(__assign({}, prevData), { count: action.payload });
    };
    var clear = function (state) {
        state[dataKey] = createAsyncModel();
    };
    var clearData = function (state) {
        state[dataKey].data = null;
    };
    return _a = {},
        _a["set".concat(methodName, "Data")] = setData,
        _a["set".concat(methodName, "Error")] = setError,
        _a["set".concat(methodName, "Status")] = setStatus,
        _a["set".concat(methodName, "Page")] = setPage,
        _a["set".concat(methodName, "Count")] = setCount,
        _a["clear".concat(methodName)] = clear,
        _a["clear".concat(methodName, "Data")] = clearData,
        _a;
};
var useAsyncDispatch = function (props) {
    var dispatch = useDispatch();
    var setData = React.useCallback(function (data) {
        if (props.setData) {
            console.log(props.setData, data);
            dispatch(props.setData(data));
        }
    }, [props.setData]);
    var setError = React.useCallback(function (data) {
        if (props.setError) {
            dispatch(props.setError(data));
        }
    }, [props.setError]);
    var setStatus = React.useCallback(function (data) {
        if (props.setStatus) {
            dispatch(props.setStatus(data));
        }
    }, [props.setStatus]);
    var setPage = React.useCallback(function (data) {
        if (props.setPage) {
            dispatch(props.setPage(data));
        }
    }, [props.setPage]);
    var setCount = React.useCallback(function (data) {
        if (props.setCount) {
            dispatch(props.setCount(data));
        }
    }, [props.setCount]);
    var clear = React.useCallback(function () {
        if (props.clear) {
            dispatch(props.clear());
        }
    }, [props.clear]);
    var clearData = React.useCallback(function () {
        if (props.clearData) {
            dispatch(props.clearData());
        }
    }, [props.clearData]);
    var getData = React.useCallback(function (data) {
        if (props.fetch) {
            dispatch(props.fetch(data));
        }
    }, [props.fetch]);
    var refreshData = React.useCallback(function (data) {
        if (props.refresh) {
            dispatch(props.refresh(data));
        }
    }, [props.refresh]);
    return {
        setData: setData,
        setError: setError,
        setStatus: setStatus,
        setPage: setPage,
        setCount: setCount,
        clear: clear,
        clearData: clearData,
        getData: getData,
        refreshData: refreshData,
    };
};
export default useAsyncDispatch;
//# sourceMappingURL=useAsyncDispatch.js.map