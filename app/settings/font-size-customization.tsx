import { Button, Slider, ThemedText, ThemedView } from '@/components';
import Header from '@/components/Header';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';
import { usePreferences } from '@/hooks/usePreferences';
import { useTheme } from '@/hooks/useTheme';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const FontSizeCustomization = observer(() => {
  // Get translation function
  const { t } = useLanguage();
  // Set the header title for the screen
  useHeaderTitle(t('screens.settings.fontSize.title'));
  // Get theme colors and font sizes
  const { colors, fontSizes } = useTheme();
  // Get current font size and setter from preferences
  const { fontSize, setFontSize } = usePreferences();

  // Handler for slider value change
  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
  };

  // Helper to get a label for the current font size
  const getFontSizeLabel = (size: number) => {
    if (size <= fontSizes.sm) return 'Small';
    if (size <= fontSizes.lg) return 'Medium';
    if (size <= fontSizes.xl) return 'Large';
    return 'Extra Large';
  };

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* Header section with title and description */}
      <Header
        title={t('screens.settings.fontSize.title')}
        subtitle={t('screens.settings.fontSize.description')}
      />

      {/* Slider label and current value */}
      <View style={styles.sliderHeader}>
        <ThemedText color={colors.purple} variant="body">
          {t('screens.settings.fontSize.title')}
        </ThemedText>
        <ThemedText color={colors.purple} variant="body">
          {fontSize}px
        </ThemedText>
      </View>

      {/* Font size slider */}
      <Slider
        title="Font Size"
        value={fontSize}
        minValue={12}
        maxValue={24}
        step={1}
        onChange={handleFontSizeChange}
        trackColor={colors.gray}
        thumbColor={colors.purple}
      />

      {/* Range labels for slider */}
      <View style={styles.rangeLabels}>
        <ThemedText variant="body" color={colors.gray}>
          Small (12px)
        </ThemedText>
        <ThemedText variant="body" color={colors.gray}>
          Large (24px)
        </ThemedText>
      </View>

      {/* Display the current font size label */}
      <ThemedText variant="body" style={styles.sizeLabel} color={colors.purple}>
        {getFontSizeLabel(fontSize)}
      </ThemedText>

      {/* Reset button to restore default font size */}
      <Button
        preset="filled"
        onPress={() => setFontSize(16)}
        style={styles.resetButton}
        textStyle={styles.resetButtonText}
      >
        {t('screens.settings.fontSize.reset')}({fontSizes.base}px)
      </Button>
    </ThemedView>
  );
});

// Styles for the component
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

export default FontSizeCustomization;
