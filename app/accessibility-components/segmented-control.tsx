import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const SegmentedControl = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const segmentedControlComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/segmented-control',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Segmented Control',
      description: 'Segmented control with proper selection indicators',
      component: <ThemedText>Segmented Control Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={segmentedControlComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default SegmentedControl;
