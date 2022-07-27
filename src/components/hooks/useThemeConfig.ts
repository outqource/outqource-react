import React, { useMemo } from 'react';
import { useTheme, css } from '@emotion/react';
import { CustomTheme } from '../lib/Emotion/ThemeProvider';

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode | undefined;
  themeCSS?: string;
  [key: string]: any;
}

interface ThemeConfigProps {
  [key: string]: string | boolean | keyof JSX.IntrinsicElements | React.ReactNode;
  component: string;
}

const useThemeConfig = ({ component, ...props }: ThemeConfigProps): string => {
  // 테마에 해당하는 태그 없으면 무시
  const theme: CustomTheme = useTheme();

  const serializeStyle = useMemo(() => {
    if (!theme[component]) return '';

    const componentKeys = Object.keys(theme[component]);
    const propsKeys = Object.keys(props);

    const foundedList: string[] = [];
    componentKeys.forEach((component: string) => {
      if (propsKeys.includes(component)) foundedList.push(component);
    });

    if (foundedList.length === 0) return '';

    let serializeStyle: string | undefined = undefined;
    foundedList.forEach(founded => {
      if (!serializeStyle) {
        const style = theme[component][founded];
        serializeStyle = css(style)?.styles || '';
      }
    });

    return serializeStyle;
  }, [props]);

  return serializeStyle || '';
};

export default useThemeConfig;
