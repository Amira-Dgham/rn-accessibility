import { Colors, type ColorKeys } from './colors';
import { BaseFontSizes, createFontSizes, createTypography, FontFamilies, type TypographyKeys } from './typography';

// Function to create theme with dynamic typography
export const createTheme = (userFontSize: number) => {
  const fontSizes = createFontSizes(userFontSize);
  const typography = createTypography(fontSizes);

  return {
    light: {
      colors: Colors.light,
      typography,
      fonts: FontFamilies,
      fontSizes,
    },
    dark: {
      colors: Colors.dark,
      typography,
      fonts: FontFamilies,
      fontSizes,
    },
  } as const;
};

// Default theme (for backwards compatibility)
export const Theme = createTheme(BaseFontSizes.base);

export type ThemeType = typeof Theme.light;
export type ColorScheme = keyof typeof Theme;

// Re-export everything for convenience
export { CustomDarkTheme, CustomLightTheme } from './navigationTheme';
export { BaseFontSizes, Colors, createFontSizes, createTypography, FontFamilies };
export type { ColorKeys, TypographyKeys };

