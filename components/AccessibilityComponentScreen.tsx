import { AccessibilityLevel, ComponentRequirement } from '@/types/accessibility.types';
import { Badge, Card, ThemedText, ThemedView } from '@/components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ChildComponentProps } from '@/types/ui.types';
import { Info } from 'lucide-react-native';
import LevelCard from '@/components/Card/LevelComponentCard';

interface Props {
    componentConfig: any; // type this based on your ACCESSIBILITY_COMPONENTS
    levels: Array<{ key: string; name: string; description: string }>;
    t: (key: string) => string;
    examplesWithComponents: ChildComponentProps[];
    icon?: React.ElementType;
}

const AccessibilityComponentScreen: React.FC<Props> = ({
    componentConfig,
    levels,
    t,
    examplesWithComponents,
    icon = Info,
}) => {
    const [selectedLevel, setSelectedLevel] = useState<string>('A');

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

    const getRequirementsForLevel = (level: string): ComponentRequirement[] => {
        if (!componentConfig?.requirements) return [];
        const requirements = componentConfig.requirements[level as keyof typeof componentConfig.requirements];
        if (!requirements) return [];
        return Object.entries(requirements).map(([id, textKey]) => ({
            id,
            text: t(textKey as string),
        }));
    };

    const selectedLevelInfo = getSelectedLevelInfo();
    const requirements = getRequirementsForLevel(selectedLevel);

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
    levelDetails: {
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    boldText: {
        fontWeight: 'bold',
    },
});


export default AccessibilityComponentScreen;