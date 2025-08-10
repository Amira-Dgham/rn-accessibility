import { TextInput as RNTextInput, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { ThemedText, ThemedView } from '@/components';

import { AccessibilityLevel } from '@/types/accessibility.types';

interface TextInputsProps {
  level: AccessibilityLevel;
}

const TextInputs: React.FC<TextInputsProps> = ({ level }) => {
  const [textValues, setTextValues] = useState<Record<string, string>>({
    input1: '',
    input2: '',
    input3: '',
  });

  const handleTextChange = (key: string, value: string) => {
    setTextValues((prev) => ({ ...prev, [key]: value }));
  };

  if (level === 'A') {
    // Basic text input with minimal accessibility
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Basic Text Input (Level A)</ThemedText>
        <View style={styles.inputContainer}>
          <ThemedText style={styles.label}>Basic input:</ThemedText>
          <RNTextInput
            style={styles.basicInput}
            value={textValues.input1}
            onChangeText={(value) => handleTextChange('input1', value)}
            placeholder="Enter text here"
          />
        </View>
        <ThemedText style={styles.description}>
          Basic accessibility: Simple text input with basic placeholder
        </ThemedText>
      </ThemedView>
    );
  }

  if (level === 'AA') {
    // Enhanced text inputs with better accessibility features
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Enhanced Text Inputs (Level AA)</ThemedText>
        <View style={styles.inputContainer}>
          <ThemedText style={styles.label}>Enhanced input:</ThemedText>
          <RNTextInput
            style={styles.enhancedInput}
            value={textValues.input1}
            onChangeText={(value) => handleTextChange('input1', value)}
            placeholder="Enter text here with better accessibility"
            accessibilityLabel="Enhanced text input with better contrast and focus management"
          />
        </View>
        <View style={styles.inputContainer}>
          <ThemedText style={styles.label}>Another enhanced input:</ThemedText>
          <RNTextInput
            style={styles.enhancedInput}
            value={textValues.input2}
            onChangeText={(value) => handleTextChange('input2', value)}
            placeholder="Another enhanced input"
            accessibilityLabel="Another enhanced text input with improved accessibility"
          />
        </View>
        <ThemedText style={styles.description}>
          Enhanced accessibility: Better contrast, focus indicators, and accessibility labels
        </ThemedText>
      </ThemedView>
    );
  }

  // AAA level: Full accessibility with comprehensive text input features
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Full Accessibility Text Inputs (Level AAA)</ThemedText>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.label}>Primary input:</ThemedText>
        <RNTextInput
          style={styles.fullInput}
          value={textValues.input1}
          onChangeText={(value) => handleTextChange('input1', value)}
          placeholder="Primary text input with full accessibility support"
          accessibilityLabel="Primary text input with comprehensive accessibility features including ARIA roles and screen reader support"
        />
      </View>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.label}>Secondary input:</ThemedText>
        <RNTextInput
          style={styles.fullInput}
          value={textValues.input2}
          onChangeText={(value) => handleTextChange('input2', value)}
          placeholder="Secondary text input with full accessibility"
          accessibilityLabel="Secondary text input with comprehensive accessibility features"
        />
      </View>
      <View style={styles.inputContainer}>
        <ThemedText style={styles.label}>Disabled input:</ThemedText>
        <RNTextInput
          style={[styles.fullInput, styles.disabledInput]}
          value={textValues.input3}
          onChangeText={(value) => handleTextChange('input3', value)}
          placeholder="This input is disabled"
          editable={false}
          accessibilityLabel="Disabled text input demonstrating accessibility state management"
        />
      </View>
      <ThemedText style={styles.description}>
        Full accessibility: ARIA roles, live regions, high contrast, keyboard navigation, screen
        reader announcements, and comprehensive state management
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
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  basicInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  enhancedInput: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  fullInput: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  disabledInput: {
    backgroundColor: '#f2f2f7',
    borderColor: '#c7c7cc',
    color: '#8e8e93',
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default TextInputs;
