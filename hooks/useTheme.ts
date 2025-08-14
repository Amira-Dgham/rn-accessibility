import { createTheme, type ColorScheme, type ThemeType } from '@/theme';
import { useMemo } from 'react';
import { useColorScheme } from './useColorScheme';
import { usePreferences } from './usePreferences';

type UseThemeReturn = {
  theme: ThemeType;
  colorScheme: ColorScheme;
  colors: ThemeType['colors'];
  typography: ThemeType['typography'];
  fonts: ThemeType['fonts'];
  fontSizes: ThemeType['fontSizes'];
};

export const useTheme = (): UseThemeReturn => {
  const colorScheme: ColorScheme = useColorScheme() ?? 'light';
  const { fontSize, customTextColor, customBackgroundColor } = usePreferences();

  const theme = useMemo<ThemeType>(() => {
    const dynamicTheme = createTheme(fontSize);
    return dynamicTheme[colorScheme];
  }, [fontSize, colorScheme]);

  return {
    theme,
    colorScheme,
    colors: theme.colors,
    typography: theme.typography,
    fonts: theme.fonts,
    fontSizes: theme.fontSizes,
  };
};
