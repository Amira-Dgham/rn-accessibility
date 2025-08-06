import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Charts = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const chartsComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/charts',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Chart',
      description: 'A chart component with accessible data visualization',
      component: <ThemedText>Chart Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={chartsComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Charts;
