import React from "react";
import { ComponentProps } from "../../hooks";
export interface ButtonProps extends ComponentProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: boolean;
    active?: boolean;
}
export declare const Button: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<ButtonProps, keyof ButtonProps> & React.RefAttributes<HTMLButtonElement>>>;
