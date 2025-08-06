import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const EscapeAction = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const escapeActionComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/escape-action',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Escape Action Support',
      description: 'Keyboard escape functionality for accessibility',
      component: <ThemedText>Escape Action Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={escapeActionComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default EscapeAction;
