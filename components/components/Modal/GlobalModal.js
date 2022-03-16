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
import React, { memo, useContext } from 'react';
import { ModalContext } from '../../lib';
var GlobalComponent = function (_a) {
    var _b = _a.multiple, multiple = _b === void 0 ? true : _b, _c = _a.last, last = _c === void 0 ? false : _c;
    var state = useContext(ModalContext).state;
    var modals = null;
    if (state.length > 0 && multiple) {
        modals = state.map(function (modal, index) {
            var Component = modal.component;
            return React.createElement(Component, __assign({ key: "modals/".concat(index) }, modal.props));
        });
    }
    else if (state.length > 0 && !multiple) {
        var modalList = state.map(function (modal, index) {
            var Component = modal.component;
            return React.createElement(Component, __assign({ key: "modals/".concat(index) }, modal.props));
        });
        if (last)
            modals = modalList[state.length - 1];
        else
            modals = modalList[0];
    }
    return React.createElement(React.Fragment, null, modals);
};
export var GlobalModal = memo(GlobalComponent);
//# sourceMappingURL=GlobalModal.js.map