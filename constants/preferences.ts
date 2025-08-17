import { PreferenceItem } from '@/types/preferences.types';

export const PREFERENCES_CONFIG: PreferenceItem[] = [
  {
    key: 'fontSize',
    title: 'accessibility.preferences.fontSize.title',
    description: 'accessibility.preferences.fontSize.description',
    type: 'slider',
    route: '/settings/font-size-customization',
  },
  {
    key: 'theme',
    title: 'accessibility.preferences.theme.title',
    description: 'accessibility.preferences.theme.description',
    type: 'switch',
  },
  {
    key: 'contrast',
    title: 'accessibility.preferences.contrast.title',
    description: 'accessibility.preferences.contrast.description',
    type: 'switch',
  },
  {
    key: 'reduceMotion',
    title: 'accessibility.preferences.reduceMotion.title',
    description: 'accessibility.preferences.reduceMotion.description',
    type: 'switch',
  },
  {
    key: 'screenReader',
    title: 'accessibility.preferences.screenReader.title',
    description: 'accessibility.preferences.screenReader.description',
    type: 'switch',
  },
  {
    key: 'language',
    title: 'accessibility.preferences.language.title',
    description: 'accessibility.preferences.language.description',
    type: 'select',
    route: '/settings/langugue-customization',
  },
  {
    key: 'textToSpeech',
    title: 'accessibility.preferences.textToSpeech.title',
    description: 'accessibility.preferences.textToSpeech.description',
    type: 'switch',
  },
  {
    key: 'haptics',
    title: 'accessibility.preferences.haptics.title',
    description: 'accessibility.preferences.haptics.description',
    type: 'switch',
  },
  {
    key: 'customColors',
    title: 'accessibility.preferences.customColors.title',
    description: 'accessibility.preferences.customColors.description',
    type: 'select',
    route: '/settings/colors-customization',
  },
  {
    key: 'simpleNavigation',
    title: 'accessibility.preferences.simpleNavigation.title',
    description: 'accessibility.preferences.simpleNavigation.description',
    type: 'switch',
  },
] as const;

export const DEFAULT_PREFERENCES = {
  fontSize: 16,
  isDarkMode: false,
  isHighContrast: false,
  isReduceMotion: false,
  isScreenReaderEnabled: false,
  isTextToSpeechEnabled: false,
  isHapticsEnabled: true,
  isSimpleNavigation: false,
} as const;

export type PreferenceKey = (typeof PREFERENCES_CONFIG)[number]['key'];
