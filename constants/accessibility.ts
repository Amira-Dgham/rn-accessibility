// src/constants/accessibility.ts

import { AccessibilityLevelConfig } from '@/models';
import { AccessibilityLevel } from '@/types/accessibility';
import { Shield, Target, Users, Zap } from 'lucide-react-native';

export const ACCESSIBILITY_LEVEL_CONFIG: Record<AccessibilityLevel, AccessibilityLevelConfig> = {
    A: {
        name: 'A',
        description: 'Minimum level of conformance',
        contrastRatio: 3,
    },
    AA: {
        name: 'AA',
        description: 'Standard level of conformance',
        contrastRatio: 4.5,
    },
    AAA: {
        name: 'AAA',
        description: 'Enhanced level of conformance',
        contrastRatio: 7,
    },
    none: {
        name: 'None',
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
    },
    {
        key: 'componentsSamples',
        icon: Target,
        title: 'Components Samples',
        description: 'Interactive examples of accessible UI components',
    },
    {
        key: 'userTesting',
        icon: Users,
        title: 'User Testing',
        description: 'Tools and guidelines for accessibility user testing',
    },
    {
        key: 'quickChecks',
        icon: Zap,
        title: 'Quick Checks',
        description: 'Rapid accessibility auditing and validation tools',
    },
];