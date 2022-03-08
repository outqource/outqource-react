import React, { memo } from 'react';
import styled from '@emotion/styled';

import { useThemeConfig, ComponentProps } from '../../lib';

export interface DividerProps
  extends ComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement | string;
}

const Component = ({
  className,
  children,
  ...props
}: DividerProps): React.ReactElement => {
  const themeCSS = useThemeConfig({ ...props, component: 'divider' });
  return <DividerJSX className={className} themeCSS={themeCSS} {...props} />;
};

export const Divider = memo(Component);

const DividerJSX = styled.div<DividerProps>`
  width: 100%;
  height: 1px;
  background-color: #eaeaea;
  ${(props) => props.themeCSS};
`;
