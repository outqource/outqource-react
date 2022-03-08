import React, { memo } from "react";
import styled from "@emotion/styled";
import ReactDropzone, { DropzoneOptions } from "react-dropzone";

import { useThemeConfig, ComponentProps } from "../../hooks";

export interface DropzoneProps extends ComponentProps, DropzoneOptions {}

const Component = ({
  className,
  children,
  accept,
  minSize,
  maxSize,
  maxFiles,
  preventDropOnDocument,
  noClick,
  noKeyboard,
  noDrag,
  noDragEventsBubbling,
  disabled,
  onDrop,
  onDropAccepted,
  onDropRejected,
  getFilesFromEvent,
  onFileDialogCancel,
  validator,
  ...props
}: DropzoneProps): React.ReactElement => {
  const themeCSS = useThemeConfig({ ...props, component: "dropzone" });

  return (
    <ReactDropzone
      accept={accept}
      minSize={minSize}
      maxSize={maxSize}
      preventDropOnDocument={preventDropOnDocument}
      noClick={noClick}
      noKeyboard={noKeyboard}
      noDrag={noDrag}
      noDragEventsBubbling={noDragEventsBubbling}
      disabled={disabled}
      onDrop={onDrop}
      onDropAccepted={onDropAccepted}
      onDropRejected={onDropRejected}
      getFilesFromEvent={getFilesFromEvent}
      onFileDialogCancel={onFileDialogCancel}
      validator={validator}
    >
      {({ getRootProps, getInputProps }) => (
        <DropzoneJSX
          className={className}
          themeCSS={themeCSS}
          {...getRootProps()}
          {...props}
        >
          <DropzoneInput {...getInputProps()} />
          {children}
        </DropzoneJSX>
      )}
    </ReactDropzone>
  );
};

export const Dropzone = memo(Component);

const DropzoneJSX = styled.div<DropzoneProps>`
  width: 100%;
  min-height: 240px;
  background-color: #fafafa;

  ${(props) => props.themeCSS};
`;

const DropzoneInput = styled.input`
  display: none;
`;
