import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const DataTimePicker = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const dataTimePickerComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/data-time-picker',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Date Time Picker',
      description: 'A date and time picker with accessible controls',
      component: <ThemedText>Date Time Picker Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={dataTimePickerComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default DataTimePicker;
