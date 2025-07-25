import { LucideIcon } from 'lucide-react-native';

export const AccessibilityLevel = {
  A: 'A',
  AA: 'AA',
  AAA: 'AAA',
  NONE: 'none',
} as const;

export type AccessibilityLevel = (typeof AccessibilityLevel)[keyof typeof AccessibilityLevel];

export type BadgeSize = 'small' | 'medium' | 'large';

export type AccessibilityComponent = {
  title: string;
  route: string;
};

export type AccessibilityTool = {
  id: string;
  icon: LucideIcon;
  localeKey: string;
  url: string;
};
