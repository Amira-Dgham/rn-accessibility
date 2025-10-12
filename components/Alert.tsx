
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { AccessibilityLevel } from '@/types/accessibility.types';
import React from 'react';
import {
  AccessibilityRole,
  GestureResponderEvent,
  Modal,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { ThemedText } from './ThemedText';
import { Button } from './ui';

export interface DialogButton {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export interface AlertProps {
  visible: boolean;
  title?: string;
  message: string;
  buttons?: DialogButton[];
  onClose?: () => void;
  level: AccessibilityLevel;
}

const Alert: React.FC<AlertProps> = ({
  visible,
  title,
  message,
  buttons = [{ text: 'OK', onPress: () => { } }],
  onClose,
  level,
}) => {
  const { t } = useLanguage();
  const { colors } = useTheme();

  // Accessibility settings per level
  const accessibilitySettings: Record<string, {
    role: AccessibilityRole | undefined;
    liveRegion: 'none' | 'polite' | 'assertive' | undefined;
    hint: string;
  }> = {
    A: {
      role: 'alert',
      liveRegion: 'none',
      hint: 'Simple alert message.',
    },
    AA: {
      role: 'alert',
      liveRegion: 'polite',
      hint: 'Alert with improved accessibility feedback.',
    },
    AAA: {
      role: 'alert',
      liveRegion: 'assertive',
      hint: 'Fully accessible alert with live updates and keyboard actions.',
    },
    NONE: {
      role: undefined,
      liveRegion: 'none',
      hint: 'No accessibility features applied.',
    },
  };

  const settings = accessibilitySettings[level as keyof typeof accessibilitySettings];

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      accessible
      accessibilityLabel={title || 'Alert Dialog'}
      accessibilityRole={settings.role}
      accessibilityHint={settings.hint}
      accessibilityViewIsModal={level !== AccessibilityLevel.NONE}
      accessibilityLiveRegion={settings.liveRegion}
      onAccessibilityEscape={onClose}
    >
      <View style={[styles.overlay, { backgroundColor: colors.overlay50 }]}>
        <View style={[styles.dialogBox, { backgroundColor: colors.background }]}>
          {title && (
            <ThemedText
              variant="h3"
              accessibilityLevel={level}
            >
              {title}
            </ThemedText>
          )}

          <ThemedText
            variant="body"
            accessibilityLevel={level}

          >
            {message}
          </ThemedText>

          <View style={styles.buttonContainer}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                preset="filled"
                onPress={(e) => {
                  // Call the button's own onPress if it exists
                  button.onPress?.(e);
                  // Then close the alert
                  onClose?.();
                }}
              >
                {button.text}
              </Button>
            ))}
          </View>
        </View>
      </View>
    </Modal >
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogBox: {
    width: '80%',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5,
  },


});

export default Alert;