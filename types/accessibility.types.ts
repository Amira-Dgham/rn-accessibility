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

export interface AccessibilityComponent {
  title: string;
  route: string;
  description: string;
  examples?: any;
  requirements: Record<'A' | 'AA' | 'AAA', Record<string, string>>;
}
export type AccessibilityTool = {
  id: string;
  icon: LucideIcon;
  localeKey: string;
  url: string;
};

