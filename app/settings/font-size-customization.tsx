import { Button, Slider, ThemedText, ThemedView } from '@/components';
import { MAX_SUPPORTED_FONT, MIN_SUPPORTED_FONT } from '@/constants';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '@/components/Header';
import { getFontSizeLabel } from '@/utils';
import { observer } from 'mobx-react-lite';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';
import { usePreferences } from '@/hooks/usePreferences';
import { useTheme } from '@/hooks/useTheme';

export type FontSizeCustomizationProps = {};

/**
 * FontSizeCustomization
 *
 * Allows the user to:
 * - Adjust the global font size using a slider
 * - See the pixel value and descriptive label of the current font size
 * - Reset to the default font size
 */
const FontSizeCustomization: FC<FontSizeCustomizationProps> = observer(() => {
  const { t } = useLanguage();
  const { colors, fontSizes } = useTheme();
  const { fontSize, setFontSize, resetFontPreferences } = usePreferences();

  // Set the screen title in the header
  useHeaderTitle(t('screens.settings.fontSize.title'));

  /** Update the font size preference */
  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
  };

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* ---------- Header ---------- */}
      <Header
        title={t('screens.settings.fontSize.title')}
        subtitle={t('screens.settings.fontSize.description')}
      />

      {/* ---------- Slider Header (Label + Current Size) ---------- */}
      <View style={styles.sliderHeader}>
        <ThemedText color={colors.purple} variant="body">
          {t('screens.settings.fontSize.title')}
        </ThemedText>
        <ThemedText color={colors.purple} variant="body">
          {fontSize}px
        </ThemedText>
      </View>

      {/* ---------- Font Size Slider ---------- */}
      <Slider
        title="Font Size"
        value={fontSize}
        minValue={MIN_SUPPORTED_FONT}
        maxValue={MAX_SUPPORTED_FONT}
        step={1}
        onChange={handleFontSizeChange}
        trackColor={colors.gray}
        thumbColor={colors.purple}
      />

      {/* ---------- Slider Range Labels ---------- */}
      <View style={styles.rangeLabels}>
        <ThemedText variant="body" color={colors.gray}>
          {t('screens.settings.fontSize.minFont')}
        </ThemedText>
        <ThemedText variant="body" color={colors.gray}>
          {t('screens.settings.fontSize.maxFont')}
        </ThemedText>
      </View>

      {/* ---------- Current Font Size Label ---------- */}
      <ThemedText variant="body" style={styles.sizeLabel} color={colors.purple}>
        {getFontSizeLabel(fontSize, fontSizes)}
      </ThemedText>

      {/* ---------- Reset Button ---------- */}
      <Button
        preset="filled"
        onPress={() => resetFontPreferences()}
        style={styles.resetButton}
        textStyle={styles.resetButtonText}
      >
        {t('screens.settings.fontSize.reset')} ({fontSizes.base}px)
      </Button>
    </ThemedView>
  );
});

export default FontSizeCustomization;

// -------------------
// Styles
// -------------------
const styles = StyleSheet.create({
  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    margin: 20,
  },
  sizeLabel: {
    textAlign: 'center',
    marginTop: 10,
  },
  rangeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  resetButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  resetButtonText: {
    textAlign: 'center',
  },
});
