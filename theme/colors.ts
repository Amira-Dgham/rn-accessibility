/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const purpleLight = '#9b59b6';
const purpleDark = '#d7aefb';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    purple: purpleLight,
    purpleBackground: '#f3e8fc',
    purpleText: '#4a0072',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    purple: purpleDark,
    purpleBackground: '#2a1a37',
    purpleText: '#e1bfff',
  },
};
