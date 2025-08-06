import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Popovers = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const popoversComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/popovers',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Popovers',
      description: 'Popovers with proper focus management and announcements',
      component: <ThemedText>Popovers Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={popoversComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Popovers;
