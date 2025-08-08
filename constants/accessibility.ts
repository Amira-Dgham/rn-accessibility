import {
  AccessibilityComponent,
  AccessibilityLevel,
  AccessibilityTool,
} from '@/types/accessibility.types';
import { Code, LucideIcon, Shield, Target, Users } from 'lucide-react-native';

import { FeatureRoute } from '@/types/navigation.types';

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
  {
    title: 'Accordions',
    route: '/accessibility-components/accordions',
    description: 'accessibility.components.accordions.description',
    requirements: {
      A: {
        '1': 'accessibility.components.accordions.requirements.A.1',
        '2': 'accessibility.components.accordions.requirements.A.2',
        '3': 'accessibility.components.accordions.requirements.A.3',
      },
      AA: {
        '1': 'accessibility.components.accordions.requirements.AA.1',
        '2': 'accessibility.components.accordions.requirements.AA.2',
        '3': 'accessibility.components.accordions.requirements.AA.3',
      },
      AAA: {
        '1': 'accessibility.components.accordions.requirements.AAA.1',
        '2': 'accessibility.components.accordions.requirements.AAA.2',
        '3': 'accessibility.components.accordions.requirements.AAA.3',
      },
    },
  },
  {
    title: 'Alerts',
    route: '/accessibility-components/alerts',
    description: 'accessibility.components.alerts.description',
    requirements: {
      A: {
        '1': 'accessibility.components.alerts.requirements.A.1',
        '2': 'accessibility.components.alerts.requirements.A.2',
        '3': 'accessibility.components.alerts.requirements.A.3',
        '4': 'accessibility.components.alerts.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.alerts.requirements.AA.1',
        '2': 'accessibility.components.alerts.requirements.AA.2',
        '3': 'accessibility.components.alerts.requirements.AA.3',
        '4': 'accessibility.components.alerts.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.alerts.requirements.AAA.1',
        '2': 'accessibility.components.alerts.requirements.AAA.2',
        '3': 'accessibility.components.alerts.requirements.AAA.3',
        '4': 'accessibility.components.alerts.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Buttons',
    route: '/accessibility-components/buttons',
    description: 'accessibility.components.buttons.description',
    requirements: {
      A: {
        '1': 'accessibility.components.buttons.requirements.A.1',
        '2': 'accessibility.components.buttons.requirements.A.2',
        '3': 'accessibility.components.buttons.requirements.A.3',
        '4': 'accessibility.components.buttons.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.buttons.requirements.AA.1',
        '2': 'accessibility.components.buttons.requirements.AA.2',
        '3': 'accessibility.components.buttons.requirements.AA.3',
        '4': 'accessibility.components.buttons.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.buttons.requirements.AAA.1',
        '2': 'accessibility.components.buttons.requirements.AAA.2',
        '3': 'accessibility.components.buttons.requirements.AAA.3',
        '4': 'accessibility.components.buttons.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Cards',
    route: '/accessibility-components/cards',
    description: 'accessibility.components.cards.description',
    requirements: {
      A: {
        '1': 'accessibility.components.cards.requirements.A.1',
        '2': 'accessibility.components.cards.requirements.A.2',
        '3': 'accessibility.components.cards.requirements.A.3',
        '4': 'accessibility.components.cards.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.cards.requirements.AA.1',
        '2': 'accessibility.components.cards.requirements.AA.2',
        '3': 'accessibility.components.cards.requirements.AA.3',
        '4': 'accessibility.components.cards.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.cards.requirements.AAA.1',
        '2': 'accessibility.components.cards.requirements.AAA.2',
        '3': 'accessibility.components.cards.requirements.AAA.3',
        '4': 'accessibility.components.cards.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Charts',
    route: '/accessibility-components/charts',
    description: 'accessibility.components.charts.description',
    requirements: {
      A: {
        '1': 'accessibility.components.charts.requirements.A.1',
        '2': 'accessibility.components.charts.requirements.A.2',
        '3': 'accessibility.components.charts.requirements.A.3',
        '4': 'accessibility.components.charts.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.charts.requirements.AA.1',
        '2': 'accessibility.components.charts.requirements.AA.2',
        '3': 'accessibility.components.charts.requirements.AA.3',
        '4': 'accessibility.components.charts.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.charts.requirements.AAA.1',
        '2': 'accessibility.components.charts.requirements.AAA.2',
        '3': 'accessibility.components.charts.requirements.AAA.3',
        '4': 'accessibility.components.charts.requirements.AAA.4',
        '5': 'accessibility.components.charts.requirements.AAA.5',
      },
    },
  },
  {
    title: 'Checkboxes',
    route: '/accessibility-components/checkboxes',
    description: 'accessibility.components.checkboxes.description',
    requirements: {
      A: {
        '1': 'accessibility.components.checkboxes.requirements.A.1',
        '2': 'accessibility.components.checkboxes.requirements.A.2',
        '3': 'accessibility.components.checkboxes.requirements.A.3',
        '4': 'accessibility.components.checkboxes.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.checkboxes.requirements.AA.1',
        '2': 'accessibility.components.checkboxes.requirements.AA.2',
        '3': 'accessibility.components.checkboxes.requirements.AA.3',
        '4': 'accessibility.components.checkboxes.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.checkboxes.requirements.AAA.1',
        '2': 'accessibility.components.checkboxes.requirements.AAA.2',
        '3': 'accessibility.components.checkboxes.requirements.AAA.3',
        '4': 'accessibility.components.checkboxes.requirements.AAA.4',
      },
    },
  },
  {
    title: 'ConfirmationDialog',
    route: '/accessibility-components/confirmation-dialog',
    description: 'accessibility.components.confirmationDialog.description',
    requirements: {
      A: {
        '1': 'accessibility.components.confirmationDialog.requirements.A.1',
        '2': 'accessibility.components.confirmationDialog.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.confirmationDialog.requirements.AA.1',
        '2': 'accessibility.components.confirmationDialog.requirements.AA.2',
      },
      AAA: {
        '1': 'accessibility.components.confirmationDialog.requirements.AAA.1',
        '2': 'accessibility.components.confirmationDialog.requirements.AAA.2',
      },
    },
  },
  {
    title: 'Data Table',
    route: '/accessibility-components/data-table',
    description: 'accessibility.components.dataTable.description',
    requirements: {
      A: {
        '1': 'accessibility.components.dataTable.requirements.A.1',
        '2': 'accessibility.components.dataTable.requirements.A.2',
        '3': 'accessibility.components.dataTable.requirements.A.3',
        '4': 'accessibility.components.dataTable.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.dataTable.requirements.AA.1',
        '2': 'accessibility.components.dataTable.requirements.AA.2',
        '3': 'accessibility.components.dataTable.requirements.AA.3',
        '4': 'accessibility.components.dataTable.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.dataTable.requirements.AAA.1',
        '2': 'accessibility.components.dataTable.requirements.AAA.2',
        '3': 'accessibility.components.dataTable.requirements.AAA.3',
        '4': 'accessibility.components.dataTable.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Date & Time Picker',
    route: '/accessibility-components/data-time-picker',
    description: 'accessibility.components.dateTimePicker.description',
    requirements: {
      A: {
        '1': 'accessibility.components.dateTimePicker.requirements.A.1',
        '2': 'accessibility.components.dateTimePicker.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.dateTimePicker.requirements.AA.1',
        '2': 'accessibility.components.dateTimePicker.requirements.AA.2',
        '3': 'accessibility.components.dateTimePicker.requirements.AA.3',
        '4': 'accessibility.components.dateTimePicker.requirements.AA.4',
        '5': 'accessibility.components.dateTimePicker.requirements.AA.5',
      },
      AAA: {
        '1': 'accessibility.components.dateTimePicker.requirements.AAA.1',
        '2': 'accessibility.components.dateTimePicker.requirements.AAA.2',
        '3': 'accessibility.components.dateTimePicker.requirements.AAA.3',
        '4': 'accessibility.components.dateTimePicker.requirements.AAA.4',
      },
    },
  },
  {
    title: 'DeviceOrientation',
    route: '/accessibility-components/device-orientation',
    description: 'accessibility.components.deviceOrientation.description',
    requirements: {
      A: {
        '1': 'accessibility.components.deviceOrientation.requirements.A.1',
        '2': 'accessibility.components.deviceOrientation.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.deviceOrientation.requirements.AA.1',
        '2': 'accessibility.components.deviceOrientation.requirements.AA.2',
      },
      AAA: {
        '1': 'accessibility.components.deviceOrientation.requirements.AAA.1',
        '2': 'accessibility.components.deviceOrientation.requirements.AAA.2',
      },
    },
  },
  {
    title: 'Error Validation',
    route: '/accessibility-components/error-validation',
    description: 'accessibility.components.errorValidation.description',
    requirements: {
      A: {
        '1': 'accessibility.components.errorValidation.requirements.A.1',
        '2': 'accessibility.components.errorValidation.requirements.A.2',
        '3': 'accessibility.components.errorValidation.requirements.A.3',
        '4': 'accessibility.components.errorValidation.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.errorValidation.requirements.AA.1',
        '2': 'accessibility.components.errorValidation.requirements.AA.2',
        '3': 'accessibility.components.errorValidation.requirements.AA.3',
        '4': 'accessibility.components.errorValidation.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.errorValidation.requirements.AAA.1',
        '2': 'accessibility.components.errorValidation.requirements.AAA.2',
        '3': 'accessibility.components.errorValidation.requirements.AAA.3',
        '4': 'accessibility.components.errorValidation.requirements.AAA.4',
      },
    },
  },
  { title: 'EscapeAction', route: '/accessibility-components/escape-action' },
  {
    title: 'FocusManagement',
    route: '/accessibility-components/focus-management',
    description: 'accessibility.components.focusManagement.description',
    requirements: {
      A: {
        '1': 'accessibility.components.focusManagement.requirements.A.1',
        '2': 'accessibility.components.focusManagement.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.focusManagement.requirements.AA.1',
        '2': 'accessibility.components.focusManagement.requirements.AA.2',
      },
      AAA: {
        '1': 'accessibility.components.focusManagement.requirements.AAA.1',
        '2': 'accessibility.components.focusManagement.requirements.AAA.2',
      },
    },
  },
  {
    title: 'Gestures Alternatives',
    route: '/accessibility-components/gestures-alternatives',
    description: 'accessibility.components.gesturesAlternatives.description',
    requirements: {
      A: {
        '1': 'accessibility.components.gesturesAlternatives.requirements.A.1',
        '2': 'accessibility.components.gesturesAlternatives.requirements.A.2',
        '3': 'accessibility.components.gesturesAlternatives.requirements.A.3',
        '4': 'accessibility.components.gesturesAlternatives.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.gesturesAlternatives.requirements.AA.1',
        '2': 'accessibility.components.gesturesAlternatives.requirements.AA.2',
        '3': 'accessibility.components.gesturesAlternatives.requirements.AA.3',
        '4': 'accessibility.components.gesturesAlternatives.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.gesturesAlternatives.requirements.AAA.1',
        '2': 'accessibility.components.gesturesAlternatives.requirements.AAA.2',
        '3': 'accessibility.components.gesturesAlternatives.requirements.AAA.3',
        '4': 'accessibility.components.gesturesAlternatives.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Grouping Controls',
    route: '/accessibility-components/grouping-controls',
    description: 'accessibility.components.groupingControls.description',
    requirements: {
      A: {
        '1': 'accessibility.components.groupingControls.requirements.A.1',
        '2': 'accessibility.components.groupingControls.requirements.A.2',
        '3': 'accessibility.components.groupingControls.requirements.A.3',
        '4': 'accessibility.components.groupingControls.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.groupingControls.requirements.AA.1',
        '2': 'accessibility.components.groupingControls.requirements.AA.2',
        '3': 'accessibility.components.groupingControls.requirements.AA.3',
        '4': 'accessibility.components.groupingControls.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.groupingControls.requirements.AAA.1',
        '2': 'accessibility.components.groupingControls.requirements.AAA.2',
        '3': 'accessibility.components.groupingControls.requirements.AAA.3',
        '4': 'accessibility.components.groupingControls.requirements.AAA.4',
      },
    },
  },
  {
    title: 'HeadingLevel',
    route: '/accessibility-components/heading-level',
    description: 'accessibility.components.headingLevel.description',
    requirements: {
      A: {
        '1': 'accessibility.components.headingLevel.requirements.A.1',
        '2': 'accessibility.components.headingLevel.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.headingLevel.requirements.AA.1',
        '2': 'accessibility.components.headingLevel.requirements.AA.2',
      },
      AAA: {
        '1': 'accessibility.components.headingLevel.requirements.AAA.1',
        '2': 'accessibility.components.headingLevel.requirements.AAA.2',
      },
    },
  },
  {
    title: 'Images',
    route: '/accessibility-components/images',
    description: 'accessibility.components.images.description',
    requirements: {
      A: {
        '1': 'accessibility.components.images.requirements.A.1',
        '2': 'accessibility.components.images.requirements.A.2',
        '3': 'accessibility.components.images.requirements.A.3',
        '4': 'accessibility.components.images.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.images.requirements.AA.1',
        '2': 'accessibility.components.images.requirements.AA.2',
        '3': 'accessibility.components.images.requirements.AA.3',
        '4': 'accessibility.components.images.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.images.requirements.AAA.1',
        '2': 'accessibility.components.images.requirements.AAA.2',
        '3': 'accessibility.components.images.requirements.AAA.3',
        '4': 'accessibility.components.images.requirements.AAA.4',
      },
    },
  },
  {
    title: 'LargeContentViewer',
    route: '/accessibility-components/large-content-viewer',
    description: 'accessibility.components.largeContentViewer.description',
    requirements: {
      A: {
        '1': 'accessibility.components.largeContentViewer.requirements.A.1',
        '2': 'accessibility.components.largeContentViewer.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.largeContentViewer.requirements.AA.1',
        '2': 'accessibility.components.largeContentViewer.requirements.AA.2',
      },
      AAA: {
        '1': 'accessibility.components.largeContentViewer.requirements.AAA.1',
        '2': 'accessibility.components.largeContentViewer.requirements.AAA.2',
      },
    },
  },
  {
    title: 'Links',
    route: '/accessibility-components/links',
    description: 'accessibility.components.links.description',
    requirements: {
      A: {
        '1': 'accessibility.components.links.requirements.A.1',
        '2': 'accessibility.components.links.requirements.A.2',
        '3': 'accessibility.components.links.requirements.A.3',
        '4': 'accessibility.components.links.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.links.requirements.AA.1',
        '2': 'accessibility.components.links.requirements.AA.2',
        '3': 'accessibility.components.links.requirements.AA.3',
        '4': 'accessibility.components.links.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.links.requirements.AAA.1',
        '2': 'accessibility.components.links.requirements.AAA.2',
        '3': 'accessibility.components.links.requirements.AAA.3',
        '4': 'accessibility.components.links.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Lists',
    route: '/accessibility-components/lists',
    description: 'accessibility.components.lists.description',
    requirements: {
      A: {
        '1': 'accessibility.components.lists.requirements.A.1',
        '2': 'accessibility.components.lists.requirements.A.2',
        '3': 'accessibility.components.lists.requirements.A.3',
        '4': 'accessibility.components.lists.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.lists.requirements.AA.1',
        '2': 'accessibility.components.lists.requirements.AA.2',
        '3': 'accessibility.components.lists.requirements.AA.3',
        '4': 'accessibility.components.lists.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.lists.requirements.AAA.1',
        '2': 'accessibility.components.lists.requirements.AAA.2',
        '3': 'accessibility.components.lists.requirements.AAA.3',
        '4': 'accessibility.components.lists.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Menu',
    route: '/accessibility-components/menu',
    description: 'accessibility.components.menu.description',
    requirements: {
      A: {
        '1': 'accessibility.components.menu.requirements.A.1',
        '2': 'accessibility.components.menu.requirements.A.2',
        '3': 'accessibility.components.menu.requirements.A.3',
        '4': 'accessibility.components.menu.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.menu.requirements.AA.1',
        '2': 'accessibility.components.menu.requirements.AA.2',
        '3': 'accessibility.components.menu.requirements.AA.3',
        '4': 'accessibility.components.menu.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.menu.requirements.AAA.1',
        '2': 'accessibility.components.menu.requirements.AAA.2',
        '3': 'accessibility.components.menu.requirements.AAA.3',
        '4': 'accessibility.components.menu.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Pickers',
    route: '/accessibility-components/pickers',
    description: 'accessibility.components.pickers.description',
    requirements: {
      A: {
        '1': 'accessibility.components.pickers.requirements.A.1',
        '2': 'accessibility.components.pickers.requirements.A.2',
        '3': 'accessibility.components.pickers.requirements.A.3',
        '4': 'accessibility.components.pickers.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.pickers.requirements.AA.1',
        '2': 'accessibility.components.pickers.requirements.AA.2',
        '3': 'accessibility.components.pickers.requirements.AA.3',
        '4': 'accessibility.components.pickers.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.pickers.requirements.AAA.1',
        '2': 'accessibility.components.pickers.requirements.AAA.2',
        '3': 'accessibility.components.pickers.requirements.AAA.3',
        '4': 'accessibility.components.pickers.requirements.AAA.4',
      },
    },
  },
  {
    title: 'PopOvers',
    route: '/accessibility-components/popovers',
    description: 'accessibility.components.popovers.description',
    requirements: {
      A: {
        '1': 'accessibility.components.popovers.requirements.A.1',
        '2': 'accessibility.components.popovers.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.popovers.requirements.AA.1',
        '2': 'accessibility.components.popovers.requirements.AA.2',
      },
      AAA: {
        '1': 'accessibility.components.popovers.requirements.AAA.1',
        '2': 'accessibility.components.popovers.requirements.AAA.2',
      },
    },
  },
  {
    title: 'Progress Indicators',
    route: '/accessibility-components/progress-indicators',
    description: 'accessibility.components.progressIndicators.description',
    requirements: {
      A: {
        '1': 'accessibility.components.progressIndicators.requirements.A.1',
        '2': 'accessibility.components.progressIndicators.requirements.A.2',
        '3': 'accessibility.components.progressIndicators.requirements.A.3',
        '4': 'accessibility.components.progressIndicators.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.progressIndicators.requirements.AA.1',
        '2': 'accessibility.components.progressIndicators.requirements.AA.2',
        '3': 'accessibility.components.progressIndicators.requirements.AA.3',
        '4': 'accessibility.components.progressIndicators.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.progressIndicators.requirements.AAA.1',
        '2': 'accessibility.components.progressIndicators.requirements.AAA.2',
        '3': 'accessibility.components.progressIndicators.requirements.AAA.3',
        '4': 'accessibility.components.progressIndicators.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Radio Buttons',
    route: '/accessibility-components/radio-button',
    description: 'accessibility.components.radioButton.description',
    requirements: {
      A: {
        '1': 'accessibility.components.radioButton.requirements.A.1',
        '2': 'accessibility.components.radioButton.requirements.A.2',
        '3': 'accessibility.components.radioButton.requirements.A.3',
        '4': 'accessibility.components.radioButton.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.radioButton.requirements.AA.1',
        '2': 'accessibility.components.radioButton.requirements.AA.2',
        '3': 'accessibility.components.radioButton.requirements.AA.3',
        '4': 'accessibility.components.radioButton.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.radioButton.requirements.AAA.1',
        '2': 'accessibility.components.radioButton.requirements.AAA.2',
        '3': 'accessibility.components.radioButton.requirements.AAA.3',
        '4': 'accessibility.components.radioButton.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Segmented Controls',
    route: '/accessibility-components/segmented-control',
    description: 'accessibility.components.segmentedControl.description',
    requirements: {
      A: {
        '1': 'accessibility.components.segmentedControl.requirements.A.1',
        '2': 'accessibility.components.segmentedControl.requirements.A.2',
        '3': 'accessibility.components.segmentedControl.requirements.A.3',
        '4': 'accessibility.components.segmentedControl.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.segmentedControl.requirements.AA.1',
        '2': 'accessibility.components.segmentedControl.requirements.AA.2',
        '3': 'accessibility.components.segmentedControl.requirements.AA.3',
        '4': 'accessibility.components.segmentedControl.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.segmentedControl.requirements.AAA.1',
        '2': 'accessibility.components.segmentedControl.requirements.AAA.2',
        '3': 'accessibility.components.segmentedControl.requirements.AAA.3',
        '4': 'accessibility.components.segmentedControl.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Sheets',
    route: '/accessibility-components/sheets',
    description: 'accessibility.components.sheets.description',
    requirements: {
      A: {
        '1': 'accessibility.components.sheets.requirements.A.1',
        '2': 'accessibility.components.sheets.requirements.A.2',
        '3': 'accessibility.components.sheets.requirements.A.3',
        '4': 'accessibility.components.sheets.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.sheets.requirements.AA.1',
        '2': 'accessibility.components.sheets.requirements.AA.2',
        '3': 'accessibility.components.sheets.requirements.AA.3',
        '4': 'accessibility.components.sheets.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.sheets.requirements.AAA.1',
        '2': 'accessibility.components.sheets.requirements.AAA.2',
        '3': 'accessibility.components.sheets.requirements.AAA.3',
        '4': 'accessibility.components.sheets.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Sliders',
    route: '/accessibility-components/sliders',
    description: 'accessibility.components.sliders.description',
    requirements: {
      A: {
        '1': 'accessibility.components.sliders.requirements.A.1',
        '2': 'accessibility.components.sliders.requirements.A.2',
        '3': 'accessibility.components.sliders.requirements.A.3',
        '4': 'accessibility.components.sliders.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.sliders.requirements.AA.1',
        '2': 'accessibility.components.sliders.requirements.AA.2',
        '3': 'accessibility.components.sliders.requirements.AA.3',
        '4': 'accessibility.components.sliders.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.sliders.requirements.AAA.1',
        '2': 'accessibility.components.sliders.requirements.AAA.2',
        '3': 'accessibility.components.sliders.requirements.AAA.3',
        '4': 'accessibility.components.sliders.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Switches',
    route: '/accessibility-components/switches',
    description: 'accessibility.components.switches.description',
    requirements: {
      A: {
        '1': 'accessibility.components.switches.requirements.A.1',
        '2': 'accessibility.components.switches.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.switches.requirements.AA.1',
        '2': 'accessibility.components.switches.requirements.AA.2',
      },
      AAA: {
        '1': 'accessibility.components.switches.requirements.AAA.1',
        '2': 'accessibility.components.switches.requirements.AAA.2',
      },
    },
  },
  {
    title: 'Text Inputs',
    route: '/accessibility-components/text-inputs',
    description: 'accessibility.components.textInputs.description',
    requirements: {
      A: {
        '1': 'accessibility.components.textInputs.requirements.A.1',
        '2': 'accessibility.components.textInputs.requirements.A.2',
        '3': 'accessibility.components.textInputs.requirements.A.3',
        '4': 'accessibility.components.textInputs.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.textInputs.requirements.AA.1',
        '2': 'accessibility.components.textInputs.requirements.AA.2',
        '3': 'accessibility.components.textInputs.requirements.AA.3',
        '4': 'accessibility.components.textInputs.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.textInputs.requirements.AAA.1',
        '2': 'accessibility.components.textInputs.requirements.AAA.2',
        '3': 'accessibility.components.textInputs.requirements.AAA.3',
        '4': 'accessibility.components.textInputs.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Tabs',
    route: '/accessibility-components/tabs',
    description: 'accessibility.components.tabs.description',
    requirements: {
      A: {
        '1': 'accessibility.components.tabs.requirements.A.1',
        '2': 'accessibility.components.tabs.requirements.A.2',
        '3': 'accessibility.components.tabs.requirements.A.3',
        '4': 'accessibility.components.tabs.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.tabs.requirements.AA.1',
        '2': 'accessibility.components.tabs.requirements.AA.2',
        '3': 'accessibility.components.tabs.requirements.AA.3',
        '4': 'accessibility.components.tabs.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.tabs.requirements.AAA.1',
        '2': 'accessibility.components.tabs.requirements.AAA.2',
        '3': 'accessibility.components.tabs.requirements.AAA.3',
        '4': 'accessibility.components.tabs.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Videos',
    route: '/accessibility-components/videos',
    description: 'accessibility.components.videos.description',
    requirements: {
      A: {
        '1': 'accessibility.components.videos.requirements.A.1',
        '2': 'accessibility.components.videos.requirements.A.2',
        '3': 'accessibility.components.videos.requirements.A.3',
        '4': 'accessibility.components.videos.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.videos.requirements.AA.1',
        '2': 'accessibility.components.videos.requirements.AA.2',
        '3': 'accessibility.components.videos.requirements.AA.3',
        '4': 'accessibility.components.videos.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.videos.requirements.AAA.1',
        '2': 'accessibility.components.videos.requirements.AAA.2',
        '3': 'accessibility.components.videos.requirements.AAA.3',
        '4': 'accessibility.components.videos.requirements.AAA.4',
      },
    },
  },
  {
    title: 'WebView',
    route: '/accessibility-components/webview',
    description: 'accessibility.components.webview.description',
    requirements: {
      A: {
        '1': 'accessibility.components.webview.requirements.A.1',
        '2': 'accessibility.components.webview.requirements.A.2',
        '3': 'accessibility.components.webview.requirements.A.3',
        '4': 'accessibility.components.webview.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.webview.requirements.AA.1',
        '2': 'accessibility.components.webview.requirements.AA.2',
        '3': 'accessibility.components.webview.requirements.AA.3',
        '4': 'accessibility.components.webview.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.webview.requirements.AAA.1',
        '2': 'accessibility.components.webview.requirements.AAA.2',
        '3': 'accessibility.components.webview.requirements.AAA.3',
        '4': 'accessibility.components.webview.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Reduce Motion',
    route: '/accessibility-components/reduce-motion',
    description: 'accessibility.components.reduceMotion.description',
    requirements: {
      A: {
        '1': 'accessibility.components.reduceMotion.requirements.A.1',
        '2': 'accessibility.components.reduceMotion.requirements.A.2',
        '3': 'accessibility.components.reduceMotion.requirements.A.3',
        '4': 'accessibility.components.reduceMotion.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.reduceMotion.requirements.AA.1',
        '2': 'accessibility.components.reduceMotion.requirements.AA.2',
        '3': 'accessibility.components.reduceMotion.requirements.AA.3',
        '4': 'accessibility.components.reduceMotion.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.reduceMotion.requirements.AAA.1',
        '2': 'accessibility.components.reduceMotion.requirements.AAA.2',
        '3': 'accessibility.components.reduceMotion.requirements.AAA.3',
        '4': 'accessibility.components.reduceMotion.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Time Limits',
    route: '/accessibility-components/time-limits',
    description: 'accessibility.components.timeLimits.description',
    requirements: {
      A: {
        '1': 'accessibility.components.timeLimits.requirements.A.1',
        '2': 'accessibility.components.timeLimits.requirements.A.2',
        '3': 'accessibility.components.timeLimits.requirements.A.3',
        '4': 'accessibility.components.timeLimits.requirements.A.4',
      },
      AA: {
        '1': 'accessibility.components.timeLimits.requirements.AA.1',
        '2': 'accessibility.components.timeLimits.requirements.AA.2',
        '3': 'accessibility.components.timeLimits.requirements.AA.3',
        '4': 'accessibility.components.timeLimits.requirements.AA.4',
      },
      AAA: {
        '1': 'accessibility.components.timeLimits.requirements.AAA.1',
        '2': 'accessibility.components.timeLimits.requirements.AAA.2',
        '3': 'accessibility.components.timeLimits.requirements.AAA.3',
        '4': 'accessibility.components.timeLimits.requirements.AAA.4',
      },
    },
  },
  {
    title: 'Comprehension',
    route: '/accessibility-components/comprehension',
    description: 'accessibility.components.comprehension.description',
    requirements: {
      A: {
        '1': 'accessibility.components.comprehension.requirements.A.1',
        '2': 'accessibility.components.comprehension.requirements.A.2',
      },
      AA: {
        '1': 'accessibility.components.comprehension.requirements.AA.1',
        '2': 'accessibility.components.comprehension.requirements.AA.2',
      },
      AAA: {
        '1': 'accessibility.components.comprehension.requirements.AAA.1',
        '2': 'accessibility.components.comprehension.requirements.AAA.2',
      },
    },
  },
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
