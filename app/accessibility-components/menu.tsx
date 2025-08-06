import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { ChildComponentProps } from '@/types/ui.types';
import { ThemedText } from '@/components';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useLanguage } from '@/hooks/useLanguage';

const Menu = () => {
  const { t } = useLanguage();
  const { levels } = useAccessibility();
  const menuComponent = ACCESSIBILITY_COMPONENTS.find(
    (comp) => comp.route === '/accessibility-components/menu',
  );

  const examplesWithComponents: ChildComponentProps[] = [
    {
      id: '1',
      title: 'Accessible Menu',
      description: 'Menu with proper navigation and keyboard support',
      component: <ThemedText>Menu Example</ThemedText>,
    },
  ];

  return (
    <AccessibilityComponentScreen
      componentConfig={menuComponent}
      levels={levels}
      t={t}
      examplesWithComponents={examplesWithComponents}
    />
  );
};

export default Menu;
