import { css, Global as EmotionGlobal, ThemeProvider as EmotionThemeProvider, ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import React, { useMemo } from 'react';

import normalize from '../_constant/normalize';

export type CustomTheme = {
  [component: string]: {
    [theme: string]: CSSInterpolation;
  };
};

export interface ThemeProviderProps extends EmotionThemeProviderProps {
  theme: CustomTheme;
  global?: CSSInterpolation;
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

export const createGlobal = (props: CSSInterpolation) => css(props || normalize)?.styles;

export const ThemeProvider = ({ global, theme, children }: ThemeProviderProps) => {
  const globalStyles = useMemo(() => createGlobal(global), [global]);

  return (
    <EmotionThemeProvider theme={theme}>
      <EmotionGlobal styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
};
