import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const DeviceOrientation = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const deviceOrientationComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/device-orientation',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Device Orientation Support',
      description: 'Support for different device orientations with accessibility',
      component: <ThemedText>Device Orientation Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={deviceOrientationComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default DeviceOrientation;
