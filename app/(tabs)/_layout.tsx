import { SCREENS, SCREEN_ICONS, SCREEN_TITLE_KEYS } from '@/constants/navigation';
import { useAppTheme } from '@/hooks/useAppTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { ThemeType } from '@/theme';
import { Tabs } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Platform } from 'react-native';

export type TabLayoutProps = {};

/**
 * TabLayout Component
 *
 * This is the root layout for the bottom tab navigation in the app.
 * It uses `expo-router`'s <Tabs> component to render each tab screen
 * dynamically from the SCREENS constant.
 */
const TabLayout: FC<TabLayoutProps> = () => {
  // Retrieve current theme colors & typography from the theme hook
  const { colors, typography } = useAppTheme();

  // Retrieve translation function from the language hook
  const { t } = useLanguage();

  return (
    <Tabs
      // Set common tab bar options (style, colors, typography)
      screenOptions={getTabBarOptions(colors, typography)}
    >
      {/* Dynamically render a <Tabs.Screen> for each screen name in SCREENS */}
      {SCREENS.map((name) => {
        // Get the icon component for the current tab
        const Icon = SCREEN_ICONS[name];

        return (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              // Localize the tab title using the SCREEN_TITLE_KEYS mapping
              title: t(SCREEN_TITLE_KEYS[name]),
              // Render the icon for the tab
              tabBarIcon: ({ size, color }) => <Icon size={size} color={color} />,
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default observer(TabLayout);

/**
 * Returns the common tab bar configuration object for all tabs.
 *
 * @param colors     - Theme color palette for the current color scheme
 * @param typography - Theme typography styles
 */
function getTabBarOptions(colors: ThemeType['colors'], typography: ThemeType['typography']) {
  return {
    headerShown: false, // Hide the header for tab screens
    tabBarStyle: {
      height: 88,
      // Adjust padding for iOS (to account for safe area) vs Android
      paddingBottom: Platform.OS === 'ios' ? 34 : 12,
      paddingTop: 8,
      backgroundColor: colors.background,
      borderTopWidth: 0.5,
      borderTopColor: colors.icon,
    },
    tabBarLabelStyle: typography.tabBar, // Use theme typography for labels
    tabBarActiveTintColor: colors.tabIconSelected, // Active icon color
    tabBarInactiveTintColor: colors.tabIconDefault, // Inactive icon color
  };
}
