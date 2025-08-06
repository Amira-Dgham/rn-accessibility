import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Sliders = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const slidersComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/sliders',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Sliders',
      description: 'Sliders with keyboard support and value announcements',
      component: <ThemedText>Sliders Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={slidersComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Sliders;
