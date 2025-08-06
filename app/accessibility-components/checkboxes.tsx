import { ACCESSIBILITY_COMPONENTS } from '@/constants/accessibility';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';

const Checkboxes: React.FC = () => {
  useHeaderTitle();
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const checkboxComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/checkboxes',
  );

  const examplesWithComponents = [
    {
      id: '1',
      title: 'Accessible Checkbox',
      description: 'A checkbox with accessible label and state.',
      component: <ThemedText>Checkbox Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={checkboxComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Checkboxes;
