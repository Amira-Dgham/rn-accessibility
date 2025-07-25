import { useTheme } from '@/hooks/useTheme';
import { getContrastRatio } from '@/utils/accessibilityChecker';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import ReanimatedColorPicker, {
  BrightnessSlider,
  HueSlider,
  Panel1,
  Preview,
  SaturationSlider,
} from 'reanimated-color-picker';
import { ThemedText } from '../ThemedText';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label?: string;
  // Optionally provide a color to check contrast against (e.g., for text vs background)
  contrastWithColor?: string;
}

// Simple contrast ratio checker (WCAG)

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
  label,
  contrastWithColor,
}) => {
  const { colors } = useTheme();
  // Handler for color change
  const handleColorChange = ({ hex }: { hex: string }) => {
    onChange(hex);
  };

  // State for contrast ratio
  const [contrastRatio, setContrastRatio] = useState<number | null>(null);

  // Recalculate contrast ratio whenever value or contrastWithColor changes
  useEffect(() => {
    if (contrastWithColor) {
      try {
        setContrastRatio(getContrastRatio(value, contrastWithColor));
      } catch {
        setContrastRatio(null);
      }
    } else {
      setContrastRatio(null);
    }
  }, [value, contrastWithColor]);

  return (
    <View style={styles.container}>
      {label && (
        <ThemedText variant="h4" style={styles.spacingStyle}>
          {label} :
        </ThemedText>
      )}
      <ReanimatedColorPicker
        value={value}
        onChangeJS={handleColorChange}
        style={styles.picker}
        sliderThickness={18}
        thumbSize={24}
        boundedThumb
      >
        <Panel1 style={styles.palette} />
        <HueSlider style={styles.palette} />
        <SaturationSlider style={styles.palette} />
        <BrightnessSlider style={styles.palette} />
        <Preview style={[styles.preview, { borderColor: colors.gray }]} />
      </ReanimatedColorPicker>
      {contrastWithColor && contrastRatio !== null && (
        <ThemedText variant="bodyMedium" style={styles.spacingStyle}>
          Contrast Ratio: {contrastRatio.toFixed(2)} {contrastRatio < 4.5 ? '(Low)' : '(Good)'}
        </ThemedText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  picker: {
    width: Dimensions.get('window').width * 0.5,
    alignItems: 'center',
  },
  palette: {
    marginVertical: 8,
    width: Dimensions.get('window').width * 0.5,
  },
  preview: {
    marginTop: 8,
    width: 150,
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
  },
  spacingStyle: {
    margin: 20,
  },
});

export default ColorPicker;
