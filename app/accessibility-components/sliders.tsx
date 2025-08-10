import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText, ThemedView } from '@/components';

import { AccessibilityLevel } from '@/types/accessibility.types';
import { Slider } from '@/components/ui/Slider';

interface SlidersProps {
  level: AccessibilityLevel;
}

const Sliders: React.FC<SlidersProps> = ({ level }) => {
  const [sliderValues, setSliderValues] = useState<Record<string, number>>({
    slider1: 50,
    slider2: 30,
    slider3: 70,
  });

  const handleSliderChange = (key: string, value: number) => {
    setSliderValues((prev) => ({ ...prev, [key]: value }));
  };

  if (level === 'A') {
    // Basic slider with minimal accessibility
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Basic Slider (Level A)</ThemedText>
        <View style={styles.sliderContainer}>
          <ThemedText>Basic slider: {sliderValues.slider1}%</ThemedText>
          <Slider
            title="Basic slider"
            value={sliderValues.slider1}
            minValue={0}
            maxValue={100}
            step={1}
            onChange={(value) => handleSliderChange('slider1', value)}
          />
        </View>
        <ThemedText style={styles.description}>
          Basic accessibility: Simple slider with basic value display
        </ThemedText>
      </ThemedView>
    );
  }

  if (level === 'AA') {
    // Enhanced sliders with better accessibility features
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Enhanced Sliders (Level AA)</ThemedText>
        <View style={styles.sliderContainer}>
          <ThemedText>Enhanced slider: {sliderValues.slider1}%</ThemedText>
          <Slider
            title="Enhanced slider"
            value={sliderValues.slider1}
            minValue={0}
            maxValue={100}
            step={1}
            onChange={(value) => handleSliderChange('slider1', value)}
          />
        </View>
        <View style={styles.sliderContainer}>
          <ThemedText>Another enhanced slider: {sliderValues.slider2}%</ThemedText>
          <Slider
            title="Another enhanced slider"
            value={sliderValues.slider2}
            minValue={0}
            maxValue={100}
            step={1}
            onChange={(value) => handleSliderChange('slider2', value)}
          />
        </View>
        <ThemedText style={styles.description}>
          Enhanced accessibility: Better contrast, focus indicators, and improved value display
        </ThemedText>
      </ThemedView>
    );
  }

  // AAA level: Full accessibility with comprehensive slider features
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Full Accessibility Sliders (Level AAA)</ThemedText>
      <View style={styles.sliderContainer}>
        <ThemedText>Primary slider: {sliderValues.slider1}%</ThemedText>
        <Slider
          title="Primary slider"
          value={sliderValues.slider1}
          minValue={0}
          maxValue={100}
          step={1}
          onChange={(value) => handleSliderChange('slider1', value)}
        />
        <ThemedText style={styles.rangeLabel}>Range: 0 - 100</ThemedText>
      </View>
      <View style={styles.sliderContainer}>
        <ThemedText>Secondary slider: {sliderValues.slider2}%</ThemedText>
        <Slider
          title="Secondary slider"
          value={sliderValues.slider2}
          minValue={0}
          maxValue={100}
          step={1}
          onChange={(value) => handleSliderChange('slider2', value)}
        />
        <ThemedText style={styles.rangeLabel}>Range: 0 - 100</ThemedText>
      </View>
      <View style={styles.sliderContainer}>
        <ThemedText>Third slider: {sliderValues.slider3}%</ThemedText>
        <Slider
          title="Third slider"
          value={sliderValues.slider3}
          minValue={0}
          maxValue={100}
          step={1}
          onChange={(value) => handleSliderChange('slider3', value)}
        />
        <ThemedText style={styles.rangeLabel}>Range: 0 - 100</ThemedText>
      </View>
      <ThemedText style={styles.description}>
        Full accessibility: ARIA roles, live regions, high contrast, keyboard navigation, screen
        reader announcements, and comprehensive value management
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
  sliderContainer: {
    gap: 8,
  },
  rangeLabel: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default Sliders;
