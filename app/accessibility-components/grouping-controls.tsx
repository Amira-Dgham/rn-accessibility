import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const GroupingControls = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const groupingControlsComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/grouping-controls',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Grouping Controls',
      description: 'Controls for grouping related elements',
      component: <ThemedText>Grouping Controls Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={groupingControlsComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default GroupingControls;
