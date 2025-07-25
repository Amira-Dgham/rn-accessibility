import { TextStyle, ViewStyle } from 'react-native';

// List component item type
export interface ListItemDataProps {
  title: string;
  route: string;
  [key: string]: any;
}
export interface ListItemProps {
  item: ListItemDataProps;
  index: number;
  onPress: (route: string, item: ListItemDataProps) => void;
  showBadges?: boolean;
  alternatingColors?: boolean;
  itemContainerStyle?: ViewStyle;
  itemTextStyle?: TextStyle;
}
