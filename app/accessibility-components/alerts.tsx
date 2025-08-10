import { ThemedText, ThemedView } from '@/components';

import { AccessibilityLevel } from '@/types/accessibility.types';
import { Alert } from '@/components/Alert';
import React from 'react';
import { StyleSheet } from 'react-native';

interface AlertsProps {
  level: AccessibilityLevel;
}

const Alerts: React.FC<AlertsProps> = ({ level }) => {
  if (level === 'A') {
    // Basic alert with minimal accessibility
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Basic Alert (Level A)</ThemedText>
        <Alert
          title="Basic Alert"
          message="This is a basic alert message with minimal accessibility features"
          type="info"
          accessibilityLevel="A"
        />
        <ThemedText style={styles.description}>
          Basic accessibility: Simple text content with basic styling
        </ThemedText>
      </ThemedView>
    );
  }

  if (level === 'AA') {
    // Enhanced alert with better contrast and focus management
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Enhanced Alert (Level AA)</ThemedText>
        <Alert
          title="Enhanced Alert"
          message="This alert has better contrast and focus management"
          type="success"
          accessibilityLevel="AA"
        />
        <Alert
          title="Warning Alert"
          message="This is a warning message with enhanced accessibility"
          type="warning"
          accessibilityLevel="AA"
        />
        <ThemedText style={styles.description}>
          Enhanced accessibility: Better color contrast, focus indicators, and semantic markup
        </ThemedText>
      </ThemedView>
    );
  }

  // AAA level: Full accessibility with multiple alert types and comprehensive features
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Full Accessibility Alert (Level AAA)</ThemedText>
      <Alert
        title="Success Alert"
        message="This alert has complete accessibility features"
        type="success"
        accessibilityLevel="AAA"
      />
      <Alert
        title="Error Alert"
        message="This is an error message with full accessibility support"
        type="error"
        accessibilityLevel="AAA"
      />
      <Alert
        title="Info Alert"
        message="Information message with comprehensive accessibility"
        type="info"
        accessibilityLevel="AAA"
      />
      <ThemedText style={styles.description}>
        Full accessibility: ARIA roles, live regions, high contrast, keyboard navigation, and screen
        reader announcements
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default Alerts;
