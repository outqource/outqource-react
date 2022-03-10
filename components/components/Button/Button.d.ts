import React from "react";
import { ComponentProps } from "../../hooks";
export interface ButtonProps extends ComponentProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: boolean;
    active?: boolean;
}
export declare const Button: React.MemoExoticComponent<({ className, children, active, ...props }: ButtonProps) => JSX.Element>;
