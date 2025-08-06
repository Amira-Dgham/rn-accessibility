import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Switches = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const switchesComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/switches',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Switches',
      description: 'Switches with proper state announcements',
      component: <ThemedText>Switches Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={switchesComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Switches;
