import { ACCESSIBILITY_COMPONENTS } from '@/constants/accessibility';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';

const Alerts: React.FC = () => {
  useHeaderTitle();
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const alertComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/alerts',
  );

  const examplesWithComponents = [
    {
      id: '1',
      title: 'Simple Alert',
      description: 'A basic alert dialog for accessibility.',
      component: <ThemedText>Alert Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={alertComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Alerts;
