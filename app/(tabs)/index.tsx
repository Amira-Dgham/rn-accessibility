import { Badge, Card, ThemedText, ThemedView } from '@/components';
import React, { JSX } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '@/components/Header';
import { observer } from 'mobx-react-lite';
import { router } from 'expo-router';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

/**
 * HomeScreen
 * Displays:
 * - Accessibility compliance levels
 * - List of available accessibility features
 */
const HomeScreen = observer((): JSX.Element => {
  const { t } = useLanguage();
  const { levels, features } = useAccessibility();

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* ---------- Header ---------- */}
      <Header title={t('screens.home.title')} subtitle={t('screens.home.subtitle')} />

      {/* ---------- Compliance Levels Section ---------- */}
      <View style={styles.paddingContainer}>
        <ThemedText variant="h4">{t('accessibility.complianceLevels')}</ThemedText>
        <View style={styles.levelGrid}>
          {levels.map((level) => (
            <Badge key={level.key} level={level.key} size="large" />
          ))}
        </View>
      </View>

      {/* ---------- Features Section ---------- */}
      <View style={styles.paddingContainer}>
        <ThemedText variant="h4">{t('accessibility.features')}</ThemedText>
        {features.map((feature, index) => (
          <Card
            key={feature.key}
            index={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            containerStyle={styles.cardContainer}
            onPress={() => {
              if (feature.route) {
                router.push(feature.route);
              }
            }}
          />
        ))}
      </View>
    </ThemedView>
  );
});

export default HomeScreen;

// -------------------
// Styles
// -------------------
const styles = StyleSheet.create({
  levelGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  paddingContainer: {
    padding: 24,
    paddingTop: 0,
  },
  cardContainer: {
    marginVertical: 8,
  },
});
