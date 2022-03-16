var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import React, { memo } from 'react';
import ReactModal from 'react-modal';
import styled from '@emotion/styled';
import { useThemeConfig } from '../../hooks';
import { useMemo } from 'react';
export var defaultStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        outline: 'none',
        border: 0,
    },
};
var Component = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, onRequestClose = _a.onRequestClose, _b = _a.isOpen, isOpen = _b === void 0 ? true : _b, props = __rest(_a, ["children", "className", "onRequestClose", "isOpen"]);
    var themeCSS = useThemeConfig(__assign(__assign({}, props), { component: 'modal' }));
    var overrideStyle = useMemo(function () {
        var _a, _b, _c, _d;
        return ({
            overlay: __assign(__assign({}, defaultStyle.overlay), ((_b = (_a = props === null || props === void 0 ? void 0 : props.style) === null || _a === void 0 ? void 0 : _a.overlay) !== null && _b !== void 0 ? _b : {})),
            content: __assign(__assign({}, defaultStyle.content), ((_d = (_c = props === null || props === void 0 ? void 0 : props.style) === null || _c === void 0 ? void 0 : _c.content) !== null && _d !== void 0 ? _d : {})),
        });
    }, [props.style]);
    return (React.createElement(ModalJSX, __assign({ ref: ref, isOpen: isOpen, onRequestClose: onRequestClose, style: overrideStyle, className: className, themeCSS: themeCSS, ariaHideApp: false }, props), children));
});
export var Modal = memo(Component);
var ModalJSX = styled(ReactModal)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #fff;\n  border: 0;\n  outline: none;\n  ", ";\n"], ["\n  background-color: #fff;\n  border: 0;\n  outline: none;\n  ", ";\n"])), function (props) { return props.themeCSS; });
var templateObject_1;
//# sourceMappingURL=Modal.js.map