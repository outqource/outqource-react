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
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import isArray from "lodash/isArray";
import mergeWith from "lodash/mergeWith";
function customizer(objValue, srcValue) {
    if (isArray(objValue)) {
        return objValue.concat(srcValue);
    }
    return srcValue;
}
export var mergeWithPagination = function (object, other) {
    return mergeWith({}, object, other, customizer);
};
var getMergeKeys = function (mergeKey) {
    if (!mergeKey)
        return [];
    return mergeKey.split(".");
};
var getPrevState = function (state, mergeKeys) {
    var prevState = state;
    for (var _i = 0, mergeKeys_1 = mergeKeys; _i < mergeKeys_1.length; _i++) {
        var mergeKey = mergeKeys_1[_i];
        if (prevState) {
            prevState = prevState[mergeKey];
        }
    }
    return prevState;
};
export var createAsyncPaginationThunk = function (typePrefix, payloadCreator, extraOptions, options) {
    var _a = extraOptions !== null && extraOptions !== void 0 ? extraOptions : {}, mergeKey = _a.mergeKey, _b = _a.pageKey, pageKey = _b === void 0 ? "page" : _b, _c = _a.initialPage, initialPage = _c === void 0 ? 1 : _c, _d = _a.countKey, countKey = _d === void 0 ? "count" : _d, _e = _a.initialCount, initialCount = _e === void 0 ? 0 : _e;
    var mergeKeys = getMergeKeys(mergeKey);
    var newPayloadCreator = function (arg, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
        var response, state, prevState;
        var _a, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, payloadCreator(arg, thunkAPI)];
                case 1:
                    response = (_d.sent());
                    if (!mergeKey) {
                        return [2 /*return*/, response];
                    }
                    if (!response) {
                        return [2 /*return*/, response];
                    }
                    if (axios.isAxiosError(response)) {
                        return [2 /*return*/, response];
                    }
                    state = thunkAPI.getState();
                    if (mergeKeys.length === 0) {
                        return [2 /*return*/, response];
                    }
                    prevState = getPrevState(state, mergeKeys);
                    if (!prevState || !prevState[pageKey]) {
                        return [2 /*return*/, __assign(__assign({}, response), (_a = {}, _a[pageKey] = initialPage, _a[countKey] = initialCount, _a))];
                    }
                    return [2 /*return*/, mergeWithPagination(prevState, __assign(__assign({}, response), (_b = {}, _b[pageKey] = prevState[pageKey] + 1, _b[countKey] = (_c = response[countKey]) !== null && _c !== void 0 ? _c : prevState[countKey], _b)))];
            }
        });
    }); };
    return createAsyncThunk(typePrefix, newPayloadCreator, options);
};
export var createAsyncRefreshThunk = function (typePrefix, payloadCreator, extraOptions, options) {
    var _a = extraOptions !== null && extraOptions !== void 0 ? extraOptions : {}, _b = _a.pageKey, pageKey = _b === void 0 ? "page" : _b, _c = _a.initialPage, initialPage = _c === void 0 ? 1 : _c, _d = _a.countKey, countKey = _d === void 0 ? "count" : _d, _e = _a.initialCount, initialCount = _e === void 0 ? 0 : _e;
    var newPayloadCreator = function (arg, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
        var response, nextState;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, payloadCreator(arg, thunkAPI)];
                case 1:
                    response = (_b.sent());
                    if (!response) {
                        return [2 /*return*/, response];
                    }
                    if (axios.isAxiosError(response)) {
                        return [2 /*return*/, response];
                    }
                    nextState = __assign(__assign({}, response), (_a = {}, _a[pageKey] = initialPage, _a[countKey] = initialCount, _a));
                    return [2 /*return*/, nextState];
            }
        });
    }); };
    return createAsyncThunk(typePrefix, newPayloadCreator, options);
};
//# sourceMappingURL=thunk.js.map