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
  onPress: (item: ListItemDataProps) => void;
  showBadges?: boolean;
  alternatingColors?: boolean;
  itemContainerStyle?: ViewStyle;
  itemTextStyle?: TextStyle;
}

export interface ChildComponentProps {
  id: string;
  title: string;
  description?: string;
  component?: React.ReactNode;
}
