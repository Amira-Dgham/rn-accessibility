import { Card, ThemedView } from '@/components';
import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import { Badge } from '@/components/Badge';
import { ChildComponentProps } from '@/types/ui.types';
import { ComponentRequirement } from '@/types/accessibility.types';
import { Info } from 'lucide-react-native';
import LevelCard from '@/components/Card/LevelComponentCard';
import { ThemedText } from '@/components/ThemedText';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';

const Accordions: FC = () => {
  useHeaderTitle();
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const [selectedLevel, setSelectedLevel] = useState<string>('none');

  const handleLevelPress = (level: string) => {
    setSelectedLevel(level === selectedLevel ? 'none' : level);
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

  const selectedLevelInfo = getSelectedLevelInfo();

  // Get accordion component data from ACCESSIBILITY_COMPONENTS
  const accordionComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/accordions',
  );

  // Get requirements for the selected level
  const getRequirementsForLevel = (level: string): ComponentRequirement[] => {
    if (!accordionComponent?.requirements) return [];

    const requirements = accordionComponent.requirements[level as keyof typeof accordionComponent.requirements];
    if (!requirements) return [];

    return Object.entries(requirements).map(([id, textKey]) => ({
      id,
      text: t(textKey as string),
    }));
  };

  const requirements = getRequirementsForLevel(selectedLevel);

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Interactive Button',
      description: 'A pressable button with visual feedback and accessibility',
      component: <ThemedText> hello </ThemedText>,
    },
  ];

  return (
    <ThemedView preset="scroll" safeAreaEdges={[]}>
      <Card
        title="Description"
        description={accordionComponent?.description ? t(accordionComponent.description) : 'Accordions are collapsible content sections that help organize information hierarchically.'}
        index={0}
        icon={Info}
        showChevron={false}
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
              level={level.key}
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

export default Accordions;

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
  levelDetails: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
