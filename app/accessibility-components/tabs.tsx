import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText, ThemedView } from '@/components';

import { AccessibilityLevel } from '@/types/accessibility.types';

interface TabProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
  accessibilityLabel?: string;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onPress, accessibilityLabel }) => {
  return (
    <TouchableOpacity
      style={[styles.tab, isActive && styles.activeTab]}
      onPress={onPress}
      accessible={true}
      accessibilityLabel={accessibilityLabel || label}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
    >
      <ThemedText style={[styles.tabLabel, isActive && styles.activeTabLabel]}>{label}</ThemedText>
    </TouchableOpacity>
  );
};

interface TabsProps {
  level: AccessibilityLevel;
}

const Tabs: React.FC<TabsProps> = ({ level }) => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
  };

  const getActiveContent = () => {
    const activeTabData = tabs.find((tab) => tab.id === activeTab);
    return activeTabData?.content || '';
  };

  if (level === 'A') {
    // Basic tabs with minimal accessibility
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Basic Tabs (Level A)</ThemedText>
        <View style={styles.tabContainer}>
          {tabs.slice(0, 2).map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onPress={() => handleTabPress(tab.id)}
            />
          ))}
        </View>
        <View style={styles.contentContainer}>
          <ThemedText>{getActiveContent()}</ThemedText>
        </View>
        <ThemedText style={styles.description}>
          Basic accessibility: Simple tabs with basic content switching
        </ThemedText>
      </ThemedView>
    );
  }

  if (level === 'AA') {
    // Enhanced tabs with better accessibility features
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Enhanced Tabs (Level AA)</ThemedText>
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onPress={() => handleTabPress(tab.id)}
              accessibilityLabel={`${tab.label} tab with enhanced accessibility`}
            />
          ))}
        </View>
        <View style={styles.contentContainer}>
          <ThemedText>{getActiveContent()}</ThemedText>
        </View>
        <ThemedText style={styles.description}>
          Enhanced accessibility: Better contrast, focus indicators, and accessibility labels
        </ThemedText>
      </ThemedView>
    );
  }

  // AAA level: Full accessibility with comprehensive tab features
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Full Accessibility Tabs (Level AAA)</ThemedText>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onPress={() => handleTabPress(tab.id)}
            accessibilityLabel={`${tab.label} tab with comprehensive accessibility support including ARIA roles and screen reader announcements`}
          />
        ))}
      </View>
      <View style={styles.contentContainer}>
        <ThemedText style={styles.contentTitle}>
          Active Tab: {tabs.find((tab) => tab.id === activeTab)?.label}
        </ThemedText>
        <ThemedText>{getActiveContent()}</ThemedText>
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
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007AFF',
  },
  tabLabel: {
    fontSize: 16,
    color: '#666',
  },
  activeTabLabel: {
    color: '#007AFF',
    fontWeight: '600',
  },
  contentContainer: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    minHeight: 100,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default Tabs;
