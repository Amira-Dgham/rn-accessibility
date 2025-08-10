import { StyleSheet, View } from 'react-native';

import { ComponentRequirement } from '@/types/accessibility.types';
import React from 'react';
import { ThemedText } from '../ThemedText';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';

export interface LevelCardProps {
  level: string;
  description: string;
  requirements?: ComponentRequirement[];
  childComponents?: React.ReactNode;
}

const LevelCard: React.FC<LevelCardProps> = ({
  level,
  description,
  requirements = [],
  childComponents,
}) => {
  const { colors } = useTheme();
  const { t } = useLanguage();

  const renderRequirements = () => {
    if (requirements.length === 0) return null;
    return (
      <View style={styles.section}>
        <ThemedText variant="bodyMedium">{t('accessibility.components.requirements')}:</ThemedText>
        {requirements.map((requirement) => (
          <View key={requirement.id} style={styles.requirementItem}>
            <View style={[styles.requirementDot, { backgroundColor: colors.green }]} />
            <ThemedText>{requirement.text}</ThemedText>
          </View>
        ))}
      </View>
    );
  };

  const renderChildComponents = () => {
    return (
      <>
        <ThemedText variant="bodyMedium">{t('accessibility.components.examples')}:</ThemedText>
        {/* Render UI Component if provided */}
        {childComponents && <>{childComponents}</>}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: colors.purple }]}>
          <ThemedText style={{ color: colors.purpleBackground }}>{String(level || '')}</ThemedText>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <ThemedText variant="bodyMedium">{String(description || '')}</ThemedText>

          {renderRequirements()}
          {renderChildComponents()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
    borderWidth: 0.2,
    borderEndStartRadius: 12,
    borderEndEndRadius: 12,
  },
  section: {
    marginTop: 8,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingVertical: 4,
  },
  requirementDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
    marginRight: 12,
    flexShrink: 0,
  },
  componentContainer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingTop: 8,
  },
});

export default LevelCard;
