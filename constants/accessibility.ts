// src/constants/accessibility.ts

import { AccessibilityLevelConfig } from '@/models';
import { Colors } from '@/theme';
import { AccessibilityLevel } from '@/types/accessibility';
import { Shield, Target, Users, Zap } from 'lucide-react-native';

export const ACCESSIBILITY_LEVEL_CONFIG: Record<AccessibilityLevel, AccessibilityLevelConfig> = {
    A: {
        name: 'A',
        color: Colors.light.green,
        backgroundColor: Colors.light.greenBackground,
        description: 'Minimum level of conformance',
        contrastRatio: 3,
    },
    AA: {
        name: 'AA',
        color: Colors.light.orange,
        backgroundColor: Colors.light.orangeBackground,
        description: 'Standard level of conformance',
        contrastRatio: 4.5,
    },
    AAA: {
        name: 'AAA',
        color: Colors.light.blue,
        backgroundColor: Colors.light.blueBackground,
        description: 'Enhanced level of conformance',
        contrastRatio: 7,
    },
    none: {
        name: 'None',
        color: '#9ca3af',
        backgroundColor: '#f9fafb',
        description: 'No accessibility requirements',
        contrastRatio: 0,
    },
};
export const ACCESSIBILITY_FEATURES = [
    {
        key: 'wcagCompliance',
        icon: Shield,
        title: 'WCAG Compliance', // Keep for fallback
        description: 'Learn and implement WCAG 2.1 guidelines across all levels',
        color: Colors.light.blue,
    },
    {
        key: 'componentsSamples',
        icon: Target,
        title: 'Components Samples',
        description: 'Interactive examples of accessible UI components',
        color: Colors.light.green,
    },
    {
        key: 'userTesting',
        icon: Users,
        title: 'User Testing',
        description: 'Tools and guidelines for accessibility user testing',
        color: Colors.light.orange,
    },
    {
        key: 'quickChecks',
        icon: Zap,
        title: 'Quick Checks',
        description: 'Rapid accessibility auditing and validation tools',
        color: Colors.light.red,
    },
];