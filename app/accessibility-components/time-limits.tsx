import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const TimeLimits = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const timeLimitsComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/time-limits',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Time Limits Support',
      description: 'Support for users who need more time to complete tasks',
      component: <ThemedText>Time Limits Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={timeLimitsComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default TimeLimits;
