import AccessibilityBadge from '@/Badge';
import {
  CircleAlert as AlertCircle,
  CircleCheck as CheckCircle,
  ChevronRight,
} from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface BaseCardProps {
  title: string;
  description?: string;
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  style?: ViewStyle;
}

export interface FeatureCardProps extends BaseCardProps {
  variant: 'feature';
  icon: React.ComponentType<{ size: number; color: string }>;
  color: string;
}

export interface ComponentCardProps extends BaseCardProps {
  variant: 'component';
  implemented?: boolean;
  level?: 'A' | 'AA' | 'AAA';
  requirements?: string[];
  badge?: React.ReactNode;
}

export interface InfoCardProps extends BaseCardProps {
  variant: 'info';
  content: string;
}

export type UniversalCardProps = FeatureCardProps | ComponentCardProps | InfoCardProps;

export default function UniversalCard(props: UniversalCardProps) {
  const { title, description, onPress, accessibilityLabel, accessibilityHint, style } = props;

  // Render feature card variant
  const renderFeatureCard = (props: FeatureCardProps) => (
    <TouchableOpacity
      style={[styles.card, styles.featureCard, style]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || `${title}: ${description}`}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
    >
      <View style={[styles.iconContainer, { backgroundColor: `${props.color}15` }]}>
        <props.icon size={24} color={props.color} />
      </View>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        {description && <Text style={styles.featureDescription}>{description}</Text>}
      </View>
      <ChevronRight size={20} color="#6b7280" />
    </TouchableOpacity>
  );

  // Render component card variant
  const renderComponentCard = (props: ComponentCardProps) => (
    <TouchableOpacity
      style={[styles.card, styles.componentCard, style]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={
        accessibilityLabel ||
        `${title}. ${description}. ${props.implemented ? 'Implemented' : 'Not implemented'}`
      }
      accessibilityHint={accessibilityHint || 'Tap to view component details and examples'}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.componentTitle}>{title}</Text>
          {props.level && <AccessibilityBadge level={props.level} size="small" />}
          {props.badge}
        </View>
        <View style={styles.statusContainer}>
          {props.implemented !== undefined && (
            <>
              {props.implemented ? (
                <CheckCircle size={20} color="#059669" />
              ) : (
                <AlertCircle size={20} color="#dc2626" />
              )}
            </>
          )}
          {onPress && <ChevronRight size={20} color="#6b7280" />}
        </View>
      </View>

      {description && <Text style={styles.componentDescription}>{description}</Text>}

      {props.requirements && props.requirements.length > 0 && (
        <View style={styles.requirements}>
          <Text style={styles.requirementsTitle}>Key Requirements:</Text>
          {props.requirements.slice(0, 2).map((req, index) => (
            <Text key={index} style={styles.requirement}>
              • {req}
            </Text>
          ))}
          {props.requirements.length > 2 && (
            <Text style={styles.moreRequirements}>+{props.requirements.length - 2} more</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );

  // Render info card variant
  const renderInfoCard = (props: InfoCardProps) => (
    <View style={[styles.card, styles.infoCard, style]}>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoText}>{props.content}</Text>
    </View>
  );

  // Return appropriate variant
  switch (props.variant) {
    case 'feature':
      return renderFeatureCard(props as FeatureCardProps);
    case 'component':
      return renderComponentCard(props as ComponentCardProps);
    case 'info':
      return renderInfoCard(props as InfoCardProps);
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  // Base card styles
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginVertical: 6,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  // Feature card styles
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },

  // Component card styles
  componentCard: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  componentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  componentDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  requirements: {
    gap: 4,
  },
  requirementsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  requirement: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 16,
  },
  moreRequirements: {
    fontSize: 12,
    color: '#9ca3af',
    fontStyle: 'italic',
  },

  // Info card styles
  infoCard: {
    padding: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 22,
  },

  // Badge styles
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeSmall: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  badgeTextSmall: {
    fontSize: 10,
  },
});
