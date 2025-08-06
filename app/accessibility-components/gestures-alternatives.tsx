import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const GesturesAlternatives = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const gesturesAlternativesComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/gestures-alternatives',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Gesture Alternatives',
      description: 'Keyboard alternatives for gesture-based interactions',
      component: <ThemedText>Gesture Alternatives Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={gesturesAlternativesComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default GesturesAlternatives;
