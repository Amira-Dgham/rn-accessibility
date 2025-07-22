import { Button, ThemedView } from '@/components';
import Header from '@/components/Header';
import { ColorPicker } from '@/components/ui';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';
import { usePreferences } from '@/hooks/usePreferences';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet } from 'react-native';

const ColorsCustomization = observer(() => {
  const {
    customTextColor,
    customBackgroundColor,
    setCustomTextColor,
    setCustomBackgroundColor,
    resetThemePreferences,
  } = usePreferences();

  const { t } = useLanguage();
  useHeaderTitle(t('screens.settings.colors.title'));

  // Only reset color, font size, and languages
  const handleReset = () => {
    resetThemePreferences();
  };

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      <Header title={t('screens.settings.colors.title')} subtitle={t('screens.settings.colors.description')} />
      {/* Background Color Picker */}
      <ColorPicker
        value={customBackgroundColor}
        onChange={setCustomBackgroundColor}
        label={t('screens.settings.colors.background')}
        contrastWithColor={customTextColor}
      />
      {/* Text Color Picker */}
      <ColorPicker
        value={customTextColor}
        onChange={setCustomTextColor}
        label={t('screens.settings.colors.text')}
        contrastWithColor={customBackgroundColor}
      />
      <Button
        preset='filled'
        onPress={handleReset}
        style={styles.reset}
      >
        {t('screens.settings.colors.reset')}
      </Button>
    </ThemedView>
  );
});

const styles = StyleSheet.create({
  reset: {
    margin: 20,
    alignSelf: 'center',
    width: '50%',
  },
});

export default ColorsCustomization;
