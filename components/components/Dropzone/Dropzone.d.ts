import React from "react";
import { DropzoneOptions } from "react-dropzone";
import { ComponentProps } from "../../hooks";
export interface DropzoneProps extends ComponentProps, DropzoneOptions {
}
export declare const Dropzone: React.MemoExoticComponent<({ className, children, accept, minSize, maxSize, maxFiles, preventDropOnDocument, noClick, noKeyboard, noDrag, noDragEventsBubbling, disabled, onDrop, onDropAccepted, onDropRejected, getFilesFromEvent, onFileDialogCancel, validator, ...props }: DropzoneProps) => React.ReactElement>;
