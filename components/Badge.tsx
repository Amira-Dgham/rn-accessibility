import { ACCESSIBILITY_LEVEL_CONFIG } from '@/constants';
import { BadgeSize } from '@/types/accessibility';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AccessibilityLevel } from '@/types/accessibility';

interface AccessibilityBadgeProps {
  level: AccessibilityLevel;
  size?: BadgeSize;
  onPress?: () => void;
}

const BADGE_SIZES = {
  small: { padding: 6, paddingVertical: 2, fontSize: 10 },
  medium: { padding: 8, paddingVertical: 4, fontSize: 12 },
  large: { padding: 12, paddingVertical: 6, fontSize: 14 },
} as const;

export const createStyles = (size: BadgeSize) => {
  const sizeConfig = BADGE_SIZES[size];

  return StyleSheet.create({
    badge: {
      borderRadius: 12,
      paddingHorizontal: sizeConfig.padding,
      paddingVertical: sizeConfig.paddingVertical,
      alignSelf: 'flex-start',
    },
    text: {
      fontWeight: '600' as const,
      textAlign: 'center' as const,
      fontSize: sizeConfig.fontSize,
    },
  });
};

export const AccessibilityBadge: React.FC<AccessibilityBadgeProps> = ({
  level,
  size = 'medium',
  onPress,
}) => {
  const config = ACCESSIBILITY_LEVEL_CONFIG[level];
  const styles = createStyles(size);

  const badgeStyle = [styles.badge, { backgroundColor: config.backgroundColor }];

  const textStyle = [styles.text, { color: config.color }];

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
      <Text style={textStyle}>{config.name}</Text>
    </ViewComponent>
  );
};

export default AccessibilityBadge;
