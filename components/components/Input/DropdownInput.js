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
/* tslint:disable:no-unused-variable */
import styled from "@emotion/styled";
import React, { memo } from "react";
import cx from "classnames";
import { useThemeConfig } from "../../hooks";
import { Dropdown } from "../Dropdown";
var Component = function (_a) {
    var className = _a.className, _b = _a.icon, icon = _b === void 0 ? false : _b, children = _a.children, hover = _a.hover, listClassname = _a.listClassname, itemClassname = _a.itemClassname, inputClassname = _a.inputClassname, dropdownItems = _a.dropdownItems, _c = _a.isOpen, isOpenProps = _c === void 0 ? false : _c, onChangeOpen = _a.onChangeOpen, props = __rest(_a, ["className", "icon", "children", "hover", "listClassname", "itemClassname", "inputClassname", "dropdownItems", "isOpen", "onChangeOpen"]);
    var themeCSS = useThemeConfig(__assign(__assign({}, props), { component: "dropdownInput" }));
    return (React.createElement(Dropdown, { themeCSS: themeCSS, hover: hover, className: className, listClassname: listClassname, itemClassname: itemClassname, dropdownItems: dropdownItems, isOpen: isOpenProps, onChangeOpen: onChangeOpen },
        React.createElement(InputJSX, __assign({ className: cx(inputClassname, { iconInput: icon }) }, props))));
};
export var DropdownInput = memo(Component);
var InputJSX = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: none;\n  border: 0;\n  border-radius: 4px;\n  outline: none;\n  box-sizing: border-box;\n  ", ";\n"], ["\n  box-shadow: none;\n  border: 0;\n  border-radius: 4px;\n  outline: none;\n  box-sizing: border-box;\n  ", ";\n"])), function (props) { return props.themeCSS; });
var templateObject_1;
//# sourceMappingURL=DropdownInput.js.map