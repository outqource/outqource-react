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
import React, { memo } from "react";
import styled from "@emotion/styled";
import ReactDropzone from "react-dropzone";
import { useThemeConfig } from "../../hooks";
var Component = function (_a) {
    var className = _a.className, children = _a.children, accept = _a.accept, minSize = _a.minSize, maxSize = _a.maxSize, maxFiles = _a.maxFiles, preventDropOnDocument = _a.preventDropOnDocument, noClick = _a.noClick, noKeyboard = _a.noKeyboard, noDrag = _a.noDrag, noDragEventsBubbling = _a.noDragEventsBubbling, disabled = _a.disabled, onDrop = _a.onDrop, onDropAccepted = _a.onDropAccepted, onDropRejected = _a.onDropRejected, getFilesFromEvent = _a.getFilesFromEvent, onFileDialogCancel = _a.onFileDialogCancel, validator = _a.validator, props = __rest(_a, ["className", "children", "accept", "minSize", "maxSize", "maxFiles", "preventDropOnDocument", "noClick", "noKeyboard", "noDrag", "noDragEventsBubbling", "disabled", "onDrop", "onDropAccepted", "onDropRejected", "getFilesFromEvent", "onFileDialogCancel", "validator"]);
    var themeCSS = useThemeConfig(__assign(__assign({}, props), { component: "dropzone" }));
    return (React.createElement(ReactDropzone, { accept: accept, minSize: minSize, maxSize: maxSize, preventDropOnDocument: preventDropOnDocument, noClick: noClick, noKeyboard: noKeyboard, noDrag: noDrag, noDragEventsBubbling: noDragEventsBubbling, disabled: disabled, onDrop: onDrop, onDropAccepted: onDropAccepted, onDropRejected: onDropRejected, getFilesFromEvent: getFilesFromEvent, onFileDialogCancel: onFileDialogCancel, validator: validator }, function (_a) {
        var getRootProps = _a.getRootProps, getInputProps = _a.getInputProps;
        return (React.createElement(DropzoneJSX, __assign({ className: className, themeCSS: themeCSS }, getRootProps(), props),
            React.createElement(DropzoneInput, __assign({}, getInputProps())),
            children));
    }));
};
export var Dropzone = memo(Component);
var DropzoneJSX = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  min-height: 240px;\n  background-color: #fafafa;\n\n  ", ";\n"], ["\n  width: 100%;\n  min-height: 240px;\n  background-color: #fafafa;\n\n  ", ";\n"])), function (props) { return props.themeCSS; });
var DropzoneInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=Dropzone.js.map