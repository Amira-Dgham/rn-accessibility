import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Lists = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const listsComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/lists',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Lists',
      description: 'Lists with proper semantic markup and structure',
      component: <ThemedText>Lists Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={listsComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Lists;
