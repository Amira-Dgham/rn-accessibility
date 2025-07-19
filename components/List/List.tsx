import { ThemedText } from '@/components/ThemedText';
import { ListItemDataProps } from '@/types/ui';
import { LegendList } from '@legendapp/list';
import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import ListItem from './ListItem';

interface ListProps {
  data: ListItemDataProps[];
  t: (key: string) => string;
  onItemPress: (route: string, item: ListItemDataProps) => void;
  renderHeader?: React.ReactNode;
  renderFooter?: React.ReactNode;
  showSeparator?: boolean;
  showBadges?: boolean;
  alternatingColors?: boolean;
  itemHeight?: number;
  numColumns?: number;
  horizontal?: boolean;
  inverted?: boolean;
  bounces?: boolean;
  showScrollIndicator?: boolean;
  initialNumToRender?: number;
  maxToRenderPerBatch?: number;
  windowSize?: number;
  removeClippedSubviews?: boolean;
  scrollEventThrottle?: number;
  onEndReachedThreshold?: number;
  onEndReached?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
  emptyText?: string;
  containerStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
  itemTextStyle?: TextStyle;
  maintainVisibleContentPosition?: {
    minIndexForVisible: number;
    autoscrollToTopThreshold?: number;
  };
  disableVirtualization?: boolean;
  legacyImplementation?: boolean;
  progressViewOffset?: number;
  overScrollMode?: 'auto' | 'always' | 'never';
}
// Main Custom List Component
const List: React.FC<ListProps> = ({
  data,
  t,
  onItemPress,
  renderHeader,
  renderFooter,
  showSeparator = true,
  showBadges = true,
  alternatingColors = true,
  numColumns = 1,
  horizontal = false,
  bounces = true,
  showScrollIndicator = false,
  onEndReachedThreshold = 0.5,
  onEndReached,
  onRefresh,
  refreshing = false,
  emptyText = t('list.empty'),
  containerStyle,
  itemContainerStyle,
  itemTextStyle,
  overScrollMode = 'auto',
}) => {
  const renderItem = ({ item, index }: { item: ListItemDataProps; index: number }) => (
    <ListItem
      item={item}
      index={index}
      onPress={onItemPress}
      showBadges={showBadges}
      alternatingColors={alternatingColors}
      itemContainerStyle={itemContainerStyle}
      itemTextStyle={itemTextStyle}
    />
  );

  const CustomEmpty: React.FC<{ emptyText: string }> = ({ emptyText = t('list.empty') }) => (
    <View style={styles.emptyContainer}>
      <ThemedText>{emptyText}</ThemedText>
    </View>
  );

  // Item Separator Component
  const ItemSeparator: React.FC<{ leadingItem: ListItemDataProps }> = () => (
    <View style={styles.separator} />
  );

  const keyExtractor = (item: ListItemDataProps, index: number): string => `${item.title}-${index}`;

  return (
    <View style={[containerStyle]}>
      <LegendList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        estimatedItemSize={data.length}
        showsVerticalScrollIndicator={showScrollIndicator}
        showsHorizontalScrollIndicator={showScrollIndicator}
        ListHeaderComponent={
          React.isValidElement(renderHeader) || typeof renderHeader === 'function'
            ? renderHeader
            : null
        }
        ListFooterComponent={
          React.isValidElement(renderFooter) || typeof renderFooter === 'function'
            ? renderFooter
            : null
        }
        ItemSeparatorComponent={showSeparator ? ItemSeparator : undefined}
        bounces={bounces}
        overScrollMode={overScrollMode}
        horizontal={horizontal}
        numColumns={numColumns}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={onEndReachedThreshold}
        onEndReached={onEndReached}
        ListEmptyComponent={<CustomEmpty emptyText={emptyText} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  separator: {
    height: 1,
    marginHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
});

export default List;
