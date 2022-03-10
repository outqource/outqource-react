import React from "react";
import { ComponentProps } from "../../hooks";
import { DropdownProps } from "../Dropdown";
export interface DropdownInputProps extends ComponentProps, DropdownProps {
    icon?: boolean;
    inputClassname?: string;
}
export declare const DropdownInput: React.MemoExoticComponent<({ className, icon, children, hover, listClassname, itemClassname, inputClassname, dropdownItems, isOpen: isOpenProps, onChangeOpen, ...props }: DropdownInputProps) => JSX.Element>;
