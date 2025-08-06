import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const ErrorValidation = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const errorValidationComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/error-validation',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Error Validation',
      description: 'Error validation with clear feedback and guidance',
      component: <ThemedText>Error Validation Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={errorValidationComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default ErrorValidation;
