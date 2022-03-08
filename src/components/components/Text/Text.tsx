import React, { useMemo, memo } from 'react';
import styled from '@emotion/styled';

import { useThemeConfig, ComponentProps } from '../../lib';

export interface TextProps
  extends ComponentProps,
    React.HTMLAttributes<HTMLElement> {}

const Component = ({
  className,
  children,
  ...props
}: TextProps): JSX.Element => {
  const themeCSS = useThemeConfig({ ...props, component: 'text' });
  const TextJSX = useMemo(() => createTextJSX(getTextTag(props)), [props]);

  return (
    <TextJSX className={className} themeCSS={themeCSS} {...props}>
      {children}
    </TextJSX>
  );
};

export const Text = memo(Component);

const getTextTag = (props: { [key: string]: any }) => {
  if (props.h1) return 'h1';
  if (props.h2) return 'h2';
  if (props.h3) return 'h3';
  if (props.h4) return 'h4';
  if (props.h5) return 'h5';
  if (props.label) return 'label';
  if (props.span) return 'span';
  return 'p';
};

const createTextJSX = (tag: any) => styled(tag)<TextProps>`
  margin: 0;
  padding: 0;
  ${(props) => props.themeCSS};
`;
