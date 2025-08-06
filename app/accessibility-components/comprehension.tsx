import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Comprehension = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const comprehensionComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/comprehension',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Comprehension Support',
      description: 'Support for users with comprehension difficulties',
      component: <ThemedText>Comprehension Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={comprehensionComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Comprehension;
