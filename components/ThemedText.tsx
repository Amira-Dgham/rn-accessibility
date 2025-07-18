import { ACCESSIBILITY_LEVEL_BASE_CONFIG } from '@/constants';
import { useTheme } from '@/hooks/useTheme';
import { TypographyKeys } from '@/theme';
import { AccessibilityLevel } from '@/types/accessibility';
import { getContrastRatio, meetsAccessibilityLevel } from '@/utils/accessibilityChecker';
import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

// Extended TextProps interface
export interface CustomTextProps extends Omit<RNTextProps, 'style'> {
  variant?: TypographyKeys;
  color?: string;
  backgroundColor?: string;
  accessibilityLevel?: AccessibilityLevel;
  style?: TextStyle | TextStyle[];
  testID?: string;
}

export const ThemedText: React.FC<CustomTextProps> = ({
  variant = 'body',
  color,
  backgroundColor,
  accessibilityLevel = AccessibilityLevel.AAA,
  style,
  children,
  testID,
  ...props
}) => {
  const { theme, colors } = useTheme();
  // Get typography styles from theme
  const typographyStyle = theme.typography[variant];

  // Use theme colors as defaults
  const textColor = color || colors.text;
  const bgColor = backgroundColor || colors.background;

  // Check accessibility compliance
  const isAccessible = meetsAccessibilityLevel(
    textColor,
    bgColor,
    accessibilityLevel,
    typographyStyle.fontSize ?? 14,
  );

  // Log warning in development if accessibility requirements aren't met
  if (__DEV__ && !isAccessible && accessibilityLevel !== AccessibilityLevel.NONE) {
    const contrastRatio = getContrastRatio(textColor, bgColor);
    console.warn(
      `Text accessibility warning: Contrast ratio ${contrastRatio.toFixed(2)} does not meet ${accessibilityLevel} standards for variant "${variant}". ` +
        `Required: ${ACCESSIBILITY_LEVEL_BASE_CONFIG[accessibilityLevel].contrastRatio}, Current: ${contrastRatio.toFixed(2)}`,
    );
  }

  // Combine styles
  const combinedStyle: TextStyle = {
    ...typographyStyle,
    color: textColor,
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  };

  return (
    <RNText
      style={combinedStyle}
      testID={testID || `text-${variant}`}
      accessible={true}
      accessibilityRole="text"
      {...props}
    >
      {children}
    </RNText>
  );
};
