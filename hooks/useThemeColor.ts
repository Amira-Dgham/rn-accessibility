import { Colors, type ColorKeys } from '@/theme/colors';
import { useColorScheme } from './useColorScheme';

export function useThemeColor(props: { light?: string; dark?: string }, colorName: ColorKeys) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
