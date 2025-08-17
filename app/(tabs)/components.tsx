import React, { FC, useCallback } from 'react';

import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import Header from '@/components/Header';
import List from '@/components/List/List';
import { ListItemDataProps } from '@/types/ui.types';
import { PATHS } from '@/constants/paths';
import { ThemedView } from '@/components';
import { useLanguage } from '@/hooks/useLanguage';
import { useRouter } from 'expo-router';

export type ComponentsScreenProps = {};

const ComponentsScreen: FC<ComponentsScreenProps> = () => {
  const router = useRouter();
  const { t } = useLanguage();

  // Grouped translations
  const translations = {
    title: t('screens.components.title'),
    subtitle: t('screens.components.subtitle'),
    emptyList: t('list.empty'),
  };

  // Handle list item press
  const handleItemPress = useCallback(
    (item: ListItemDataProps): void => {
      router.push({
        pathname: PATHS.ACCESSIBILITY_COMPONENT_WRAPPER,
        params: { slug: item.title },
      });
    },
    [router],
  );

  // Grouped props for List
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
        {...listVisualProps}
        {...listLayoutProps}
        {...listScrollProps}
        {...listPerformanceProps}
        maintainVisibleContentPosition={{ minIndexForVisible: 0, autoscrollToTopThreshold: 10 }}
        {...listVirtualizationProps}
        {...listAndroidProps}
      />
    </ThemedView>
  );
};

export default ComponentsScreen;
