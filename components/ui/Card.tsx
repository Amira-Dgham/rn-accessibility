import { ChevronRight, LucideIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

// Icon component interface (you can replace with your preferred icon library)
interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

// Card variant types
export type CardVariant = 'default' | 'accessibility' | 'settings' | 'interactive';

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
  iconColor?: string;
  iconBackgroundColor?: string;
  variant?: CardVariant;

  // Interaction
  onPress?: () => void;
  disabled?: boolean;
  showChevron?: boolean;

  // Layout
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;

  // Accessibility
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  index,
  badge,
  icon,
  iconColor,
  iconBackgroundColor,
  variant = 'default',
  onPress,
  disabled = false,
  showChevron = false,
  containerStyle,
  contentStyle,
  accessibilityLabel,
  accessibilityHint,
  testID,
}) => {
  const isInteractive = !!onPress && !disabled;

  const getVariantStyles = () => {
    switch (variant) {
      case 'accessibility':
        return {
          container: styles.accessibilityCard,
          iconContainer: [
            styles.iconContainer,
            { backgroundColor: iconBackgroundColor || '#E8F4FF' },
          ],
          icon: { color: iconColor || '#2196F3' },
        };
      case 'settings':
        return {
          container: styles.settingsCard,
          iconContainer: [
            styles.iconContainer,
            { backgroundColor: iconBackgroundColor || '#F5F5F5' },
          ],
          icon: { color: iconColor || '#666' },
        };
      case 'interactive':
        return {
          container: styles.interactiveCard,
          iconContainer: [
            styles.iconContainer,
            { backgroundColor: iconBackgroundColor || '#E8F8F0' },
          ],
          icon: { color: iconColor || '#4CAF50' },
        };
      default:
        return {
          container: styles.defaultCard,
          iconContainer: [
            styles.iconContainer,
            { backgroundColor: iconBackgroundColor || '#F0F0F0' },
          ],
          icon: { color: iconColor || '#666' },
        };
    }
  };

  const variantStyles = getVariantStyles();

  const CardContent = () => (
    <View style={[styles.card, variantStyles.container, containerStyle]}>
      {/* Icon Section */}
      {icon && (
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}15` }]}>
          {React.createElement(icon, { size: 24, color: iconColor })}
        </View>
      )}

      {/* Content Section */}
      <View style={[styles.content, contentStyle]}>
        {/* Header with title and badge */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            {badge && (
              <View style={[styles.badge, { backgroundColor: badge.backgroundColor || '#FFF3CD' }]}>
                <Text style={[styles.badgeText, { color: badge.color || '#856404' }]}>
                  {badge.text}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Subtitle */}
        {subtitle && (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        )}

        {/* Description */}
        {description && (
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        )}
      </View>

      {/* Chevron for interactive cards */}
      {(showChevron || isInteractive) && <ChevronRight size={16} color="#999" />}
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
        accessibilityLabel={accessibilityLabel || title}
        accessibilityHint={accessibilityHint}
        accessibilityRole="button"
        testID={testID}
      >
        <CardContent />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.touchable} accessibilityLabel={accessibilityLabel || title} testID={testID}>
      <CardContent />
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 4,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  // Variant styles
  defaultCard: {
    borderLeftWidth: 0,
  },
  accessibilityCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  settingsCard: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  interactiveCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconPlaceholder: {
    borderRadius: 2,
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
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    lineHeight: 22,
    marginRight: 8,
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
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
    marginBottom: 4,
    lineHeight: 18,
  },
  description: {
    fontSize: 14,
    color: '#999999',
    lineHeight: 20,
  },
  chevronContainer: {
    justifyContent: 'center',
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Card;
