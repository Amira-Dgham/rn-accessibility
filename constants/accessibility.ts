import { AccessibilityComponent, AccessibilityLevel, AccessibilityTool } from '@/types/accessibility';
import { FeatureRoute } from '@/types/navigation';
import { Code, LucideIcon, Shield, Target, Users } from 'lucide-react-native';

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

export const ACCESSIBILITY_COMPONENTS: AccessibilityComponent[] = [
  { title: 'Accordions', route: '/accessibility-components/accordions' },
  { title: 'Alerts', route: '/accessibility-components/alerts' },
  { title: 'Buttons', route: '/accessibility-components/buttons' },
  { title: 'Cards', route: '/accessibility-components/cards' },
  { title: 'Charts', route: '/accessibility-components/charts' },
  { title: 'Checkboxes', route: '/accessibility-components/checkboxes' },
  { title: 'ConfirmationDialog', route: '/accessibility-components/confirmation-dialog' },
  { title: 'DataTable', route: '/accessibility-components/data-table' },
  { title: 'DateTimePicker', route: '/accessibility-components/date-time-picker' },
  { title: 'DeviceOrientation', route: '/accessibility-components/device-orientation' },
  { title: 'ErrorValidation', route: '/accessibility-components/error-validation' },
  { title: 'EscapeAction', route: '/accessibility-components/escape-action' },
  { title: 'FocusManagement', route: '/accessibility-components/focus-management' },
  { title: 'GroupingControls', route: '/accessibility-components/grouping-controls' },
  { title: 'HeadingLevel', route: '/accessibility-components/heading-level' },
  { title: 'Images', route: '/accessibility-components/images' },
  { title: 'LargeContentViewer', route: '/accessibility-components/large-content-viewer' },
  { title: 'Links', route: '/accessibility-components/links' },
  { title: 'Lists', route: '/accessibility-components/lists' },
  { title: 'Menu', route: '/accessibility-components/menu' },
  { title: 'Pickers', route: '/accessibility-components/pickers' },
  { title: 'PopOvers', route: '/accessibility-components/popovers' },
  { title: 'ProgressIndicators', route: '/accessibility-components/progress-indicators' },
  { title: 'RadioButton', route: '/accessibility-components/radio-button' },
  { title: 'SegmentedControl', route: '/accessibility-components/segmented-control' },
  { title: 'Sheets', route: '/accessibility-components/sheets' },
  { title: 'Sliders', route: '/accessibility-components/sliders' },
  { title: 'Switches', route: '/accessibility-components/switches' },
  { title: 'TextInput', route: '/accessibility-components/text-input' },
  { title: 'Tabs', route: '/accessibility-components/tabs' },
  { title: 'WebView', route: '/accessibility-components/webview' },
  { title: 'Video', route: '/accessibility-components/video' },
  { title: 'ReduceMotion', route: '/accessibility-components/reduce-motion' },
  { title: 'TimeLimits', route: '/accessibility-components/time-limits' },
  { title: 'GesturesAlternatives', route: '/accessibility-components/gestures-alternatives' },
  { title: 'Draggable', route: '/accessibility-components/draggable' },
  { title: 'Language', route: '/accessibility-components/language' },
  { title: 'Comprehension', route: '/accessibility-components/comprehension' },
];

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



