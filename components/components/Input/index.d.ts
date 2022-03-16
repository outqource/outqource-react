import React from 'react';
import { ComponentProps } from '../../hooks';
export interface InputProps extends ComponentProps, React.InputHTMLAttributes<HTMLInputElement> {
    icon?: boolean;
}
export declare const Input: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<InputProps, keyof InputProps> & React.RefAttributes<HTMLInputElement>>>;
