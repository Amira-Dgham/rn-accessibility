import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const WebView = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const webViewComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/webview',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible WebView',
      description: 'WebView with proper accessibility support',
      component: <ThemedText>WebView Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={webViewComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default WebView;
