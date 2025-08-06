import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const HeadingLevel = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const headingLevelComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/heading-level',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Heading Level Structure',
      description: 'Proper heading hierarchy for accessibility',
      component: <ThemedText>Heading Level Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={headingLevelComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default HeadingLevel;
