const tintColorLight = '#1e40af';
const tintColorDark = '#ffffff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#ffffff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    purple: '#9b59b6',
    purpleBackground: '#f3e8fc',
    purpleText: '#4a0072',
    green: '#059669',
    greenBackground: '#ecfdf5',
    orange: '#ea580c',
    orangeBackground: '#fff7ed',
    red: '#dc2626',
    redBackground: '#fee2e2',
    blue: '#1e40af',
    blueBackground: '#eff6ff',
    gray: '#6B7280',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    purple: '#d7aefb',
    purpleBackground: '#2a1a37',
    purpleText: '#e1bfff',
    green: '#34d399',
    greenBackground: '#052e24',
    orange: '#f97316',
    orangeBackground: '#3b1e17',
    red: '#dc2626',
    redBackground: '#7f1d1d',
    blue: '#60a5fa',
    blueBackground: '#1e293b',
    gray: '#9CA3AF',
  },
} as const;

export type ColorKeys = keyof typeof Colors.light;
