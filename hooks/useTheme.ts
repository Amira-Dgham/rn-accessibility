import { createTheme, type ColorScheme } from '@/theme';
import { useMemo } from 'react';
import { useColorScheme } from './useColorScheme';
import { usePreferences } from './usePreferences';

export const useTheme = () => {
  const colorScheme: ColorScheme = useColorScheme() ?? 'light';
  const { fontSize } = usePreferences();

  // Use useMemo with proper dependencies to recalculate when fontSize changes
  const theme = useMemo(() => {
    const dynamicTheme = createTheme(fontSize);
    return dynamicTheme[colorScheme];
  }, [fontSize, colorScheme]); // Add fontSize as dependency

  return {
    theme,
    colorScheme,
    colors: theme.colors,
    typography: theme.typography,
    fonts: theme.fonts,
    fontSizes: theme.fontSizes,
  };
};