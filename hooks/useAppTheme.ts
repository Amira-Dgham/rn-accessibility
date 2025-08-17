import { Colors, ThemeType } from '@/theme';
import { usePreferences } from './usePreferences';
import { useTheme } from './useTheme';

type UseAppThemeReturn = {
  colors: ThemeType['colors'];
  typography: ThemeType['typography'];
  isDarkMode: boolean;
  getThemedColor: (lightColor: string, darkColor: string) => string;
  getColorForScheme: (colorKey: keyof typeof Colors.light) => string;
};

export const useAppTheme = (): UseAppThemeReturn => {
  const { isDarkMode } = usePreferences();
  const { colors, typography } = useTheme();

  return {
    colors,
    typography,
    isDarkMode,
    // Helper function to get the correct color based on current theme
    getThemedColor: (lightColor: string, darkColor: string) =>
      isDarkMode ? darkColor : lightColor,
    // Helper function to get a color from the theme's color palette
    getColorForScheme: (colorKey: keyof typeof Colors.light) =>
      isDarkMode ? Colors.dark[colorKey] : Colors.light[colorKey],
  };
};
