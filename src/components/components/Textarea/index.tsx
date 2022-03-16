import React, { memo } from 'react';
import styled from '@emotion/styled';
import { useThemeConfig, ComponentProps } from '../../hooks';

export interface TextareaProps extends ComponentProps, React.HTMLAttributes<HTMLTextAreaElement> {}

const Component = React.forwardRef(({ className, ...props }: TextareaProps, ref?: React.LegacyRef<HTMLTextAreaElement>): JSX.Element => {
  const themeCSS = useThemeConfig({ ...props, component: 'textarea' });
  return <TextareaJSX ref={ref} className={className} themeCSS={themeCSS} {...props} />;
});

export const Textarea = memo(Component);

const TextareaJSX = styled.textarea<TextareaProps>`
  box-shadow: none;
  border: 0;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  ${(props) => props.themeCSS};
`;
