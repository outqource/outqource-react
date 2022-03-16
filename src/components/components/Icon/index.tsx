import React, { memo } from 'react';
import styled from '@emotion/styled';
import { useThemeConfig, ComponentProps } from '../../hooks';

export interface IconProps extends ComponentProps, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactText;
}

const Component = React.forwardRef(({ className, children, ...props }: IconProps, ref?: React.LegacyRef<HTMLDivElement>) => {
  const themeCSS = useThemeConfig({ ...props, component: 'icon' });

  return (
    <IconJSX ref={ref} className={className} themeCSS={themeCSS} {...props}>
      {children}
    </IconJSX>
  );
});

export const Icon = memo(Component);

const IconJSX = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.themeCSS};
`;
