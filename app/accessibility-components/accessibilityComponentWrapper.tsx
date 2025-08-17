import React, { FC, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';

export type AccessibilityComponentWrapperProps = {};

/**
 * AccessibilityComponentWrapper
 *
 * This screen wraps an individual accessibility component.
 * It displays:
 * - The component details from ACCESSIBILITY_COMPONENTS
 * - Examples for a selected accessibility level
 * - Allows changing the accessibility level dynamically
 */
const AccessibilityComponentWrapper: FC<AccessibilityComponentWrapperProps> = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const route = useRoute<RouteProp<Record<string, { slug?: string }>, string>>();
  const slug = route.params?.slug;

  const [selectedLevel, setSelectedLevel] = useState<string>('A');

  const componentConfig = ACCESSIBILITY_COMPONENTS.find((comp) => comp.title === slug);

  // Set the screen header dynamically based on the component title
  useHeaderTitle(slug);

  if (!componentConfig) {
    return null; // Component not found, render nothing
  }

  return (
    <AccessibilityComponentScreen
      componentConfig={componentConfig}
      levels={levels}
      t={t}
      examplesWithComponents={componentConfig.examples[selectedLevel]}
      selectedLevel={selectedLevel}
      onLevelChange={setSelectedLevel}
    />
  );
};

export default AccessibilityComponentWrapper;
