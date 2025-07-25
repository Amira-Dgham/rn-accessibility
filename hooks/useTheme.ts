import { createTheme, type ColorScheme } from '@/theme';
import { useMemo } from 'react';
import { useColorScheme } from './useColorScheme';
import { usePreferences } from './usePreferences';

export const useTheme = () => {
  const colorScheme: ColorScheme = useColorScheme() ?? 'light';
  const { fontSize, customTextColor, customBackgroundColor } = usePreferences();

  // Use useMemo with proper dependencies to recalculate when fontSize or custom colors change
  const theme = useMemo(() => {
    const dynamicTheme = createTheme(fontSize);
    // Clone the theme to override colors
    const themeWithCustomColors = {
      ...dynamicTheme[colorScheme],
      colors: {
        ...dynamicTheme[colorScheme].colors,
        text: customTextColor || dynamicTheme[colorScheme].colors.text,
        background: customBackgroundColor || dynamicTheme[colorScheme].colors.background,
      },
    };
    return themeWithCustomColors;
  }, [fontSize, colorScheme, customTextColor, customBackgroundColor]);

  return {
    theme,
    colorScheme,
    colors: theme.colors,
    typography: theme.typography,
    fonts: theme.fonts,
    fontSizes: theme.fontSizes,
  };
};
