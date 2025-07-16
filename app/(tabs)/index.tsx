import AccessibilityBadge from '@/components/Badge';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Card from '@/components/ui/Card';
import { ACCESSIBILITY_FEATURES, ACCESSIBILITY_LEVEL_CONFIG } from '@/constants/accessibility';
import { useLanguage } from '@/hooks/useLanguage';
import { AccessibilityLevel } from '@/types/accessibility';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const { t } = useLanguage();

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      <View style={styles.header}>
        <ThemedText accessibilityRole="header">{t('screens.home.title')}</ThemedText>
        <ThemedText style={styles.subtitle}>{t('screens.home.subtitle')}</ThemedText>
      </View>

      <View style={styles.levelContainer}>
        <ThemedText style={styles.sectionTitle} accessibilityRole="header">
          {t('accessibility.complianceLevels')}
        </ThemedText>
        <View style={styles.levelGrid}>
          {Object.keys(ACCESSIBILITY_LEVEL_CONFIG).map((level) => (
            <AccessibilityBadge key={level} level={level as AccessibilityLevel} size="large" />
          ))}
        </View>
      </View>

      <View style={styles.featuresContainer}>
        <ThemedText style={styles.sectionTitle} accessibilityRole="header">
          {t('accessibility.features')}
        </ThemedText>
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
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  levelContainer: {
    padding: 24,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  levelGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  featuresContainer: {
    padding: 24,
    paddingTop: 0,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    lineHeight: 20,
  },
});
