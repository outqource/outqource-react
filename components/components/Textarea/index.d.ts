import React from 'react';
import { ComponentProps } from '../../hooks';
export interface TextareaProps extends ComponentProps, React.HTMLAttributes<HTMLTextAreaElement> {
}
export declare const Textarea: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<TextareaProps, keyof TextareaProps> & React.RefAttributes<HTMLTextAreaElement>>>;
