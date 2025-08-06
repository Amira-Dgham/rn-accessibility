import { ACCESSIBILITY_COMPONENTS } from '@/constants/accessibility';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';

const Cards: React.FC = () => {
  useHeaderTitle();
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const cardComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/cards',
  );

  const examplesWithComponents = [
    {
      id: '1',
      title: 'Accessible Card',
      description: 'A card component with accessible structure.',
      component: <ThemedText>Card Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={cardComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Cards;
