import { Card, ThemedText, ThemedView } from '@/components';
import { Href, router } from 'expo-router';
import React, { JSX } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '@/components/Header';
import { observer } from 'mobx-react-lite';
import { useLanguage } from '@/hooks/useLanguage';
import { usePreferences } from '@/hooks/usePreferences';

/**
 * SettingsScreen
 * Displays:
 * - List of preferences from the store
 * - Supports different preference types (switch, select, slider)
 * - Navigates to customization screens if applicable
 */
const SettingsScreen = observer((): JSX.Element => {
  const { t } = useLanguage();
  const { preferencesConfig, getSwitchValue, handleSwitchToggle } = usePreferences();

  /**
   * Returns extra props for the Card component depending on the preference type
   */
  const renderPreferenceControl = (preference: {
    key: string;
    type: 'switch' | 'select' | 'slider';
  }) => {
    switch (preference.type) {
      case 'switch':
        return {
          switch: {
            value: getSwitchValue(preference.key),
            onValueChange: (value: boolean) => handleSwitchToggle(preference.key, value),
            size: 'small' as const,
          },
        };
      case 'select':
      case 'slider':
      default:
        return {};
    }
  };

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* ---------- Header ---------- */}
      <Header title={t('screens.settings.title')} subtitle={t('screens.settings.subtitle')} />

      {/* ---------- Preferences Section ---------- */}
      <View style={styles.paddingContainer}>
        <ThemedText variant="h4">{t('accessibility.preferences.title')}</ThemedText>

        {preferencesConfig.map((preference, index) => (
          <Card
            key={preference.key}
            index={index}
            title={t(preference.title)}
            description={t(preference.description)}
            containerStyle={styles.cardContainer}
            {...renderPreferenceControl(preference)}
            onPress={() => {
              if (preference.route) {
                router.push(preference.route as Href);
              }
            }}
          />
        ))}
      </View>
    </ThemedView>
  );
});

export default SettingsScreen;

// -------------------
// Styles
// -------------------
const styles = StyleSheet.create({
  paddingContainer: {
    padding: 24,
    paddingTop: 0,
  },
  cardContainer: {
    marginVertical: 8,
  },
});
