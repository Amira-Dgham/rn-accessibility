import AccessibilityBadge from '@/components/Badge';
import { router } from 'expo-router';
import { Shield, Target, Users, Zap } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const features = [
  {
    icon: Shield,
    title: 'WCAG Compliance',
    description: 'Learn and implement WCAG 2.1 guidelines across all levels',
    color: '#1e40af',
  },
  {
    icon: Target,
    title: 'Component Examples',
    description: 'Interactive examples of accessible UI components',
    color: '#059669',
  },
  {
    icon: Users,
    title: 'User Testing',
    description: 'Tools and guidelines for accessibility user testing',
    color: '#ea580c',
  },
  {
    icon: Zap,
    title: 'Quick Checks',
    description: 'Rapid accessibility auditing and validation tools',
    color: '#dc2626',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title} accessibilityRole="header">
            Accessibility Guide
          </Text>
          <Text style={styles.subtitle}>
            Master digital accessibility with comprehensive examples and guidelines
          </Text>
        </View>

        <View style={styles.levelContainer}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            Compliance Levels
          </Text>
          <View style={styles.levelGrid}>
            <AccessibilityBadge level="A" size="large" />
            <AccessibilityBadge level="AA" size="large" />
            <AccessibilityBadge level="AAA" size="large" />
          </View>
        </View>

        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            Features
          </Text>
          {features.map((feature, index) => (
            <TouchableOpacity
              key={index}
              style={styles.featureCard}
              accessibilityRole="button"
              accessibilityLabel={`${feature.title}: ${feature.description}`}
              onPress={() => {
                if (feature.title === 'Component Examples') {
                  router.push('/components');
                } else if (feature.title === 'WCAG Compliance') {
                  router.push('/guidelines');
                }
              }}
            >
              <View style={[styles.iconContainer, { backgroundColor: `${feature.color}15` }]}>
                <feature.icon size={24} color={feature.color} />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  levelContainer: {
    padding: 24,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 16,
  },
  levelGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  featuresContainer: {
    padding: 24,
    paddingTop: 0,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
    lineHeight: 20,
  },
});
