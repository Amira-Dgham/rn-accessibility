import type { TabScreenName } from '@/types/navigation';
import { BookOpen, Home, Layers, Settings } from 'lucide-react-native';

// Mapping route names to their corresponding icons
export const SCREEN_ICONS = {
  index: Home,
  components: Layers,
  guidelines: BookOpen,
  settings: Settings,
} satisfies Record<TabScreenName, React.ElementType>;

/**
 * The list of tab screen names.
 */
export const SCREENS: TabScreenName[] = ['index', 'components', 'guidelines', 'settings'];

// Mapping object for screen titles to translation keys
export const SCREEN_TITLE_KEYS: Record<TabScreenName, string> = {
  index: 'navigation.home',
  components: 'navigation.components',
  guidelines: 'navigation.guidelines',
  settings: 'navigation.settings',
};
