import { Card, ThemedText, ThemedView } from '@/components';
import { Href, router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import Header from '@/components/Header';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useLanguage } from '@/hooks/useLanguage';
import { usePreferences } from '@/hooks/usePreferences';

const SettingsScreen = observer(() => {
  // Get translation function
  const { t } = useLanguage();
  // Get preferences config and handlers from store
  const { preferencesConfig, getSwitchValue, handleSwitchToggle } = usePreferences();

  // Render the appropriate control for each preference type
  const renderPreferenceControl = (preference: any) => {
    switch (preference.type) {
      case 'switch':
        // For switch preferences, provide value and toggle handler
        return {
          switch: {
            value: getSwitchValue(preference.key),
            onValueChange: (value: boolean) => handleSwitchToggle(preference.key, value),
            size: 'small' as const,
          },
        };
      case 'select':
        // For select preferences, handled via navigation
        return {};
      case 'slider':
        // For slider preferences, handled via navigation
        return {};
      default:
        return {};
    }
  };

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* Header section with title and subtitle */}
      <Header title={t('screens.settings.title')} subtitle={t('screens.settings.subtitle')} />

      {/* Preferences list section */}
      <View style={styles.paddingContainer}>
        <ThemedText variant="h4">{t('accessibility.preferences.title')}</ThemedText>
        {/* Render a card for each preference */}
        {preferencesConfig.map((preference, index) => (
          <Card
            containerStyle={{ marginVertical: 8 }}
            key={preference.key}
            index={index}
            title={t(preference.title)}
            description={t(preference.description)}
            {...renderPreferenceControl(preference)}
            onPress={() => {
              // Navigate to customization screen if route is provided
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

// Styles for the SettingsScreen component
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
});
