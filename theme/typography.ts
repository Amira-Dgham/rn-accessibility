import { TextStyle } from 'react-native';

export const FontFamilies = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
} as const;

export const BaseFontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
} as const;

export const LineHeights = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.625,
} as const;

// Function to create scaled font sizes based on user preference
export const createFontSizes = (userFontSize: number) => {
  const scaleFactor = userFontSize / BaseFontSizes.base;

  return {
    xs: Math.round(BaseFontSizes.xs * scaleFactor),
    sm: Math.round(BaseFontSizes.sm * scaleFactor),
    base: userFontSize,
    lg: Math.round(BaseFontSizes.lg * scaleFactor),
    xl: Math.round(BaseFontSizes.xl * scaleFactor),
    '2xl': Math.round(BaseFontSizes['2xl'] * scaleFactor),
    '3xl': Math.round(BaseFontSizes['3xl'] * scaleFactor),
    '4xl': Math.round(BaseFontSizes['4xl'] * scaleFactor),
  };
};

// Function to create typography styles based on scaled font sizes
export const createTypography = (fontSizes: ReturnType<typeof createFontSizes>) =>
  ({
    // Headings
    h1: {
      fontSize: fontSizes['4xl'],
      fontFamily: FontFamilies.bold,
      fontWeight: '700' as const,
      lineHeight: fontSizes['4xl'] * LineHeights.tight,
    } as TextStyle,

    h2: {
      fontSize: fontSizes['3xl'],
      fontFamily: FontFamilies.bold,
      fontWeight: '700' as const,
      lineHeight: fontSizes['3xl'] * LineHeights.tight,
    } as TextStyle,

    h3: {
      fontSize: fontSizes['2xl'],
      fontFamily: FontFamilies.semiBold,
      fontWeight: '600' as const,
      lineHeight: fontSizes['2xl'] * LineHeights.tight,
    } as TextStyle,

    h4: {
      fontSize: fontSizes.xl,
      fontFamily: FontFamilies.semiBold,
      fontWeight: '600' as const,
      lineHeight: fontSizes.xl * LineHeights.normal,
    } as TextStyle,

    // Body text
    body: {
      fontSize: fontSizes.base,
      fontFamily: FontFamilies.regular,
      fontWeight: '400' as const,
      lineHeight: fontSizes.base * LineHeights.normal,
    } as TextStyle,

    bodyMedium: {
      fontSize: fontSizes.base,
      fontFamily: FontFamilies.medium,
      fontWeight: '500' as const,
      lineHeight: fontSizes.base * LineHeights.normal,
    } as TextStyle,

    // Small text
    caption: {
      fontSize: fontSizes.sm,
      fontFamily: FontFamilies.regular,
      fontWeight: '400' as const,
      lineHeight: fontSizes.sm * LineHeights.normal,
    } as TextStyle,

    // Tab bar
    tabBar: {
      fontSize: fontSizes.xs,
      fontFamily: FontFamilies.semiBold,
      fontWeight: '600' as const,
      lineHeight: fontSizes.xs * LineHeights.normal,
    } as TextStyle,
  }) as const;

// Default typography (for backwards compatibility)
export const Typography = createTypography(createFontSizes(BaseFontSizes.base));

export type TypographyKeys = keyof ReturnType<typeof createTypography>;
