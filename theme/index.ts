import { Colors, type ColorKeys } from './colors';
import { FontFamilies, FontSizes, Typography, type TypographyKeys } from './typography';

export const Theme = {
  light: {
    colors: Colors.light,
    typography: Typography,
    fonts: FontFamilies,
    fontSizes: FontSizes,
  },
  dark: {
    colors: Colors.dark,
    typography: Typography,
    fonts: FontFamilies,
    fontSizes: FontSizes,
  },
} as const;

export type ThemeType = typeof Theme.light;
export type ColorScheme = keyof typeof Theme;

// Re-export everything for convenience
export { CustomDarkTheme, CustomLightTheme } from './navigationTheme';
export { Colors, FontFamilies, FontSizes, Typography };
export type { ColorKeys, TypographyKeys };
