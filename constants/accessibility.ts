import { AccessibilityLevel } from '@/types/accessibility';
import { FeatureRoute } from '@/types/navigation';
import { LucideIcon, Shield, Target, Users, Zap } from 'lucide-react-native';

// Base configuration (static data that doesn't need translation)
export const ACCESSIBILITY_LEVEL_BASE_CONFIG: Record<
  AccessibilityLevel,
  { contrastRatio: number }
> = {
  A: { contrastRatio: 3 },
  AA: { contrastRatio: 4.5 },
  AAA: { contrastRatio: 7 },
  none: { contrastRatio: 0 },
};

export const ACCESSIBILITY_FEATURES_BASE: {
  key: string;
  icon: LucideIcon;
  route: FeatureRoute;
}[] = [
  {
    key: 'wcagCompliance',
    icon: Shield,
    route: '/guidelines',
  },
  {
    key: 'componentsSamples',
    icon: Target,
    route: '/components',
  },
  {
    key: 'userTesting',
    icon: Users,
    route: null,
  },
  {
    key: 'quickChecks',
    icon: Zap,
    route: null,
  },
];
