import { useAccessibilityContext } from '@/context/AccessibilityProvider';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { AccessibilityLevel } from '@/types/accessibility.types';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { default as React, useCallback, useMemo, useRef, useState } from 'react';
import {
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
import { ThemedText } from './ThemedText';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 * AccordionProps
 * @description Props for the Accordion component.
 */
export interface AccordionProps {
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
  accessibilityLevel = AccessibilityLevel.A,
  accessibilityLabel,
  accessibilityHint,
  testID,
}) => {
  // State and context
  const [internalExpanded, setInternalExpanded] = useState(false);
  const expanded = expandedProp !== undefined ? expandedProp : internalExpanded;
  const { colors } = useTheme();
  const { prefersReducedMotion, announce } = useAccessibilityContext();
  const { t } = useLanguage();
  const animatedHeight = useRef(new Animated.Value(expanded ? 1 : 0)).current;

  // Toggle handler
  const handleToggle = useCallback(() => {
    const newExpanded = !expanded;
    // Animate only if allowed
    if (!prefersReducedMotion && accessibilityLevel !== AccessibilityLevel.A) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    if (!prefersReducedMotion && accessibilityLevel === AccessibilityLevel.AAA) {
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
    // Announce for AAA
    if (accessibilityLevel === 'AAA') {
      const announcement = newExpanded
        ? t('screens.components.accordions.componentAccessibility.expandedAnnouncement')
        : t('screens.components.accordions.componentAccessibility.collapsedAnnouncement');
      announce?.({ message: announcement });
    }
  }, [expanded, onToggle, setInternalExpanded, accessibilityLevel, prefersReducedMotion, animatedHeight, t, announce]);

  // Accessibility props (memoized)
  const accessibilityProps = useMemo(() => {
    const baseProps = {
      accessible: true,
      accessibilityRole: 'button' as const,
      onPress: handleToggle,
    };
    switch (accessibilityLevel) {
      case 'A':
        return {
          ...baseProps,
          accessibilityLabel: accessibilityLabel || t('screens.components.accordions.componentAccessibility.headerLabel', { title }),
        };
      case 'AA':
        return {
          ...baseProps,
          accessibilityLabel: accessibilityLabel || `${title}, ${expanded ? t('screens.components.accordions.componentAccessibility.expandedAnnouncement') : t('screens.components.accordions.componentAccessibility.collapsedAnnouncement')}`,
          accessibilityHint: accessibilityHint || t('screens.components.accordions.componentAccessibility.expandHint'),
          accessibilityState: { expanded },
          hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
        };
      case 'AAA':
        return {
          ...baseProps,
          accessibilityLabel: accessibilityLabel || `${title}, ${expanded ? t('screens.components.accordions.componentAccessibility.expandedAnnouncement') : t('screens.components.accordions.componentAccessibility.collapsedAnnouncement')}`,
          accessibilityHint: accessibilityHint || `${t('screens.components.accordions.componentAccessibility.expandHint')}. ${t('screens.components.accordions.componentAccessibility.customAction')}`,
          accessibilityState: { expanded },
          accessibilityActions: [
            { name: 'expand', label: t('screens.components.accordions.componentAccessibility.expandHint') },
            { name: 'collapse', label: t('screens.components.accordions.componentAccessibility.collapseHint') },
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
  }, [accessibilityLevel, accessibilityLabel, accessibilityHint, expanded, handleToggle, title, t]);

  // Content accessibility props (memoized)
  const contentAccessibilityProps = useMemo(() => {
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
  }, [accessibilityLevel]);

  // Container and header styles (memoized)
  const containerStyle = useMemo(() => {
    const baseStyle = [
      styles.container,
      { borderColor: colors.background, backgroundColor: colors.background },
      style,
    ];
    if (accessibilityLevel === 'AA' || accessibilityLevel === 'AAA') {
      baseStyle.push({ borderWidth: 2, borderRadius: 8 });
    }
    return baseStyle;
  }, [colors.background, style, accessibilityLevel]);

  const headerStyle = useMemo(() => {
    const baseStyle = [
      styles.header,
      { backgroundColor: colors.purpleBackground },
    ];
    if (accessibilityLevel !== 'A') {
      baseStyle.push({ minHeight: 48, paddingVertical: 16 });
    }
    return baseStyle;
  }, [colors.purpleBackground, accessibilityLevel]);

  // Render
  return (
    <View style={containerStyle} testID={testID}>
      <TouchableOpacity {...accessibilityProps} style={headerStyle}>
        <ThemedText
          variant="bodyMedium"
          style={[
            styles.title,
            { color: colors.purpleText },
            ...(titleStyle ? [titleStyle] : []),
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
            contentStyle,
          ]}
          {...contentAccessibilityProps}
        >
          {accessibilityLevel === 'AAA' && !prefersReducedMotion ? (
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

