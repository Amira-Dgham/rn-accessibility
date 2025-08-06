import { ACCESSIBILITY_COMPONENTS } from '@/constants/accessibility';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';

const Buttons: React.FC = () => {
  useHeaderTitle();
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const buttonComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/buttons',
  );

  const examplesWithComponents = [
    {
      id: '1',
      title: 'Accessible Button',
      description: 'A button with accessible label and feedback.',
      component: <ThemedText>Button Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={buttonComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Buttons;
