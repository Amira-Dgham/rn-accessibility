import { useTheme } from '@/hooks/useTheme';
import { LegendList } from '@legendapp/list';
import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';
// Types
export interface ListItem {
  title: string;
  route: string;
  [key: string]: any;
}

interface CustomListProps {
  data: ListItem[];
  onItemPress: (route: string, item: ListItem) => void;
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

// Custom Item Component
interface CustomItemProps {
  item: ListItem;
  index: number;
  onPress: (route: string, item: ListItem) => void;
  showBadges?: boolean;
  alternatingColors?: boolean;
  itemContainerStyle?: ViewStyle;
  itemTextStyle?: TextStyle;
}

const CustomItem: React.FC<CustomItemProps> = ({
  item,
  index,
  onPress,
  showBadges = true,
  alternatingColors = true,
  itemContainerStyle,
  itemTextStyle,
}) => {
  const isEven = index % 2 === 0;
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        {
          backgroundColor: alternatingColors
            ? isEven
              ? colors.background
              : colors.blueBackground
            : colors.background,
        },
        itemContainerStyle,
      ]}
      onPress={() => onPress(item.route, item)}
      activeOpacity={0.7}
    >
      <View style={styles.itemContent}>
        <ThemedText style={[itemTextStyle || {}]}>{item.title}</ThemedText>
        {showBadges && <ChevronRight color={colors.gray} size={20} />}
      </View>
    </TouchableOpacity>
  );
};

// Item Separator Component
const ItemSeparator: React.FC<{ leadingItem: ListItem }> = () => <View style={styles.separator} />;

// Empty Component
interface CustomEmptyProps {
  emptyText?: string;
}

const CustomEmpty: React.FC<CustomEmptyProps> = ({ emptyText = 'No items available' }) => (
  <View style={styles.emptyContainer}>
    <ThemedText>{emptyText}</ThemedText>
  </View>
);

// Main Custom List Component
const List: React.FC<CustomListProps> = ({
  data,
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
  emptyText = 'No items available',
  containerStyle,
  itemContainerStyle,
  itemTextStyle,
  overScrollMode = 'auto',
}) => {
  const renderItem = ({ item, index }: { item: ListItem; index: number }) => (
    <CustomItem
      item={item}
      index={index}
      onPress={onItemPress}
      showBadges={showBadges}
      alternatingColors={alternatingColors}
      itemContainerStyle={itemContainerStyle}
      itemTextStyle={itemTextStyle}
    />
  );

  const keyExtractor = (item: ListItem, index: number): string => `${item.title}-${index}`;

  return (
    <View style={[containerStyle]}>
      <LegendList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
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
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  itemContainer: {
    borderRadius: 12,
    marginVertical: 4,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
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
