import { JSX, useCallback } from 'react';

import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import Header from '@/components/Header';
import List from '@/components/List/List';
import { ListItemDataProps } from '@/types/ui.types';
import { PATHS } from '@/constants/paths';
import { ThemedView } from '@/components';
import { useLanguage } from '@/hooks/useLanguage';
import { useRouter } from 'expo-router';

// ComponentsScreen is the main screen showing a list of accessibility components
export default function ComponentsScreen(): JSX.Element {
  const router = useRouter();
  const { t } = useLanguage(); // Get translation function

  // All translations grouped in one object for clarity
  const translations = {
    title: t('screens.components.title'),
    subtitle: t('screens.components.subtitle'),
    emptyList: t('list.empty'),
  };

  // Handle list item press using useCallback for memoization
  const handleItemPress = useCallback(
    (item: ListItemDataProps): void => {
      router.push({
        pathname: PATHS.ACCESSIBILITY_COMPONENT_WRAPPER,
        params: { slug: item.title }, // Pass the clicked item title as a route parameter
      });
    },
    [router],
  );

  // Grouped props for cleaner List component usage
  const listVisualProps = {
    showSeparator: true,
    showBadges: true,
    alternatingColors: true,
  };

  const listLayoutProps = {
    itemHeight: 80,
    numColumns: 1,
    horizontal: false,
    inverted: false,
  };

  const listScrollProps = {
    bounces: true,
    showScrollIndicator: false,
    scrollEventThrottle: 16,
  };

  const listPerformanceProps = {
    initialNumToRender: 10,
    maxToRenderPerBatch: 10,
    windowSize: 10,
    removeClippedSubviews: true,
  };

  const listVirtualizationProps = {
    disableVirtualization: false,
    legacyImplementation: false,
  };

  const listAndroidProps = {
    progressViewOffset: 0,
    overScrollMode: 'auto' as const,
  };

  return (
    <ThemedView preset="auto" safeAreaEdges={['top']}>
      <List
        data={ACCESSIBILITY_COMPONENTS}
        onItemPress={handleItemPress}
        renderHeader={<Header title={translations.title} subtitle={translations.subtitle} />}
        t={t}
        emptyText={translations.emptyList}
        {...listVisualProps} // Spread grouped visual props
        {...listLayoutProps} // Spread grouped layout props
        {...listScrollProps} // Spread grouped scroll behavior props
        {...listPerformanceProps} // Spread grouped performance props
        maintainVisibleContentPosition={{ minIndexForVisible: 0, autoscrollToTopThreshold: 10 }}
        {...listVirtualizationProps} // Spread virtualization props
        {...listAndroidProps} // Spread Android-specific props
      />
    </ThemedView>
  );
}
