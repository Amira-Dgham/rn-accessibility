import { ThemedText, ThemedView } from '@/components';
import Dropdown from '@/components/ui/Dropdown';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';
import { SupportedLanguage } from '@/locales';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const LanguageCustomization = observer(() => {
  const { t, currentLanguage, availableLanguages, changeLanguage } = useLanguage();
  useHeaderTitle(t('screens.settings.language.title'));

  const items = availableLanguages.map((lang) => ({
    label: lang.name,
    value: lang.code,
  }));

  const handleChangeLanguage = (value: string) => {
    changeLanguage(value as SupportedLanguage);
  };

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      <View style={styles.container}>
        <ThemedText variant="h4" style={styles.header}>{t('screens.settings.language.title')}</ThemedText>
        <ThemedText variant="body" style={styles.description}>{t('screens.settings.language.description')}</ThemedText>
        <ThemedText variant="bodyMedium" style={styles.label}>{t('screens.settings.language.selectLabel')}</ThemedText>
        <Dropdown
          selectedValue={currentLanguage}
          onValueChange={handleChangeLanguage}
          items={items}
          style={styles.dropdown}
        />
      </View>
    </ThemedView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    marginBottom: 12,
  },
  description: {
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  dropdown: {
    width: 220,
  },
});

export default LanguageCustomization;
