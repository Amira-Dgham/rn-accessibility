import { ChevronDown, ChevronUp } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import {
  AccessibilityInfo,
  Animated,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  UIManager,
  View,
  ViewStyle
} from 'react-native';

import { useTheme } from '@/hooks/useTheme';
import { AccessibilityLevel } from '@/types/accessibility.types';
import { ThemedText } from './ThemedText';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  contentStyle?: ViewStyle;
  accessibilityLevel?: AccessibilityLevel;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  expanded: expandedProp,
  onToggle,
  style,
  titleStyle,
  contentStyle,
  accessibilityLevel,
  accessibilityLabel,
  accessibilityHint,
  testID,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const expanded = expandedProp !== undefined ? expandedProp : internalExpanded;
  const { colors } = useTheme();
  const animatedHeight = useRef(new Animated.Value(expanded ? 1 : 0)).current;

  const handleToggle = () => {
    const newExpanded = !expanded;

    // Configure layout animation for smoother transitions (AA and AAA levels)
    if (accessibilityLevel !== AccessibilityLevel.A) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    // Animate content height for AAA level
    if (accessibilityLevel === AccessibilityLevel.AAA) {
      Animated.timing(animatedHeight, {
        toValue: newExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }

    if (onToggle) {
      onToggle(newExpanded);
    } else {
      setInternalExpanded(newExpanded);
    }

    // Announce state change for AAA level
    if (accessibilityLevel === 'AAA') {
      const announcement = newExpanded
        ? `${title} expanded`
        : `${title} collapsed`;
      AccessibilityInfo.announceForAccessibility(announcement);
    }
  };

  // Accessibility features based on level
  const getAccessibilityProps = () => {
    const baseProps = {
      accessible: true,
      accessibilityRole: 'button' as const,
      onPress: handleToggle,
    };

    switch (accessibilityLevel) {
      case 'A':
        return {
          ...baseProps,
          accessibilityLabel: accessibilityLabel || title,
        };

      case 'AA':
        return {
          ...baseProps,
          accessibilityLabel: accessibilityLabel || `${title}, ${expanded ? 'expanded' : 'collapsed'}`,
          accessibilityHint: accessibilityHint || 'Double tap to expand or collapse',
          accessibilityState: { expanded },
          hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
        };

      case 'AAA':
        return {
          ...baseProps,
          accessibilityLabel: accessibilityLabel || `${title}, ${expanded ? 'expanded' : 'collapsed'}`,
          accessibilityHint: accessibilityHint || 'Double tap to expand or collapse. Content will be announced when expanded.',
          accessibilityState: { expanded },
          accessibilityActions: [
            { name: 'expand', label: 'Expand' },
            { name: 'collapse', label: 'Collapse' },
          ],
          onAccessibilityAction: (event: any) => {
            switch (event.nativeEvent.actionName) {
              case 'expand':
                if (!expanded) handleToggle();
                break;
              case 'collapse':
                if (expanded) handleToggle();
                break;
            }
          },
          hitSlop: { top: 12, bottom: 12, left: 12, right: 12 },
          importantForAccessibility: 'yes' as const,
        };

      default:
        return baseProps;
    }
  };

  // Content accessibility props
  const getContentAccessibilityProps = () => {
    switch (accessibilityLevel) {
      case 'A':
        return {};

      case 'AA':
        return {
          accessible: true,
          accessibilityRole: 'text' as const,
        };

      case 'AAA':
        return {
          accessible: true,
          accessibilityRole: 'text' as const,
          accessibilityLiveRegion: 'polite' as const,
          importantForAccessibility: 'yes' as const,
        };

      default:
        return {};
    }
  };

  // Style variations based on accessibility level
  const getContainerStyle = () => {
    const baseStyle = [
      styles.container,
      {
        borderColor: colors.background,
        backgroundColor: colors.background
      },
      style,
    ];

    // Enhanced focus indicators for AA and AAA
    if (accessibilityLevel === 'AA' || accessibilityLevel === 'AAA') {
      baseStyle.push({
        borderWidth: 2,
        borderRadius: 8,
      });
    }

    return baseStyle;
  };

  const getHeaderStyle = () => {
    const baseStyle = [
      styles.header,
      { backgroundColor: colors.purpleBackground }
    ];

    // Enhanced padding for better touch targets (AA and AAA)
    if (accessibilityLevel !== 'A') {
      baseStyle.push({
        minHeight: 48,
        paddingVertical: 16,
      });
    }

    return baseStyle;
  };

  const accessibilityProps = getAccessibilityProps();
  const contentAccessibilityProps = getContentAccessibilityProps();

  return (
    <View style={getContainerStyle()} testID={testID}>
      <TouchableOpacity
        {...accessibilityProps}
        style={getHeaderStyle()}
      >
        <ThemedText
          variant="bodyMedium"
          style={[
            styles.title,
            { color: colors.purpleText },
            ...(titleStyle ? [titleStyle] : [])
          ]}
        >
          {title}
        </ThemedText>
        {expanded ? (
          <ChevronUp
            color={colors.purple}
            size={accessibilityLevel === 'AAA' ? 24 : 20}
            accessibilityElementsHidden={true}
            importantForAccessibility="no-hide-descendants"
          />
        ) : (
          <ChevronDown
            color={colors.purple}
            size={accessibilityLevel === 'AAA' ? 24 : 20}
            accessibilityElementsHidden={true}
            importantForAccessibility="no-hide-descendants"
          />
        )}
      </TouchableOpacity>

      {expanded && (
        <View
          style={[
            styles.content,
            { backgroundColor: colors.background },
            contentStyle
          ]}
          {...contentAccessibilityProps}
        >
          {accessibilityLevel === 'AAA' ? (
            <Animated.View
              style={{
                opacity: animatedHeight.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}
            >
              {children}
            </Animated.View>
          ) : (
            children
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    minHeight: 44, // Base minimum touch target
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  content: {
    padding: 16,
  },
});