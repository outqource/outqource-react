var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { createContext, useReducer } from 'react';
var ActionType;
(function (ActionType) {
    ActionType["create"] = "modal/CREATE_MODAL";
    ActionType["createUnshift"] = "modal/CREATE_UNSHIFT_MODAL";
    ActionType["delete"] = "modal/DELETE_MODAL";
    ActionType["clear"] = "modal/CLEAR_MODAL";
})(ActionType || (ActionType = {}));
export var createModal = function (props) { return ({
    type: ActionType.create,
    payload: props,
}); };
export var createUnshiftModal = function (props) { return ({
    type: ActionType.createUnshift,
    payload: props,
}); };
export var deleteModal = function (name) { return ({
    type: ActionType.delete,
    payload: name,
}); };
export var clearModal = function () { return ({ type: ActionType.clear }); };
export var ModalContext = createContext({
    state: [],
    dispatch: function () { return undefined; },
});
export var reducer = function (state, action) {
    var type = action === null || action === void 0 ? void 0 : action.type;
    switch (type) {
        case ActionType.create:
            return __spreadArray(__spreadArray([], state, true), [action.payload], false);
        case ActionType.createUnshift:
            return __spreadArray([action.payload], state, true);
        case ActionType.delete:
            return state.filter(function (modal) { return modal.name !== action.payload; });
        case ActionType.clear:
            return [];
        default:
            return state;
    }
};
export var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(reducer, []), state = _b[0], dispatch = _b[1];
    return (React.createElement(ModalContext.Provider, { value: { state: state, dispatch: dispatch } }, children));
};
//# sourceMappingURL=modalProvider.js.map