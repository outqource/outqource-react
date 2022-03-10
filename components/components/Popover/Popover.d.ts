import React from "react";
import { ComponentProps } from "../../hooks";
export interface PopoverProps extends ComponentProps, React.HTMLAttributes<HTMLDivElement> {
    render?: React.ReactNode | React.ReactNodeArray;
    isOpen?: boolean;
    hover?: boolean;
    onChangeOpen?: (isOpen: boolean) => void;
}
export declare const Popover: React.MemoExoticComponent<({ style, className, children, render, hover, isOpen: isOpenProps, onChangeOpen, themeCSS: themeCSSProps, ...props }: ComponentProps) => React.ReactElement>;
