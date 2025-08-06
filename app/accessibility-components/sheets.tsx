import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Sheets = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const sheetsComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/sheets',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Sheets',
      description: 'Bottom sheets with proper focus management',
      component: <ThemedText>Sheets Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={sheetsComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Sheets;
