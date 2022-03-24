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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    if (stateKeys.length !== 2)
        throw new Error("StateKey가 잘못되었습니다");
    return "".concat(capitalizeString(stateKeys[1]));
};
export var createAsyncActions = function (stateKey) {
    var _a;
    var stateKeys = stateKey.split(".");
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
export var getAsyncActions = function (actions, stateKey) {
    var methodName = getMethodName(stateKey.split("."));
    var filterActions = {};
    Object.entries(actions).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (key.includes(methodName)) {
            filterActions[key.replace(methodName, "")] = value;
        }
    });
    return filterActions;
};
var useAsyncDispatch = function (props) {
    var dispatch = useDispatch();
    var setData = React.useCallback(function (data) {
        if (props.setData) {
            console.log(props.setData, data);
            dispatch(props.setData(data));
        }
    }, [dispatch, props]);
    var setError = React.useCallback(function (data) {
        if (props.setError) {
            dispatch(props.setError(data));
        }
    }, [dispatch, props]);
    var setStatus = React.useCallback(function (data) {
        if (props.setStatus) {
            dispatch(props.setStatus(data));
        }
    }, [dispatch, props]);
    var setPage = React.useCallback(function (data) {
        if (props.setPage) {
            dispatch(props.setPage(data));
        }
    }, [dispatch, props]);
    var setCount = React.useCallback(function (data) {
        if (props.setCount) {
            dispatch(props.setCount(data));
        }
    }, [dispatch, props]);
    var clear = React.useCallback(function () {
        if (props.clear) {
            dispatch(props.clear());
        }
    }, [dispatch, props]);
    var clearData = React.useCallback(function () {
        if (props.clearData) {
            dispatch(props.clearData());
        }
    }, [dispatch, props]);
    var getData = React.useCallback(function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!props.getData) return [3 /*break*/, 2];
                    return [4 /*yield*/, dispatch(props.getData(data))];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [2 /*return*/];
            }
        });
    }); }, [dispatch, props]);
    var refreshData = React.useCallback(function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!props.refreshData) return [3 /*break*/, 2];
                    return [4 /*yield*/, dispatch(props.refreshData(data))];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [2 /*return*/];
            }
        });
    }); }, [dispatch, props]);
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