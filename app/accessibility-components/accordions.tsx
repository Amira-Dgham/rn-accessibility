import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Accordions = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const accordionComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/accordions',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Interactive Button',
      description: 'A pressable button with visual feedback and accessibility',
      component: <ThemedText> hello </ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={accordionComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Accordions;