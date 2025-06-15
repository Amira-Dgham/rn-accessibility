import { TextStyle } from 'react-native';

export const FontFamilies = {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
} as const;

export const FontSizes = {
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

export const Typography = {
    // Headings
    h1: {
        fontSize: FontSizes['4xl'],
        fontFamily: FontFamilies.bold,
        fontWeight: '700' as const,
        lineHeight: FontSizes['4xl'] * LineHeights.tight,
    } as TextStyle,

    h2: {
        fontSize: FontSizes['3xl'],
        fontFamily: FontFamilies.bold,
        fontWeight: '700' as const,
        lineHeight: FontSizes['3xl'] * LineHeights.tight,
    } as TextStyle,

    h3: {
        fontSize: FontSizes['2xl'],
        fontFamily: FontFamilies.semiBold,
        fontWeight: '600' as const,
        lineHeight: FontSizes['2xl'] * LineHeights.tight,
    } as TextStyle,

    h4: {
        fontSize: FontSizes.xl,
        fontFamily: FontFamilies.semiBold,
        fontWeight: '600' as const,
        lineHeight: FontSizes.xl * LineHeights.normal,
    } as TextStyle,

    // Body text
    body: {
        fontSize: FontSizes.base,
        fontFamily: FontFamilies.regular,
        fontWeight: '400' as const,
        lineHeight: FontSizes.base * LineHeights.normal,
    } as TextStyle,

    bodyMedium: {
        fontSize: FontSizes.base,
        fontFamily: FontFamilies.medium,
        fontWeight: '500' as const,
        lineHeight: FontSizes.base * LineHeights.normal,
    } as TextStyle,

    // Small text
    caption: {
        fontSize: FontSizes.sm,
        fontFamily: FontFamilies.regular,
        fontWeight: '400' as const,
        lineHeight: FontSizes.sm * LineHeights.normal,
    } as TextStyle,

    // Tab bar
    tabBar: {
        fontSize: FontSizes.xs,
        fontFamily: FontFamilies.semiBold,
        fontWeight: '600' as const,
        lineHeight: FontSizes.xs * LineHeights.normal,
    } as TextStyle,
} as const;

export type TypographyKeys = keyof typeof Typography;