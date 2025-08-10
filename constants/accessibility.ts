import {
  AccessibilityComponent,
  AccessibilityLevel,
  AccessibilityTool,
} from '@/types/accessibility.types';
import { Code, LucideIcon, Shield, Target, Users } from 'lucide-react-native';
import {
  createExamplesFor,
  createI18nKey,
  createRequirementsFor,
  createSlug,
} from '@/config/accessibility/generator';

import { COMPONENT_CONFIG } from '@/config/accessibility/config';
import { FeatureRoute } from '@/types/navigation.types';
import { accessibilityComponentsMap } from '@/config/accessibility/components-map';

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
    route: '/accessibility-testing/accessibility-testing',
  },
];

export const MIN_CONTRAST_RATIO = 4.5;

export const ACCESSIBILITY_COMPONENTS: AccessibilityComponent[] = Object.entries(
  accessibilityComponentsMap,
).map(([name, Component]) => {
  // Fix: Use keyof typeof COMPONENT_CONFIG to ensure type safety
  const config = COMPONENT_CONFIG[name as keyof typeof COMPONENT_CONFIG] || {};
  console.log('config', config);
  const key = createI18nKey(name);

  return {
    title: name,
    route: `/accessibility-components/${createSlug(name)}`,
    description: `accessibility.components.${key}.description`,
    ...(config.hasExamples && {
      examples: createExamplesFor(Component),
    }),
    requirements: createRequirementsFor(key, config.requirements),
  };
});
export const ACCESSIBILITY_TESTING_TOOLS: AccessibilityTool[] = [
  {
    id: 'accessibility-inspector-xcode',
    icon: Code,
    localeKey: 'accessibilityInspectorXcode',
    url: 'https://developer.apple.com/documentation/accessibility/accessibility_inspector',
  },
  {
    id: 'accessibility-scanner-android',
    icon: Code,
    localeKey: 'accessibilityScannerAndroid',
    url: 'https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor',
  },
  {
    id: 'voiceover-ios',
    icon: Code,
    localeKey: 'voiceoverIos',
    url: 'https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios',
  },
  {
    id: 'talkback-android',
    icon: Code,
    localeKey: 'talkbackAndroid',
    url: 'https://support.google.com/accessibility/android/answer/6007100?hl=en',
  },
  {
    id: 'native-accessibility-engine',
    icon: Code,
    localeKey: 'nativeAccessibilityEngine',
    url: 'https://github.com/GoogleChromeLabs/native-accessibility-engine',
  },
  {
    id: 'axe-devtools-react-native',
    icon: Code,
    localeKey: 'axeDevtoolsReactNative',
    url: 'https://www.deque.com/axe/devtools/mobile-accessibility/?utm_campaign=devtools',
  },
  {
    id: 'jest-testing-library-axe',
    icon: Code,
    localeKey: 'jestTestingLibraryAxe',
    url: 'https://www.npmjs.com/package/jest-axe',
  },

  {
    id: 'switch-access-switch-control',
    icon: Code,
    localeKey: 'switchAccessSwitchControl',
    url: 'https://support.google.com/accessibility/android/answer/6122836?hl=en',
  },
  {
    id: 'zoom-screen-magnifier',
    icon: Code,
    localeKey: 'zoomScreenMagnifier',
    url: 'https://support.apple.com/en-us/HT210434',
  },
  {
    id: 'reduce-motion',
    icon: Code,
    localeKey: 'reduceMotion',
    url: 'https://support.apple.com/guide/iphone/reduce-screen-motion-iph3e2e43f/ios',
  },
  {
    id: 'transcriptions-captions',
    icon: Code,
    localeKey: 'transcriptionsCaptions',
    url: 'https://www.w3.org/WAI/media/av/captions/transcripts/',
  },
  {
    id: 'color-contrast-analyzer',
    icon: Code,
    localeKey: 'colorContrastAnalyzer',
    url: 'https://www.tpgi.com/color-contrast-checker/',
  },
  {
    id: 'react-native-eslint-library',
    icon: Code,
    localeKey: 'reactNativeEslintLibrary',
    url: 'https://www.npmjs.com/package/eslint-plugin-react-native-a11y',
  },
];
