import { Badge, ThemedText, ThemedView } from '@/components';
import { Card } from '@/components/ui';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { router } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const HomeScreen = observer(() => {
  const { t } = useLanguage();
  const { colors } = useTheme();
  const { levels, features } = useAccessibility();
  console.log(levels);
  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText variant="h2">{t('screens.home.title')}</ThemedText>
        <ThemedText variant="body" color={colors.gray}>
          {t('screens.home.subtitle')}
        </ThemedText>
      </View>

      {/* Compliance Levels */}
      <View style={styles.paddingContainer}>
        <ThemedText variant="h4">{t('accessibility.complianceLevels')}</ThemedText>
        <View style={styles.levelGrid}>
          {levels.map((level) => (
            <Badge key={level.key} level={level.key} size="large" />
          ))}
        </View>
      </View>

      {/* Features */}
      <View style={styles.paddingContainer}>
        <ThemedText variant="h4">{t('accessibility.features')}</ThemedText>
        {features.map((feature, index) => (
          <Card
            containerStyle={{ marginVertical: 8 }}
            key={feature.key}
            index={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
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

const styles = StyleSheet.create({
  header: {
    padding: 24,
    alignItems: 'center',
  },
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
});
