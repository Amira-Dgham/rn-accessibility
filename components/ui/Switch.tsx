import { useTheme } from '@/hooks/useTheme';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  trackColor?: {
    false?: string;
    true?: string;
  };
  thumbColor?: string;
  style?: ViewStyle;
}

export const Switch: React.FC<SwitchProps> = ({
  value,
  onValueChange,
  disabled = false,
  size = 'medium',
  trackColor,
  thumbColor,
  style,
}) => {
  const { colors } = useTheme();
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value, animatedValue]);

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return {
          trackWidth: 40,
          trackHeight: 22,
          knobSize: 18,
          translateRange: [2, 20],
        };
      case 'large':
        return {
          trackWidth: 60,
          trackHeight: 32,
          knobSize: 28,
          translateRange: [2, 30],
        };
      default: // medium
        return {
          trackWidth: 50,
          trackHeight: 28,
          knobSize: 24,
          translateRange: [2, 24],
        };
    }
  };

  const sizeConfig = getSizeConfig();

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: sizeConfig.translateRange,
  });

  const getTrackColor = () => {
    if (value) {
      return trackColor?.true || (disabled ? colors.gray : colors.purple);
    } else {
      return trackColor?.false || (disabled ? colors.gray : colors.gray);
    }
  };

  const getThumbColor = () => {
    return thumbColor || (disabled ? colors.gray : colors.background);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.track,
        {
          width: sizeConfig.trackWidth,
          height: sizeConfig.trackHeight,
          borderRadius: sizeConfig.trackHeight / 2,
          backgroundColor: getTrackColor(),
        },
        disabled && styles.disabled,
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.knob,
          {
            width: sizeConfig.knobSize,
            height: sizeConfig.knobSize,
            borderRadius: sizeConfig.knobSize / 2,
            backgroundColor: getThumbColor(),
          },
          { transform: [{ translateX }] },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  track: {
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  knob: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Switch;
