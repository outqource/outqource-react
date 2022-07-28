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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { createSlice as createBaseSlice } from '@reduxjs/toolkit';
import { createAsyncModel } from './model';
var capitalizeString = function (text) {
    if (typeof text !== 'string')
        return '';
    if (text.length === 0)
        return text;
    return text[0].toUpperCase() + text.slice(1);
};
export var createCustomSlice = function (options) {
    var initialState = options.initialState;
    var asyncStateNames = Object.entries(initialState).reduce(function (acc, _a) {
        var stateKey = _a[0], stateValue = _a[1];
        if (typeof stateValue === 'object' && stateValue !== null) {
            var stateValueKeys = Object.keys(stateValue !== null && stateValue !== void 0 ? stateValue : {}).join(',');
            if (stateValueKeys === 'status,data,error') {
                return __spreadArray(__spreadArray([], acc, true), [stateKey], false);
            }
        }
        return acc;
    }, []);
    asyncStateNames.forEach(function (stateName) {
        var reducers = {};
        reducers["set".concat(capitalizeString(stateName), "Status")] = function (state, action) {
            state[stateName].status = action.payload;
        };
        reducers["set".concat(capitalizeString(stateName), "Data")] = function (state, action) {
            state[stateName].data = action.payload;
        };
        reducers["set".concat(capitalizeString(stateName), "Error")] = function (state, action) {
            state[stateName].error = action.payload;
        };
        reducers["clear".concat(capitalizeString(stateName))] = function (state, action) {
            state[stateName] = createAsyncModel(action.payload);
        };
        options.reducers = __assign(__assign({}, options.reducers), reducers);
    });
    return createBaseSlice(options);
};
//# sourceMappingURL=createCustomSlice.js.map