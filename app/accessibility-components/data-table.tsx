import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const DataTable = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const dataTableComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/data-table',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Data Table',
      description: 'A data table with proper headers and keyboard navigation',
      component: <ThemedText>Data Table Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={dataTableComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default DataTable;
