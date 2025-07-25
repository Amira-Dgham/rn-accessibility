import { ThemedView } from '@/components';
import Header from '@/components/Header';
import List from '@/components/List/List';
import { ACCESSIBILITY_COMPONENTS } from '@/constants';
import { useLanguage } from '@/hooks/useLanguage';
import { useRouter } from 'expo-router';
import React from 'react';

const ComponentsScreen: React.FC = () => {
  const router = useRouter();
  const { t } = useLanguage();

  const handleItemPress = (route: string): void => {
    router.push(route as any);
  };

  return (
    <ThemedView preset="auto" safeAreaEdges={['top']}>
      <List
        data={ACCESSIBILITY_COMPONENTS}
        onItemPress={handleItemPress}
        renderHeader={
          <Header
            title={t('screens.components.title')}
            subtitle={t('screens.components.subtitle')}
          />
        }
        t={t}
        emptyText={t('list.empty')}
        // Visual customization
        showSeparator={true}
        showBadges={true}
        alternatingColors={true}
        // Layout props
        itemHeight={80}
        numColumns={1}
        horizontal={false}
        inverted={false}
        // Scroll behavior
        bounces={true}
        showScrollIndicator={false}
        // Performance optimization
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        removeClippedSubviews={true}
        scrollEventThrottle={16}
        // Scroll position maintenance
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
          autoscrollToTopThreshold: 10,
        }}
        // Virtualization
        disableVirtualization={false}
        legacyImplementation={false}
        // Android specific
        progressViewOffset={0}
        overScrollMode="auto"
      />
    </ThemedView>
  );
};
export default ComponentsScreen;
