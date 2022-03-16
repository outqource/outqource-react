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
export var deleteModal = function (props) { return ({
    type: ActionType.delete,
    payload: props,
}); };
export var clearModal = function () { return ({ type: ActionType.clear }); };
export var ModalContext = createContext({
    state: [],
    dispatch: function () { return undefined; },
});
var createModalState = function (state, action, isUnshift) {
    var _a = action.payload, name = _a.name, props = _a.props;
    var modalComponents = props.modalComponents, duplicate = props.duplicate;
    var findModal = undefined;
    state.forEach(function (modal) {
        if (modal.name.toUpperCase() === name.toUpperCase()) {
            findModal = modal;
        }
    });
    // 모달이 있을 경우 중복 금지
    if (findModal && !duplicate) {
        return state;
    }
    var component = undefined;
    Object.entries(modalComponents).forEach(function (modalComponent) {
        var key = modalComponent[0], value = modalComponent[1];
        if (key.toUpperCase() === name.toUpperCase())
            component = value;
    });
    var modalState = {
        name: name.toUpperCase(),
        component: component,
        props: props,
    };
    if (isUnshift) {
        return __spreadArray([modalState], state, true);
    }
    else {
        return __spreadArray(__spreadArray([], state, true), [modalState], false);
    }
};
var deleteModalState = function (state, action) {
    var _a = action.payload, name = _a.name, closeTimeoutMS = _a.closeTimeoutMS;
    var modals = state;
    if (closeTimeoutMS > 0) {
        modals = modals.map(function (modal) {
            if (modal.name !== name)
                return modal;
            if (!modal.props.isOpen)
                return null;
            return __assign(__assign({}, modal), { props: __assign(__assign({}, modal.props), { isOpen: false }) });
        });
    }
    else {
        return state.filter(function (modal) { return modal.name !== action.payload.name; });
    }
    return modals.filter(Boolean);
};
export var reducer = function (state, action) {
    var type = action === null || action === void 0 ? void 0 : action.type;
    switch (type) {
        case ActionType.create:
            return createModalState(state, action);
        // return [...state, action.payload];
        case ActionType.createUnshift:
            return createModalState(state, action, true);
        // return [action.payload, ...state];
        case ActionType.delete:
            return deleteModalState(state, action);
        case ActionType.clear:
            return [];
        default:
            return state;
    }
};
export var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(reducer, []), state = _b[0], dispatch = _b[1];
    return React.createElement(ModalContext.Provider, { value: { state: state, dispatch: dispatch } }, children);
};
//# sourceMappingURL=ModalProvider.js.map