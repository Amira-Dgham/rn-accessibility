import type { TabScreenName, TabScreenTitle } from '@/types/navigation';
import { BookOpen, Home, Layers, Settings } from 'lucide-react-native';

// Mapping route names to screen titles
export const screenTitles: Record<TabScreenName, TabScreenTitle> = {
    index: 'Home',
    components: 'Components',
    guidelines: 'Guidelines',
    settings: 'Settings',
};

// Mapping route names to their corresponding icons
export const screenIcons = {
    index: Home,
    components: Layers,
    guidelines: BookOpen,
    settings: Settings,
} satisfies Record<TabScreenName, React.ElementType>;