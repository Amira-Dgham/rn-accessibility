import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const RadioButton = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const radioButtonComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/radio-button',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Radio Buttons',
      description: 'Radio buttons with proper grouping and keyboard support',
      component: <ThemedText>Radio Button Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={radioButtonComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default RadioButton;
