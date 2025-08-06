import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Draggable = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const draggableComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/draggable',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Draggable',
      description: 'Draggable elements with keyboard alternatives',
      component: <ThemedText>Draggable Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={draggableComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Draggable;
