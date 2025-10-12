import { useAccessibilityContext } from '@/context/AccessibilityProvider';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { AccessibilityLevel } from '@/types/accessibility.types';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Animated,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import { ThemedText } from './ThemedText';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  accessibilityLevel?: AccessibilityLevel;
  testID?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  expanded: expandedProp,
  onToggle,
  accessibilityLevel = AccessibilityLevel.A,
  testID,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const expanded = expandedProp ?? internalExpanded;

  const { colors } = useTheme();
  const { t } = useLanguage();
  const { prefersReducedMotion, announce } = useAccessibilityContext();
  const animatedHeight = useRef(new Animated.Value(expanded ? 1 : 0)).current;

  const handleToggle = useCallback(() => {
    const newExpanded = !expanded;

    if (!prefersReducedMotion) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    if (accessibilityLevel === 'AAA' && !prefersReducedMotion) {
      Animated.timing(animatedHeight, {
        toValue: newExpanded ? 1 : 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }

    if (onToggle) onToggle(newExpanded);
    else setInternalExpanded(newExpanded);

    // Announce change for screen readers (AAA)
    if (accessibilityLevel === 'AAA') {
      const announcement = newExpanded
        ? t('accessibility.components.accordions.componentAccessibility.expandedAnnouncement')
        : t('accessibility.components.accordions.componentAccessibility.collapsedAnnouncement');
      announce?.({ message: announcement });
    }
  }, [expanded, onToggle, prefersReducedMotion, accessibilityLevel, t, announce, animatedHeight]);

  // Accessibility configuration
  const accessibilityProps = useMemo(() => {
    const headerLabel = t('accessibility.components.accordions.componentAccessibility.headerLabel');
    const expandHint = t('accessibility.components.accordions.componentAccessibility.expandHint');
    const collapseHint = t('accessibility.components.accordions.componentAccessibility.collapseHint');
    const label = `${headerLabel}: ${title}`;
    const hint = expanded ? collapseHint : expandHint;

    const base = {
      accessible: true,
      accessibilityRole: 'button' as const,
      accessibilityLabel: label,
      accessibilityHint: hint,
      accessibilityState: { expanded },
      onPress: handleToggle,
    };

    if (accessibilityLevel === 'AA') {
      return {
        ...base,
        hitSlop: { top: 12, bottom: 12, left: 12, right: 12 },
      };
    }

    if (accessibilityLevel === 'AAA') {
      return {
        ...base,
        accessibilityActions: [
          { name: 'expand', label: expandHint },
          { name: 'collapse', label: collapseHint },
        ],
        onAccessibilityAction: (event: any) => {
          const action = event.nativeEvent.actionName;
          if (action === 'expand' && !expanded) handleToggle();
          if (action === 'collapse' && expanded) handleToggle();
        },
        importantForAccessibility: 'yes' as const,
      };
    }

    return base;
  }, [accessibilityLevel, expanded, handleToggle, t, title]);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.purple,
        },
      ]}
      testID={testID}
    >
      <TouchableOpacity {...accessibilityProps} style={[styles.header, { backgroundColor: colors.purpleBackground }]}>
        <ThemedText variant="bodyMedium" style={[styles.title, { color: colors.text }]}>
          {title}
        </ThemedText>
        {expanded ? (
          <ChevronUp color={colors.purple} size={22} />
        ) : (
          <ChevronDown color={colors.purple} size={22} />
        )}
      </TouchableOpacity>

      {expanded && (
        <Animated.View
          style={[
            styles.content,
            {
              opacity: accessibilityLevel === 'AAA'
                ? animatedHeight.interpolate({ inputRange: [0, 1], outputRange: [0, 1] })
                : 1,
            },
          ]}
          accessibilityRole="text"
          accessibilityLiveRegion={accessibilityLevel === 'AAA' ? 'polite' : undefined}
        >
          {children}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: 10,
    marginVertical: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  content: {
    padding: 16,
  },
});