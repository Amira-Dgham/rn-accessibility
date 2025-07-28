import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import { useNavigation, usePathname } from 'expo-router';
import { useEffect } from 'react';

export const useHeaderTitle = (customTitle?: string) => {
  const navigation = useNavigation();
  const pathname = usePathname();

  useEffect(() => {
    let title = customTitle;

    if (!title) {
      // Find the component by matching the route
      const component = ACCESSIBILITY_COMPONENTS.find((comp) => comp.route === pathname);
      title = component?.title || 'Component';
    }

    navigation.setOptions({
      title,
      headerTitle: title,
    });
  }, [navigation, pathname, customTitle]);
};
