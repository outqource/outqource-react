import React, { memo } from 'react';
import styled from '@emotion/styled';
import { ComponentProps, useThemeConfig } from '../../lib';

export interface TextareaProps
  extends ComponentProps,
    React.HTMLAttributes<HTMLTextAreaElement> {}

const Component = ({ className, ...props }: TextareaProps): JSX.Element => {
  const themeCSS = useThemeConfig({ ...props, component: 'textarea' });
  return <TextareaJSX className={className} themeCSS={themeCSS} {...props} />;
};

export const Textarea = memo(Component);

const TextareaJSX = styled.textarea<TextareaProps>`
  box-shadow: none;
  border: 0;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  ${(props) => props.themeCSS};
`;
