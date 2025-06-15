// @/theme/index.ts
import { Colors } from './colors';
import { FontFamilies, FontSizes, Typography } from './typography';

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
export type { TypographyKeys } from './typography';
export { Colors, FontFamilies, FontSizes, Typography };
