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
    const themeWithCustomColors = {
      ...dynamicTheme[colorScheme],
      colors: {
        ...dynamicTheme[colorScheme].colors,
        ...(customBackgroundColor ? { background: customBackgroundColor } : {}),
        ...(customTextColor ? { text: customTextColor } : {}),
      },
    };
    return themeWithCustomColors;
  }, [fontSize, colorScheme, customBackgroundColor, customTextColor]);

  return {
    theme,
    colorScheme,
    colors: theme.colors,
    typography: theme.typography,
    fonts: theme.fonts,
    fontSizes: theme.fontSizes,
  };
};
