import React, { memo } from "react";
import styled from "@emotion/styled";
import { useThemeConfig, ComponentProps } from "../../hooks";

export interface IconProps
  extends ComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactText;
}

const Component = ({
  className,
  children,
  ...props
}: IconProps): JSX.Element | null => {
  const themeCSS = useThemeConfig({ ...props, component: "icon" });

  return (
    <IconJSX className={className} themeCSS={themeCSS} {...props}>
      {children}
    </IconJSX>
  );
};

export const Icon = memo(Component);

const IconJSX = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.themeCSS};
`;
