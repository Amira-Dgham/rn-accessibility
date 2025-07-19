import { useTheme } from '@/hooks/useTheme';
import { ListItemProps } from '@/types/ui';
import { ChevronRight } from 'lucide-react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '../ThemedText';

const ListItem: React.FC<ListItemProps> = ({
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

const styles = StyleSheet.create({
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
});

export default ListItem;
