import { BADGE_SIZES } from '@/constants/badge';
import { useAppTheme } from '@/hooks/useAppTheme';
import { AccessibilityLevel, BadgeSize } from '@/types/accessibility.types';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface AccessibilityBadgeProps {
  level: AccessibilityLevel;
  size?: BadgeSize;
  onPress?: () => void;
  selected?: boolean;
}

export const Badge = observer<AccessibilityBadgeProps>(
  ({ level, size = 'medium', onPress, selected = false }) => {
    const styles = createStyles(size);
    const { colors } = useAppTheme();

    const badgeStyle = [
      styles.badge,
      {
        backgroundColor: selected ? colors.purple : colors.purpleBackground,
      },
    ];

    const textStyle = [
      styles.text,
      {
        color: selected ? colors.background : colors.purple,
      },
    ];

    const ViewComponent = onPress
      ? (props: any) => <View {...props} key={level} onTouchEnd={onPress} />
      : View;

    return (
      <ViewComponent style={badgeStyle}>
        <ThemedText style={textStyle}>{level}</ThemedText>
      </ViewComponent>
    );
  },
);

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
