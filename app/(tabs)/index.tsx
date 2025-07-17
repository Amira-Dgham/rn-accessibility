import { Badge, ThemedText, ThemedView } from '@/components';
import { Card } from '@/components/ui';
import { ACCESSIBILITY_FEATURES, ACCESSIBILITY_LEVEL_CONFIG } from '@/constants/accessibility';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { AccessibilityLevel } from '@/types/accessibility';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const { t } = useLanguage();
  const { colors } = useTheme();

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      <View style={styles.header}>
        <ThemedText variant="h2" accessibilityRole="header">
          {t('screens.home.title')}
        </ThemedText>
        <ThemedText variant="body" color={colors.gray}>
          {t('screens.home.subtitle')}
        </ThemedText>
      </View>

      <View style={styles.paddingContainer}>
        <ThemedText variant="h4" accessibilityRole="header">
          {t('accessibility.complianceLevels')}
        </ThemedText>
        <View style={styles.levelGrid}>
          {Object.keys(ACCESSIBILITY_LEVEL_CONFIG).map((level) => (
            <Badge key={level} level={level as AccessibilityLevel} size="large" />
          ))}
        </View>
      </View>

      <View style={styles.paddingContainer}>
        <ThemedText accessibilityRole="header">{t('accessibility.features')}</ThemedText>
        {ACCESSIBILITY_FEATURES.map((feature, index) => (
          <Card
            title={t(`accessibility.feature.${feature.key}.title`)}
            description={t(`accessibility.feature.${feature.key}.description`)}
            index={index}
            icon={feature.icon}
            iconColor={feature.color}
            containerStyle={{ marginVertical: 8 }}
            accessibilityLabel={`${t(`accessibility.feature.${feature.key}.title`)}: ${t(`accessibility.feature.${feature.key}.description`)}`}
            onPress={() => {
              if (feature.title === 'Component Examples') {
                router.push('/components');
              } else if (feature.title === 'WCAG Compliance') {
                router.push('/guidelines');
              }
            }}
          />
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 24,
    alignItems: 'center',
  },
  levelGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  paddingContainer: {
    padding: 24,
    paddingTop: 0,
  },
});
