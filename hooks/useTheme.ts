// @/hooks/useTheme.ts
import { Theme, type ColorScheme, type ThemeType } from '@/theme';
import { useColorScheme } from './useColorScheme.web';

export function useTheme() {
  const colorScheme: ColorScheme = useColorScheme() ?? 'light';
  const theme: ThemeType = Theme[colorScheme];

  return {
    theme,
    colorScheme,
    colors: theme.colors,
    typography: theme.typography,
    fonts: theme.fonts,
    fontSizes: theme.fontSizes,
  };
}
