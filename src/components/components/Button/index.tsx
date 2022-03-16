import React, { memo } from "react";
import cx from "classnames";
import styled from "@emotion/styled";

import { useThemeConfig, ComponentProps } from "../../hooks";

export interface ButtonProps
  extends ComponentProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  active?: boolean;
}

const Component = React.forwardRef(
  (
    { className, children, active, ...props }: ButtonProps,
    ref?: React.LegacyRef<HTMLButtonElement>
  ): JSX.Element => {
    const themeCSS = useThemeConfig({ ...props, component: "button" });

    return (
      <ButtonJSX
        ref={ref}
        className={cx(className, { isActive: active })}
        themeCSS={themeCSS}
        {...props}
      >
        {children}
      </ButtonJSX>
    );
  }
);

export const Button = memo(Component);

const ButtonJSX = styled.button<ButtonProps>`
  outline: none;
  border: 0;
  background-color: transparent;
  ${(props) =>
    props.icon &&
    "display: flex; align-items: center; justify-content: center;"}
  ${(props) => props.themeCSS};
`;
