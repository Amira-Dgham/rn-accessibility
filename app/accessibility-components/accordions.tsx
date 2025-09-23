import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components';
import { Accordion } from '@/components/Accordion';
import { AccessibilityLevel } from '@/types/accessibility.types';

interface AccordionsProps {
  level: AccessibilityLevel;
}

const Accordions: React.FC<AccordionsProps> = ({ level }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    item1: false,
    item2: false,
    item3: false,
  });

  const handleToggle = (key: string, expanded: boolean) => {
    // For single expand mode in AAA level
    if (level === 'AAA') {
      if (expanded) {
        // Collapse all others when expanding one
        const newState: Record<string, boolean> = {};
        Object.keys(expandedItems).forEach(k => {
          newState[k] = k === key;
        });
        setExpandedItems(newState);
      } else {
        setExpandedItems((prev) => ({ ...prev, [key]: expanded }));
      }
    } else {
      setExpandedItems((prev) => ({ ...prev, [key]: expanded }));
    }
  };

  if (level === 'A') {
    // Basic accordion with minimal accessibility
    return (
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Basic Accordion (Level A)
        </ThemedText>
        <ThemedText style={styles.description}>
          Minimal accessibility features - basic button role and label
        </ThemedText>

        <View style={styles.accordionContainer}>
          <Accordion
            title="Basic Accordion Item"
            expanded={expandedItems.item1}
            onToggle={(expanded) => handleToggle('item1', expanded)}
            accessibilityLevel="A"
            testID="basic-accordion-1"
          >
            <ThemedText variant="bodyMedium">
              This is basic accordion content with minimal accessibility features.
              It includes basic touch interaction and simple labeling.
            </ThemedText>
          </Accordion>

          <Accordion
            title="Another Basic Item"
            expanded={expandedItems.item2}
            onToggle={(expanded) => handleToggle('item2', expanded)}
            accessibilityLevel="A"
            testID="basic-accordion-2"
          >
            <ThemedText variant="bodyMedium">
              Second accordion item with the same basic accessibility level.
            </ThemedText>
          </Accordion>
        </View>
      </View>
    );
  }

  if (level === 'AA') {
    // Enhanced accordion with better accessibility features
    return (
      <View style={styles.container}>
        <ThemedText style={styles.title}>
          Enhanced Accordion (Level AA)
        </ThemedText>
        <ThemedText style={styles.description}>
          Enhanced accessibility - better contrast, focus management, state indicators, and touch targets
        </ThemedText>

        <View style={styles.accordionContainer}>
          <Accordion
            title="Enhanced Accordion Item 1"
            expanded={expandedItems.item1}
            onToggle={(expanded) => handleToggle('item1', expanded)}
            accessibilityLevel="AA"
            accessibilityHint="Tap to expand and view detailed content"
            testID="enhanced-accordion-1"
          >
            <ThemedText variant="bodyMedium">
              This accordion item has enhanced accessibility features including:
              {'\n\n'}• Better contrast ratios
              {'\n'}• Expanded/collapsed state announcements
              {'\n'}• Improved focus indicators
              {'\n'}• Larger touch targets (48pt minimum)
              {'\n'}• Enhanced screen reader support
            </ThemedText>
          </Accordion>

          <Accordion
            title="Enhanced Accordion Item 2"
            expanded={expandedItems.item2}
            onToggle={(expanded) => handleToggle('item2', expanded)}
            accessibilityLevel="AA"
            accessibilityHint="Contains information about accessibility features"
            testID="enhanced-accordion-2"
          >
            <ThemedText variant="bodyMedium">
              Level AA compliance ensures that users with various disabilities can
              effectively interact with the accordion components. This includes
              users relying on screen readers, keyboard navigation, and those with
              visual impairments.
            </ThemedText>
          </Accordion>

          <Accordion
            title="Enhanced Accordion Item 3"
            expanded={expandedItems.item3}
            onToggle={(expanded) => handleToggle('item3', expanded)}
            accessibilityLevel="AA"
            accessibilityHint="Example content with multiple sections"
            testID="enhanced-accordion-3"
          >
            <ThemedText variant="bodyMedium">
              Multiple accordion items can be expanded simultaneously at this level,
              allowing users to compare content across different sections easily.
            </ThemedText>
          </Accordion>
        </View>
      </View>
    );
  }

  // AAA level: Full accessibility with comprehensive accordion features
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ThemedText style={styles.title}>
        Full Accessibility Accordion (Level AAA)
      </ThemedText>
      <ThemedText style={styles.description}>
        Complete accessibility compliance - ARIA roles, live regions, custom actions,
        animations, and comprehensive screen reader support
      </ThemedText>

      <View style={styles.accordionContainer}>
        <Accordion
          title="Full Accessibility Item 1"
          expanded={expandedItems.item1}
          onToggle={(expanded) => handleToggle('item1', expanded)}
          accessibilityLevel="AAA"
          accessibilityLabel="Primary information section"
          accessibilityHint="Expands to show comprehensive details about accessibility features. Only one section can be open at a time."
          testID="full-accordion-1"
          id="accordion-1"
        >
          <View>
            <ThemedText variant="bodyMedium" style={styles.contentText}>
              This accordion demonstrates complete accessibility compliance with:
            </ThemedText>

            <View style={styles.featureList}>
              <ThemedText variant="bodyMedium">• ARIA roles and properties</ThemedText>
              <ThemedText variant="bodyMedium">• Live region announcements</ThemedText>
              <ThemedText variant="bodyMedium">• Custom accessibility actions</ThemedText>
              <ThemedText variant="bodyMedium">• Smooth animations with accessibility considerations</ThemedText>
              <ThemedText variant="bodyMedium">• Enhanced focus management</ThemedText>
              <ThemedText variant="bodyMedium">• Comprehensive screen reader support</ThemedText>
              <ThemedText variant="bodyMedium">• Single-expand mode for better focus</ThemedText>
            </View>
          </View>
        </Accordion>

        <Accordion
          title="Full Accessibility Item 2"
          expanded={expandedItems.item2}
          onToggle={(expanded) => handleToggle('item2', expanded)}
          accessibilityLevel="AAA"
          accessibilityLabel="User interaction guidelines"
          accessibilityHint="Contains detailed information about user interaction patterns and accessibility best practices"
          testID="full-accordion-2"
          id="accordion-2"
        >
          <View>
            <ThemedText variant="bodyMedium" style={styles.contentText}>
              User Interaction Guidelines:
            </ThemedText>

            <View style={styles.featureList}>
              <ThemedText variant="bodyMedium">
                • Touch targets meet minimum 44pt size requirements
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Clear visual and audio feedback for all interactions
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Consistent behavior across different screen readers
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Support for custom accessibility actions
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Intelligent content announcement timing
              </ThemedText>
            </View>
          </View>
        </Accordion>

        <Accordion
          title="Full Accessibility Item 3"
          expanded={expandedItems.item3}
          onToggle={(expanded) => handleToggle('item3', expanded)}
          accessibilityLevel="AAA"
          accessibilityLabel="Technical implementation details"
          accessibilityHint="Provides technical information about the accessibility implementation and compliance standards"
          testID="full-accordion-3"
          id="accordion-3"
        >
          <View>
            <ThemedText variant="bodyMedium" style={styles.contentText}>
              Technical Implementation:
            </ThemedText>

            <View style={styles.featureList}>
              <ThemedText variant="bodyMedium">
                • Follows WCAG 2.1 AAA guidelines
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Implements proper semantic structure
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Uses appropriate ARIA attributes
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Provides multiple ways to interact with content
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Ensures content is perceivable, operable, understandable, and robust
              </ThemedText>
              <ThemedText variant="bodyMedium">
                • Includes comprehensive error handling and fallbacks
              </ThemedText>
            </View>
          </View>
        </Accordion>
      </View>

      <View style={styles.footer}>
        <ThemedText style={styles.footerText}>
          This AAA-level implementation ensures the highest level of accessibility
          compliance for users with diverse needs and assistive technologies.
        </ThemedText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 24,
    opacity: 0.8,
    lineHeight: 20,
  },
  accordionContainer: {
    gap: 12,
  },
  contentText: {
    marginBottom: 12,
    fontWeight: '600',
  },
  featureList: {
    gap: 8,
    paddingLeft: 8,
  },
  footer: {
    marginTop: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
  },
  footerText: {
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 18,
  },
});

export default Accordions;