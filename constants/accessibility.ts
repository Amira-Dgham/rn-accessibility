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

export const ACCESSIBILITY_COMPONENTS: AccessibilityComponent[] = [
  { title: 'Accordions', route: '/(tabs)/components/accordions' },
  { title: 'Alerts', route: '/(tabs)/components/alerts' },
  { title: 'Buttons', route: '/(tabs)/components/buttons' },
  { title: 'Cards', route: '/(tabs)/components/cards' },
  { title: 'Charts', route: '/(tabs)/components/charts' },
  { title: 'Checkboxes', route: '/(tabs)/components/checkboxes' },
  { title: 'ConfirmationDialog', route: '/(tabs)/components/confirmation-dialog' },
  { title: 'DataTable', route: '/(tabs)/components/data-table' },
  { title: 'DateTimePicker', route: '/(tabs)/components/date-time-picker' },
  { title: 'DeviceOrientation', route: '/(tabs)/components/device-orientation' },
  { title: 'ErrorValidation', route: '/(tabs)/components/error-validation' },
  { title: 'EscapeAction', route: '/(tabs)/components/escape-action' },
  { title: 'FocusManagement', route: '/(tabs)/components/focus-management' },
  { title: 'GroupingControls', route: '/(tabs)/components/grouping-controls' },
  { title: 'HeadingLevel', route: '/(tabs)/components/heading-level' },
  { title: 'Images', route: '/(tabs)/components/images' },
  { title: 'LargeContentViewer', route: '/(tabs)/components/large-content-viewer' },
  { title: 'Links', route: '/(tabs)/components/links' },
  { title: 'Lists', route: '/(tabs)/components/lists' },
  { title: 'Menu', route: '/(tabs)/components/menu' },
  { title: 'Pickers', route: '/(tabs)/components/pickers' },
  { title: 'PopOvers', route: '/(tabs)/components/popovers' },
  { title: 'ProgressIndicators', route: '/(tabs)/components/progress-indicators' },
  { title: 'RadioButton', route: '/(tabs)/components/radio-button' },
  { title: 'SegmentedControl', route: '/(tabs)/components/segmented-control' },
  { title: 'Sheets', route: '/(tabs)/components/sheets' },
  { title: 'Sliders', route: '/(tabs)/components/sliders' },
  { title: 'Switches', route: '/(tabs)/components/switches' },
  { title: 'TextInput', route: '/(tabs)/components/text-input' },
  { title: 'Tabs', route: '/(tabs)/components/tabs' },
  { title: 'WebView', route: '/(tabs)/components/webview' },
  { title: 'Video', route: '/(tabs)/components/video' },
  { title: 'ReduceMotion', route: '/(tabs)/components/reduce-motion' },
  { title: 'TimeLimits', route: '/(tabs)/components/time-limits' },
  { title: 'GesturesAlternatives', route: '/(tabs)/components/gestures-alternatives' },
  { title: 'Draggable', route: '/(tabs)/components/draggable' },
  { title: 'Language', route: '/(tabs)/components/language' },
  { title: 'Comprehension', route: '/(tabs)/components/comprehension' },
];
