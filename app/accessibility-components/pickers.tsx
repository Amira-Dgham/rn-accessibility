import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Pickers = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const pickersComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/pickers',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Pickers',
      description: 'Pickers with keyboard navigation and clear labels',
      component: <ThemedText>Pickers Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={pickersComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Pickers;
