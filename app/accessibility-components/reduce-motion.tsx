import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const ReduceMotion = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const reduceMotionComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/reduce-motion',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Reduce Motion Support',
      description: 'Support for users who prefer reduced motion',
      component: <ThemedText>Reduce Motion Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={reduceMotionComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default ReduceMotion;
