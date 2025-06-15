import { SCREEN_ICONS, SCREEN_TITLE_KEYS, SCREENS } from '@/constants/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { Colors } from '@/theme/colors';
import { Typography } from '@/theme/typography';
import { Tabs } from 'expo-router';
import { JSX } from 'react';
import { Platform } from 'react-native';

/**
 * The top-level component for the tabs navigation.
 */
export default function TabLayout(): JSX.Element {
  const { colors, typography } = useTheme();
  const { t } = useLanguage();

  return (
    <Tabs screenOptions={getTabBarOptions(colors, typography)}>
      {SCREENS.map((name) => {
        const Icon = SCREEN_ICONS[name];

        return (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title: t(SCREEN_TITLE_KEYS[name]),
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
      borderTopWidth: 0.5,
      borderTopColor: colors.icon,
    },
    tabBarLabelStyle: typography.tabBar,
    tabBarActiveTintColor: colors.tabIconSelected,
    tabBarInactiveTintColor: colors.tabIconDefault,
  };
}
