export type PreferenceItemType = 'switch' | 'select' | 'slider';

export interface PreferenceItem {
  key: string;
  title: string;
  description: string;
  icon?: string;
  type: PreferenceItemType;
  route?: string;
}

export interface ThemePreferences {
  isDarkMode: boolean;
  isHighContrast: boolean;
  customTextColor: string;
  customBackgroundColor: string;
}

export interface AccessibilityPreferences {
  fontSize: number;
  isReduceMotion: boolean;
  isScreenReaderEnabled: boolean;
  isTextToSpeechEnabled: boolean;
  isHapticsEnabled: boolean;
  isSimpleNavigation: boolean;
}

export type PreferencesState = ThemePreferences & AccessibilityPreferences;
