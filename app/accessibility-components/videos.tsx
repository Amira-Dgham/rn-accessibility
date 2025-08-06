import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Videos = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const videosComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/videos',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Videos',
      description: 'Videos with captions and audio descriptions',
      component: <ThemedText>Videos Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={videosComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Videos;
