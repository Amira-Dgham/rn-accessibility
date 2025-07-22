import { AccessibilityComponent, AccessibilityLevel } from '@/types/accessibility';
import { FeatureRoute } from '@/types/navigation';
import { LucideIcon, Shield, Target, Users, Zap } from 'lucide-react-native';

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
      route: null,
    },
    {
      key: 'quickChecks',
      icon: Zap,
      route: null,
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
