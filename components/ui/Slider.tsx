import { useTheme } from '@/hooks/useTheme';
import { SliderComponent } from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CustomSliderProps {
  title: string;
  value: number;
  minValue: number;
  maxValue: number;
  step: number;
  onChange: (value: number) => void;
  minIcon?: string;
  maxIcon?: string;
  trackColor?: string;
  thumbColor?: string;
  showButtons?: boolean;
}

const Slider: React.FC<CustomSliderProps> = ({
  title,
  value,
  minValue,
  maxValue,
  step,
  onChange,
  trackColor,
  thumbColor,
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <SliderComponent
          style={styles.slider}
          value={value}
          minimumValue={minValue}
          maximumValue={maxValue}
          step={step}
          onSlidingComplete={(val: any) => {
            onChange(val);
          }}
          onValueChange={onChange}
          minimumTrackTintColor={trackColor ?? colors.gray}
          maximumTrackTintColor={trackColor ?? colors.gray}
          thumbTintColor={thumbColor ?? colors.purple}
          accessibilityLabel={`${title} slider`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
    height: 40,
  },
});

export default Slider;
