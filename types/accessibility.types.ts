import { LucideIcon } from 'lucide-react-native';

export const AccessibilityLevel = {
  A: 'A',
  AA: 'AA',
  AAA: 'AAA',
  NONE: 'none',
} as const;

export type AccessibilityLevel = (typeof AccessibilityLevel)[keyof typeof AccessibilityLevel];

export type BadgeSize = 'small' | 'medium' | 'large';

export type ComponentRequirement = {
  id: string;
  text: string;
};

export type AccessibilityComponent = {
  title: string;
  route: string;
  description?: string;
  requirements?: {
    A?: Record<string, string>;
    AA?: Record<string, string>;
    AAA?: Record<string, string>;
  };
};

export type AccessibilityTool = {
  id: string;
  icon: LucideIcon;
  localeKey: string;
  url: string;
};
