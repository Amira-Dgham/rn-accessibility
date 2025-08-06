import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Tabs = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const tabsComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/tabs',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Tabs',
      description: 'Tabs with proper navigation and content switching',
      component: <ThemedText>Tabs Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={tabsComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Tabs;
