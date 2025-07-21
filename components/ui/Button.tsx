import { useTheme } from '@/hooks/useTheme';
import React, { ComponentType, useState } from 'react';
import { Pressable, PressableProps, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';

// Button style presets
const PRESETS = ['default', 'filled', 'reversed'] as const;
type Presets = typeof PRESETS[number];

export interface ButtonAccessoryProps {
  style: StyleProp<any>;
  pressableState: { pressed: boolean };
  disabled?: boolean;
}

export interface ButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  pressedTextStyle?: StyleProp<TextStyle>;
  disabledTextStyle?: StyleProp<TextStyle>;
  preset?: Presets;
  RightAccessory?: ComponentType<ButtonAccessoryProps>;
  LeftAccessory?: ComponentType<ButtonAccessoryProps>;
  children?: React.ReactNode;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  onPressHold?: () => void;
  onPressConfirm?: () => void;
}

export function Button(props: ButtonProps) {
  const {
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    disabledTextStyle: $disabledTextStyleOverride,
    children,
    RightAccessory,
    LeftAccessory,
    disabled,
    disabledStyle: $disabledViewStyleOverride,
    preset = 'default',
    onPressHold,
    onPressConfirm,
    ...rest
  } = props;

  const { colors, typography } = useTheme();
  const [isPressed, setIsPressed] = useState(false);

  // Simple style presets
  const viewPresets: Record<Presets, ViewStyle> = {
    default: {
      backgroundColor: colors.background,
      borderColor: colors.purple,
      borderWidth: 1,
      borderRadius: 4,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    filled: {
      backgroundColor: colors.purple,
      borderColor: colors.purple,
      borderWidth: 1,
      borderRadius: 4,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    reversed: {
      backgroundColor: colors.text,
      borderColor: colors.text,
      borderWidth: 1,
      borderRadius: 4,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  };

  const textPresets: Record<Presets, TextStyle> = {
    default: { color: colors.purple, ...typography.bodyMedium },
    filled: { color: colors.background, ...typography.bodyMedium },
    reversed: { color: colors.background, ...typography.bodyMedium },
  };

  function getViewStyle(pressed: boolean): StyleProp<ViewStyle> {
    return [
      viewPresets[preset],
      $viewStyleOverride,
      pressed && $pressedViewStyleOverride,
      disabled && $disabledViewStyleOverride,
    ].filter(Boolean);
  }

  function getTextStyle(pressed: boolean): StyleProp<TextStyle> {
    return [
      textPresets[preset],
      $textStyleOverride,
      pressed && $pressedTextStyleOverride,
      disabled && $disabledTextStyleOverride,
    ].filter(Boolean);
  }

  const handlePressIn = () => {
    setIsPressed(true);
    onPressHold?.();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    onPressConfirm?.();
  };

  return (
    <Pressable
      style={({ pressed }) => getViewStyle(pressed)}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      {...rest}
    >
      {({ pressed }) => (
        <>
          {LeftAccessory && (
            <LeftAccessory style={{ marginRight: 8 }} pressableState={{ pressed }} disabled={disabled} />
          )}
          <Text style={getTextStyle(pressed)}>{children}</Text>
          {RightAccessory && (
            <RightAccessory style={{ marginLeft: 8 }} pressableState={{ pressed }} disabled={disabled} />
          )}
        </>
      )}
    </Pressable>
  );
}
