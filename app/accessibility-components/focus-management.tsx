import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const FocusManagement = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const focusManagementComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/focus-management',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Focus Management',
      description: 'Proper focus management for keyboard navigation',
      component: <ThemedText>Focus Management Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={focusManagementComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default FocusManagement;
