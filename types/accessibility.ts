import { LucideIcon } from "lucide-react-native";
import { FeatureRoute } from "./navigation";

export const AccessibilityLevel = {
    A: 'A',
    AA: 'AA',
    AAA: 'AAA',
    NONE: 'none',
} as const;

export type AccessibilityLevel = (typeof AccessibilityLevel)[keyof typeof AccessibilityLevel]; export type BadgeSize = 'small' | 'medium' | 'large';

export type AccessibilityFeature = {
    key: string;
    icon: LucideIcon;
    title: string;
    description: string;
    route: FeatureRoute;
};
