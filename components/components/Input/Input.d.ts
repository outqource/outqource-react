import React from "react";
import { ComponentProps } from "../../hooks";
export interface InputProps extends ComponentProps, React.InputHTMLAttributes<HTMLInputElement> {
    icon?: boolean;
}
export declare const Input: React.MemoExoticComponent<({ className, icon, ...props }: InputProps) => JSX.Element>;
