import { Button, ThemedView } from '@/components';
import React, { FC } from 'react';

import Header from '@/components/Header';
import { ColorPicker } from '@/components/ui';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';
import { usePreferences } from '@/hooks/usePreferences';
import { observer } from 'mobx-react-lite';
import { StyleSheet } from 'react-native';

/**
 * Props for ColorsCustomization
 * Currently empty, but ready for future props (navigation, etc.)
 */
export type ColorsCustomizationProps = {};

/**
 * ColorsCustomization
 *
 * Allows the user to:
 * - Customize background color
 * - Customize text color
 * - Reset color-related preferences to default
 */
const ColorsCustomization: FC<ColorsCustomizationProps> = observer(() => {
  const {
    customTextColor,
    customBackgroundColor,
    setCustomTextColor,
    setCustomBackgroundColor,
    resetThemePreferences,
  } = usePreferences();

  const { t } = useLanguage();

  // Set the header title dynamically
  useHeaderTitle(t('screens.settings.colors.title'));

  /** Reset theme-related preferences only */
  const handleReset = () => {
    resetThemePreferences();
  };

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* ---------- Header ---------- */}
      <Header
        title={t('screens.settings.colors.title')}
        subtitle={t('screens.settings.colors.description')}
      />

      {/* ---------- Background Color Picker ---------- */}
      <ColorPicker
        value={customBackgroundColor}
        onChange={setCustomBackgroundColor}
        label={t('screens.settings.colors.background')}
        contrastWithColor={customTextColor}
      />

      {/* ---------- Text Color Picker ---------- */}
      <ColorPicker
        value={customTextColor}
        onChange={setCustomTextColor}
        label={t('screens.settings.colors.text')}
        contrastWithColor={customBackgroundColor}
      />

      {/* ---------- Reset Button ---------- */}
      <Button preset="filled" onPress={handleReset} style={styles.reset}>
        {t('screens.settings.colors.reset')}
      </Button>
    </ThemedView>
  );
});

export default ColorsCustomization;

// -------------------
// Styles
// -------------------
const styles = StyleSheet.create({
  reset: {
    margin: 20,
    alignSelf: 'center',
    width: '50%',
  },
});
