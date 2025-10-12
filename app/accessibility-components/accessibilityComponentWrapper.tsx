import { RouteProp, useRoute } from '@react-navigation/native';
import { Info } from 'lucide-react-native';
import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Badge, Card, ThemedText, ThemedView } from '@/components';
import LevelCard from '@/components/Card/LevelComponentCard';
import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';
import { AccessibilityLevel, ComponentRequirement } from '@/types/accessibility.types';

export type AccessibilityComponentWrapperProps = {};

/**
 * AccessibilityComponentWrapper
 *
 * This screen displays an individual accessibility component with:
 * - Component description and details
 * - Compliance level selection (A, AA, AAA)
 * - Requirements and examples for the selected level
 */
const AccessibilityComponentWrapper: FC<AccessibilityComponentWrapperProps> = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const route = useRoute<RouteProp<Record<string, { slug?: string }>, string>>();
  const slug = route.params?.slug;

  const [selectedLevel, setSelectedLevel] = useState<string>('A');

  const componentConfig = ACCESSIBILITY_COMPONENTS.find((comp) => comp.title === slug);

  // Set the screen header dynamically based on the component title
  useHeaderTitle(slug);

  if (!componentConfig) {
    return null; // Component not found, render nothing
  }

  const handleLevelPress = (level: string) => {
    const newLevel = level === selectedLevel ? 'none' : level;
    setSelectedLevel(newLevel);
  };

  const getSelectedLevelInfo = () => {
    if (!selectedLevel) return null;
    const level = levels.find((l) => l.key === selectedLevel);
    if (!level) return null;
    return {
      name: level.name,
      description: level.description,
    };
  };

  const getRequirementsForLevel = (level: string): ComponentRequirement[] => {
    if (!componentConfig?.requirements) return [];
    const requirements =
      componentConfig.requirements[level as keyof typeof componentConfig.requirements];
    if (!requirements) return [];
    return Object.entries(requirements).map(([id, textKey]) => ({
      id,
      text: t(textKey as string),
    }));
  };

  const selectedLevelInfo = getSelectedLevelInfo();
  const requirements = getRequirementsForLevel(selectedLevel);
  const examplesWithComponents = componentConfig.examples[selectedLevel];

  return (
    <ThemedView preset="scroll" safeAreaEdges={[]}>
      <Card
        title="Description"
        description={componentConfig?.description ? t(componentConfig.description) : ''}
        index={0}
        showChevron={false}
        icon={Info}
      />

      {/* Compliance Levels Section */}
      <View style={styles.section}>
        <ThemedText variant="h4" style={styles.sectionTitle}>
          {t('accessibility.complianceLevels')}
        </ThemedText>
        <View style={styles.levelGrid}>
          {levels.map((level) => (
            <Badge
              key={level.key}
              level={level.key as AccessibilityLevel}
              size="large"
              selected={selectedLevel === level.key}
              onPress={() => handleLevelPress(level.key)}
            />
          ))}
        </View>
      </View>

      {/* Selected Level Information */}
      {selectedLevelInfo && (
        <View style={styles.selectedLevelContainer}>
          <LevelCard
            level={selectedLevelInfo.name}
            description={selectedLevelInfo?.description || ''}
            requirements={requirements}
            childComponents={examplesWithComponents}
          />
        </View>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  levelGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  selectedLevelContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default AccessibilityComponentWrapper;