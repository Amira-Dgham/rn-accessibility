import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const TextInputs = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const textInputsComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/text-inputs',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Text Inputs',
      description: 'Text inputs with proper labels and validation feedback',
      component: <ThemedText>Text Inputs Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={textInputsComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default TextInputs;
