import { ChevronRight, LucideIcon } from 'lucide-react-native';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import Switch, { SwitchProps } from '../ui/Switch';

import { useAppTheme } from '@/hooks/useAppTheme';
import { useGlobalStyles } from '@/hooks/useGlobalStyle';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ThemedText } from '../ThemedText';

// Badge configuration
interface Badge {
  text: string;
  color?: string;
  backgroundColor?: string;
}

// Card props interface
export interface CardProps {
  // Content
  title: string;
  subtitle?: string;
  description?: string;
  badge?: Badge;
  index: number;

  // Visual elements
  icon?: LucideIcon;

  // Interaction
  onPress?: () => void;
  disabled?: boolean;
  showChevron?: boolean;

  // Switch support
  switch?: SwitchProps;

  // Layout
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  index,
  badge,
  icon,
  onPress,
  disabled = false,
  showChevron = false,
  switch: switchProps,
  containerStyle,
  contentStyle,
}) => {
  const isInteractive = !!onPress && !disabled;
  const { colors } = useAppTheme();
  const globalStyle = useGlobalStyles();

  const getVariantStyles = () => {
    return {
      container: styles.defaultCard,
      iconContainer: [styles.iconContainer, { backgroundColor: colors.purpleBackground }],
      icon: { color: colors.purple },
    };
  };

  const variantStyles = getVariantStyles();

  const CardContent = () => (
    <View style={[globalStyle.card, variantStyles.container, containerStyle]}>
      {/* Icon Section */}
      {icon && (
        <View style={[styles.iconContainer, { backgroundColor: colors.purpleBackground }]}>
          {React.createElement(icon, { size: 24, color: colors.purple })}
        </View>
      )}

      {/* Content Section */}
      <View style={[styles.content, contentStyle]}>
        {/* Header with title and badge */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <ThemedText variant="bodyMedium" numberOfLines={2}>
              {title}
            </ThemedText>
            {badge && (
              <View style={[styles.badge, { backgroundColor: badge.backgroundColor }]}>
                <ThemedText style={[styles.badgeText, { color: badge.color }]}>
                  {badge.text}
                </ThemedText>
              </View>
            )}
          </View>
        </View>

        {/* Subtitle */}
        {subtitle && <ThemedText numberOfLines={1}>{subtitle}</ThemedText>}

        {/* Description */}
        {description && (
          <ThemedText variant="caption" color={colors.gray} numberOfLines={3}>
            {description}
          </ThemedText>
        )}
      </View>

      {/* Switch or Chevron */}
      {switchProps ? (
        <Switch {...switchProps} disabled={switchProps.disabled || disabled} />
      ) : showChevron || isInteractive ? (
        <ChevronRight size={16} color={colors.gray} />
      ) : null}
    </View>
  );

  // Render as TouchableOpacity if interactive, otherwise as View
  if (isInteractive) {
    return (
      <TouchableOpacity
        key={index}
        onPress={onPress}
        disabled={disabled}
        style={[styles.touchable, disabled && styles.disabled]}
      >
        <CardContent />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.touchable}>
      <CardContent />
    </View>
  );
};

export const Card = observer(CardComponent);

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 4,
  },

  // Variant styles
  defaultCard: {
    borderLeftWidth: 0,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Card;
