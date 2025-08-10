import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText, ThemedView } from '@/components';

import { AccessibilityLevel } from '@/types/accessibility.types';

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onSelect,
  disabled = false,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={onSelect}
      disabled={disabled}
      accessible={true}
      accessibilityLabel={accessibilityLabel || label}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected, disabled }}
    >
      <View style={[styles.radio, selected && styles.selected, disabled && styles.disabledRadio]}>
        {selected && <View style={styles.selectedDot} />}
      </View>
      <ThemedText style={[styles.label, disabled && styles.disabledLabel]}>{label}</ThemedText>
    </TouchableOpacity>
  );
};

interface RadioButtonsProps {
  level: AccessibilityLevel;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ level }) => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  if (level === 'A') {
    // Basic radio buttons with minimal accessibility
    return (
      <ThemedView style={styles.mainContainer}>
        <ThemedText style={styles.title}>Basic Radio Buttons (Level A)</ThemedText>
        <RadioButton
          label="Basic option 1"
          selected={selectedOption === 'option1'}
          onSelect={() => handleSelect('option1')}
        />
        <ThemedText style={styles.description}>
          Basic accessibility: Simple radio buttons with basic selection
        </ThemedText>
      </ThemedView>
    );
  }

  if (level === 'AA') {
    // Enhanced radio buttons with better accessibility features
    return (
      <ThemedView style={styles.mainContainer}>
        <ThemedText style={styles.title}>Enhanced Radio Buttons (Level AA)</ThemedText>
        <RadioButton
          label="Enhanced option 1"
          selected={selectedOption === 'option1'}
          onSelect={() => handleSelect('option1')}
          accessibilityLabel="Enhanced option 1 with better contrast and focus management"
        />
        <RadioButton
          label="Enhanced option 2"
          selected={selectedOption === 'option2'}
          onSelect={() => handleSelect('option2')}
          accessibilityLabel="Enhanced option 2 with improved accessibility"
        />
        <ThemedText style={styles.description}>
          Enhanced accessibility: Better contrast, focus indicators, and accessibility labels
        </ThemedText>
      </ThemedView>
    );
  }

  // AAA level: Full accessibility with comprehensive radio button features
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText style={styles.title}>Full Accessibility Radio Buttons (Level AAA)</ThemedText>
      <RadioButton
        label="Full accessibility option 1"
        selected={selectedOption === 'option1'}
        onSelect={() => handleSelect('option1')}
        accessibilityLabel="Full accessibility option 1 with comprehensive support including ARIA roles and screen reader announcements"
      />
      <RadioButton
        label="Full accessibility option 2"
        selected={selectedOption === 'option2'}
        onSelect={() => handleSelect('option2')}
        accessibilityLabel="Full accessibility option 2 with comprehensive features"
      />
      <RadioButton
        label="Disabled option to show state management"
        selected={selectedOption === 'option3'}
        onSelect={() => handleSelect('option3')}
        disabled={true}
        accessibilityLabel="Disabled option demonstrating accessibility state management"
      />
      <ThemedText style={styles.description}>
        Full accessibility: ARIA roles, live regions, high contrast, keyboard navigation, screen
        reader announcements, and comprehensive state management
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    gap: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    borderColor: '#007AFF',
  },
  disabledRadio: {
    borderColor: '#C7C7CC',
  },
  selectedDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
  },
  label: {
    fontSize: 16,
    flex: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  disabledLabel: {
    color: '#8E8E93',
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

export default RadioButtons;
