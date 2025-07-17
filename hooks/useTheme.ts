import { Theme, type ColorScheme } from '@/theme';
import { useColorScheme } from './useColorScheme';

export function useTheme() {
  const colorScheme: ColorScheme = useColorScheme() ?? 'light';
  const theme = Theme[colorScheme];

  return {
    theme,
    colorScheme,
    colors: theme.colors,
    typography: theme.typography,
    fonts: theme.fonts,
    fontSizes: theme.fontSizes,
  };
}