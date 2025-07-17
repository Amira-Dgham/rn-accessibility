import { ACCESSIBILITY_LEVEL_CONFIG } from '@/constants';
import { BadgeSize } from '@/types/accessibility';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { BADGE_SIZES } from '@/constants/badge';
import { useTheme } from '@/hooks/useTheme';
import { AccessibilityLevel } from '@/types/accessibility';
import { ThemedText } from './ThemedText';

interface AccessibilityBadgeProps {
  level: AccessibilityLevel;
  size?: BadgeSize;
  onPress?: () => void;
}

export const Badge: React.FC<AccessibilityBadgeProps> = ({ level, size = 'medium', onPress }) => {
  const config = ACCESSIBILITY_LEVEL_CONFIG[level];
  const styles = createStyles(size);
  const { colors } = useTheme();

  const badgeStyle = [styles.badge, { backgroundColor: colors.purpleBackground }];

  const textStyle = [styles.text, { color: colors.purpleText }];

  const accessibilityProps = {
    accessibilityRole: 'text' as const,
    accessibilityLabel: `Accessibility ${config.name}: ${config.description}`,
    ...(onPress && {
      accessibilityRole: 'button' as const,
      accessibilityHint: 'Tap for more information about this accessibility level',
    }),
  };

  const ViewComponent = onPress
    ? (props: any) => <View {...props} key={level} onTouchEnd={onPress} />
    : View;

  return (
    <ViewComponent style={badgeStyle} {...accessibilityProps}>
      <ThemedText style={textStyle}>{config.name}</ThemedText>
    </ViewComponent>
  );
};

export const createStyles = (size: BadgeSize) => {
  const sizeConfig = BADGE_SIZES[size];

  return StyleSheet.create({
    badge: {
      borderRadius: 12,
      paddingHorizontal: sizeConfig.padding,
      paddingVertical: sizeConfig.paddingVertical,
      alignSelf: 'flex-start',
      minWidth: 60,
    },
    text: {
      textAlign: 'center' as const,
      fontSize: sizeConfig.fontSize,
    },
  });
};
