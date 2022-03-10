import React from "react";
import { ComponentProps } from "../../hooks";
export interface DropdownProps extends ComponentProps, React.HTMLAttributes<HTMLDivElement> {
    isOpen?: boolean;
    onChangeOpen?: (isOpen: boolean) => void;
    className?: string;
    listClassname?: string;
    itemClassname?: string;
    dropdownItems?: React.ReactNodeArray;
}
export declare const Dropdown: React.MemoExoticComponent<({ style, children, hover, themeCSS: themeCSSProps, className, listClassname, itemClassname, dropdownItems, isOpen: isOpenProps, onChangeOpen, ...props }: DropdownProps) => React.ReactElement>;
