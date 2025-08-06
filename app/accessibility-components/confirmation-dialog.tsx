import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const ConfirmationDialog = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const confirmationDialogComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/confirmation-dialog',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Confirmation Dialog',
      description: 'A confirmation dialog with accessible buttons and focus management',
      component: <ThemedText>Confirmation Dialog Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={confirmationDialogComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default ConfirmationDialog;
