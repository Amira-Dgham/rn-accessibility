import { ACCESSIBILITY_LEVELS } from '@/constants/accessibility';
import { AccessibilityLevel } from '@/types/accessibility';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AccessibilityBadgeProps {
  level: AccessibilityLevel;
  size?: 'small' | 'medium' | 'large';
}

export default function AccessibilityBadge({ level, size = 'medium' }: AccessibilityBadgeProps) {
  const config = ACCESSIBILITY_LEVELS[level];

  return (
    <View
      style={[styles.badge, { backgroundColor: config.backgroundColor }, styles[size]]}
      accessibilityRole="text"
      accessibilityLabel={`Accessibility ${config.name}: ${config.description}`}
    >
      <Text style={[styles.text, { color: config.color }, styles[`${size}Text`]]}>
        {config.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  small: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  medium: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  large: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  smallText: {
    fontSize: 10,
  },
  mediumText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 14,
  },
});
