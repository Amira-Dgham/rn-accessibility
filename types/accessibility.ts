
export const AccessibilityLevel = {
    A: 'A',
    AA: 'AA',
    AAA: 'AAA',
    NONE: 'none',
} as const;

export type AccessibilityLevel = (typeof AccessibilityLevel)[keyof typeof AccessibilityLevel]; export type BadgeSize = 'small' | 'medium' | 'large';
