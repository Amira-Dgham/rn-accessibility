import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const LargeContentViewer = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const largeContentViewerComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/large-content-viewer',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Large Content Viewer',
      description: 'Accessible viewer for large content areas',
      component: <ThemedText>Large Content Viewer Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={largeContentViewerComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default LargeContentViewer;
