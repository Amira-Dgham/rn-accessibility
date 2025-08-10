import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AccessibilityLevel } from '@/types/accessibility.types';
import { Accordion } from '@/components/Accordion';
// src/examples/Accordions.tsx
import { ThemedText } from '@/components';

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
    setExpandedItems((prev) => ({ ...prev, [key]: expanded }));
  };
  if (level === 'A') {
    // Basic accordion with minimal accessibility
    return (
      <View style={styles.container}>
        <ThemedText>Basic Accordion (Level A)</ThemedText>
        <View style={styles.accordionContainer}>
          <Accordion
            title="Basic Accordion Item"
            expanded={expandedItems.item1}
            onToggle={(expanded) => handleToggle('item1', expanded)}
          >
            <ThemedText>
              This is basic accordion content with minimal accessibility features.
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
        <ThemedText>Enhanced Accordion (Level AA)</ThemedText>
        <View style={styles.accordionContainer}>
          <Accordion
            title="Enhanced Accordion Item 1"
            expanded={expandedItems.item1}
            onToggle={(expanded) => handleToggle('item1', expanded)}
          >
            <ThemedText>
              This accordion item has enhanced accessibility features including better contrast and
              focus management.
            </ThemedText>
          </Accordion>
        </View>
      </View>
    );
  }
  if (level === 'AAA') {
    // Basic accordion with minimal accessibility
    return (
      <View style={styles.container}>
        <ThemedText>Basic Accordion (Level A)</ThemedText>
        <View style={styles.accordionContainer}>
          <Accordion
            title="Basic Accordion Item"
            expanded={expandedItems.item1}
            onToggle={(expanded) => handleToggle('item1', expanded)}
          >
            <ThemedText>
              This is basic accordion content with minimal accessibility features.
            </ThemedText>
          </Accordion>
        </View>
      </View>
    );
  }

  // AAA level: Full accessibility with comprehensive accordion features
  return (
    <View style={styles.container}>
      <ThemedText>Full Accessibility Accordion (Level AAA)</ThemedText>
      <View style={styles.accordionContainer}>
        <Accordion
          title="Full Accessibility Item 1"
          expanded={expandedItems.item1}
          onToggle={(expanded) => handleToggle('item1', expanded)}
        >
          <ThemedText>
            This accordion item demonstrates complete accessibility features including ARIA roles,
            live regions, and comprehensive screen reader support.
          </ThemedText>
        </Accordion>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },

  accordionContainer: {
    gap: 8,
  },
});

export default Accordions;
