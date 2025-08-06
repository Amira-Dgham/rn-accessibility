import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const ProgressIndicators = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const progressIndicatorsComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/progress-indicators',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Progress Indicators',
      description: 'Progress indicators with proper announcements and labels',
      component: <ThemedText>Progress Indicators Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={progressIndicatorsComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default ProgressIndicators;
