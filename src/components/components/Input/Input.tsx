/* tslint:disable:no-unused-variable */
import styled from '@emotion/styled';
import React, { memo } from 'react';
import cx from 'classnames';

import { ComponentProps, useThemeConfig } from '../../lib';

export interface InputProps
  extends ComponentProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

const Component = ({
  className,
  icon = false,
  ...props
}: InputProps): JSX.Element => {
  const themeCSS = useThemeConfig({ ...props, component: 'input' });
  return (
    <InputJSX
      themeCSS={themeCSS}
      className={cx(className, { 'icon-input': icon })}
      {...props}
    />
  );
};

export const Input = memo(Component);

const InputJSX = styled.input<InputProps>`
  box-shadow: none;
  border: 0;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  ${(props) => props.themeCSS};
`;
