import { StyleSheet, View } from 'react-native';
import { ThemedText, ThemedView } from '@/components';

import { AccessibilityLevel } from '@/types/accessibility.types';
import { Button } from '@/components/ui/Button';
import React from 'react';

interface ButtonsProps {
  level: AccessibilityLevel;
}

const Buttons: React.FC<ButtonsProps> = ({ level }) => {
  if (level === 'A') {
    // Basic button with minimal accessibility
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Basic Buttons (Level A)</ThemedText>
        <View style={styles.buttonRow}>
          <Button preset="filled" onPress={() => console.log('Basic button pressed')}>
            Basic Button
          </Button>
        </View>
        <ThemedText style={styles.description}>
          Basic accessibility: Simple button with basic onPress functionality
        </ThemedText>
      </ThemedView>
    );
  }

  if (level === 'AA') {
    // Enhanced buttons with better accessibility features
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Enhanced Buttons (Level AA)</ThemedText>
        <View style={styles.buttonRow}>
          <Button preset="filled" onPress={() => console.log('Primary button pressed')}>
            Primary Button
          </Button>
          <Button preset="default" onPress={() => console.log('Secondary button pressed')}>
            Secondary Button
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button preset="reversed" onPress={() => console.log('Reversed button pressed')}>
            Reversed Button
          </Button>
        </View>
        <ThemedText style={styles.description}>
          Enhanced accessibility: Better contrast, focus management, and multiple button styles
        </ThemedText>
      </ThemedView>
    );
  }

  // AAA level: Full accessibility with comprehensive button features
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Full Accessibility Buttons (Level AAA)</ThemedText>
      <View style={styles.buttonRow}>
        <Button preset="filled" onPress={() => console.log('Primary button pressed')}>
          Primary Action
        </Button>
        <Button preset="default" onPress={() => console.log('Secondary button pressed')}>
          Secondary Action
        </Button>
      </View>
      <View style={styles.buttonRow}>
        <Button preset="reversed" onPress={() => console.log('Reversed button pressed')}>
          Alternative Action
        </Button>
        <Button
          preset="filled"
          onPress={() => console.log('Disabled button pressed')}
          disabled={true}
        >
          Disabled Button
        </Button>
      </View>
      <ThemedText style={styles.description}>
        Full accessibility: ARIA labels, keyboard navigation, screen reader support, and
        comprehensive button states
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
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default Buttons;
