import { ThemedText, ThemedView } from '@/components';

import { AccessibilityLevel } from '@/types/accessibility.types';
import { Card } from '@/components/Card/Card';
import { Info } from 'lucide-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

interface CardsProps {
  level: AccessibilityLevel;
}

const Cards: React.FC<CardsProps> = ({ level }) => {
  if (level === 'A') {
    // Basic card with minimal accessibility
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Basic Cards (Level A)</ThemedText>
        <Card
          title="Basic Card"
          description="A simple card with basic accessibility features"
          index={1}
          icon={Info}
        />
        <ThemedText style={styles.description}>
          Basic accessibility: Simple card layout with title and description
        </ThemedText>
      </ThemedView>
    );
  }

  if (level === 'AA') {
    // Enhanced cards with better accessibility features
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Enhanced Cards (Level AA)</ThemedText>
        <Card
          title="Enhanced Card"
          subtitle="With subtitle"
          description="This card has enhanced accessibility features including subtitle and badge"
          index={1}
          icon={Info}
          badge={{ text: 'New', color: 'white', backgroundColor: '#007AFF' }}
        />
        <Card
          title="Interactive Card"
          description="This card can be pressed and has better focus management"
          index={2}
          icon={Info}
          onPress={() => console.log('Card pressed')}
          showChevron={true}
        />
        <ThemedText style={styles.description}>
          Enhanced accessibility: Better contrast, focus indicators, and interactive elements
        </ThemedText>
      </ThemedView>
    );
  }

  // AAA level: Full accessibility with comprehensive card features
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Full Accessibility Cards (Level AAA)</ThemedText>
      <Card
        title="Full Access Card"
        subtitle="Complete accessibility support"
        description="This card demonstrates all accessibility features including ARIA roles, live regions, and comprehensive screen reader support"
        index={1}
        icon={Info}
        badge={{ text: 'Featured', color: 'white', backgroundColor: '#34C759' }}
        onPress={() => console.log('Featured card pressed')}
        showChevron={true}
      />
      <Card
        title="Switch Card"
        description="Card with integrated switch control for comprehensive accessibility"
        index={2}
        icon={Info}
        switch={{
          value: true,
          onValueChange: (value) => console.log('Switch toggled:', value),
        }}
      />
      <Card
        title="Disabled Card"
        description="This card is disabled to show accessibility state management"
        index={3}
        icon={Info}
        disabled={true}
      />
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
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default Cards;
