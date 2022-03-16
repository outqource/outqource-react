import React, { LegacyRef } from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';

import { ComponentProps, useThemeConfig } from '../../hooks';

export interface InputProps extends ComponentProps, React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

const Component = React.forwardRef((props: InputProps, ref?: LegacyRef<HTMLInputElement>) => {
  const { className, icon = false, ...rest } = props;
  const themeCSS = useThemeConfig({ ...rest, component: 'input' });

  return <InputJSX ref={ref} themeCSS={themeCSS} className={cx(className, { 'icon-input': icon })} {...rest} />;
});

export const Input = React.memo(Component);

const InputJSX = styled.input<InputProps>`
  box-shadow: none;
  border: 0;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  ${(props) => props.themeCSS};
`;
