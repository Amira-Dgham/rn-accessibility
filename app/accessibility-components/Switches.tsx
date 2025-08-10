import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText, ThemedView } from '@/components';

import { AccessibilityLevel } from '@/types/accessibility.types';
import { Switch } from '@/components/ui/Switch';

interface SwitchesProps {
  level: AccessibilityLevel;
}

const Switches: React.FC<SwitchesProps> = ({ level }) => {
  const [switchStates, setSwitchStates] = useState<Record<string, boolean>>({
    switch1: false,
    switch2: false,
    switch3: false,
  });

  const handleToggle = (key: string, value: boolean) => {
    setSwitchStates((prev) => ({ ...prev, [key]: value }));
  };

  if (level === 'A') {
    // Basic switch with minimal accessibility
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Basic Switch (Level A)</ThemedText>
        <View style={styles.switchRow}>
          <ThemedText>Basic toggle:</ThemedText>
          <Switch
            value={switchStates.switch1}
            onValueChange={(value) => handleToggle('switch1', value)}
          />
        </View>
        <ThemedText style={styles.description}>
          Basic accessibility: Simple switch with basic toggle functionality
        </ThemedText>
      </ThemedView>
    );
  }

  if (level === 'AA') {
    // Enhanced switches with better accessibility features
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Enhanced Switches (Level AA)</ThemedText>
        <View style={styles.switchRow}>
          <ThemedText>Enhanced toggle:</ThemedText>
          <Switch
            value={switchStates.switch1}
            onValueChange={(value) => handleToggle('switch1', value)}
          />
        </View>
        <View style={styles.switchRow}>
          <ThemedText>Another enhanced toggle:</ThemedText>
          <Switch
            value={switchStates.switch2}
            onValueChange={(value) => handleToggle('switch2', value)}
          />
        </View>
        <ThemedText style={styles.description}>
          Enhanced accessibility: Better contrast, focus indicators, and improved toggle states
        </ThemedText>
      </ThemedView>
    );
  }

  // AAA level: Full accessibility with comprehensive switch features
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Full Accessibility Switches (Level AAA)</ThemedText>
      <View style={styles.switchRow}>
        <ThemedText>Primary toggle:</ThemedText>
        <Switch
          value={switchStates.switch1}
          onValueChange={(value) => handleToggle('switch1', value)}
        />
      </View>
      <View style={styles.switchRow}>
        <ThemedText>Secondary toggle:</ThemedText>
        <Switch
          value={switchStates.switch2}
          onValueChange={(value) => handleToggle('switch2', value)}
        />
      </View>
      <View style={styles.switchRow}>
        <ThemedText>Disabled toggle:</ThemedText>
        <Switch
          value={switchStates.switch3}
          onValueChange={(value) => handleToggle('switch3', value)}
          disabled={true}
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
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default Switches;
