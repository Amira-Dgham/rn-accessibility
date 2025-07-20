import { ThemedText, ThemedView } from '@/components';
import Header from '@/components/Header';
import { Card } from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { usePreferences } from '@/hooks/usePreferences';
import { Href, router } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const SettingsScreen = observer(() => {
  const { t } = useLanguage();
  const { preferencesConfig, getSwitchValue, handleSwitchToggle } = usePreferences();

  // Function to render the appropriate control based on preference type
  const renderPreferenceControl = (preference: any) => {
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
        return {};
      case 'slider':
        return {};
      default:
        return {};
    }
  };

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* Header */}
      <Header title={t('screens.settings.title')} subtitle={t('screens.settings.subtitle')} />

      {/* Preferences */}
      <View style={styles.paddingContainer}>
        <ThemedText variant="h4">{t('accessibility.preferences.title')}</ThemedText>
        {preferencesConfig.map((preference, index) => (
          <Card
            containerStyle={{ marginVertical: 8 }}
            key={preference.key}
            index={index}
            title={t(preference.title)}
            description={t(preference.description)}
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
