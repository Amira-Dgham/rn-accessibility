import { screenIcons, screenTitles } from '@/constants/navigation';
import { useTheme } from '@/hooks/useTheme';
import { Colors } from '@/theme/colors';
import { Typography } from '@/theme/typography';
import type { TabScreenName } from '@/types/navigation';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  const { colors, typography } = useTheme();

  const screens: TabScreenName[] = ['index', 'components', 'guidelines', 'settings'];

  return (
    <Tabs screenOptions={getTabBarOptions(colors, typography)}>
      {screens.map((name) => {
        const Icon = screenIcons[name];
        return (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title: screenTitles[name],
              tabBarIcon: ({ size, color }) => <Icon size={size} color={color} />,
            }}
          />
        );
      })}
    </Tabs>
  );
}

function getTabBarOptions(colors: (typeof Colors)['light'], typography: typeof Typography) {
  return {
    headerShown: false,
    tabBarStyle: {
      height: 88,
      paddingBottom: Platform.OS === 'ios' ? 34 : 12,
      paddingTop: 8,
      backgroundColor: colors.background,
      borderTopWidth: 1,
      borderTopColor: colors.icon,
    },
    tabBarLabelStyle: typography.tabBar,
    tabBarActiveTintColor: colors.tabIconSelected,
    tabBarInactiveTintColor: colors.tabIconDefault,
  };
}
