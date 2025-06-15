// @/theme/navigationTheme.ts
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Colors } from './colors';
import { FontFamilies } from './typography';

// Extend the default navigation theme type to include fonts
declare global {
  namespace ReactNavigation {
    interface Theme {
      fonts: {
        regular: {
          fontFamily: string;
          fontWeight: '400';
        };
        medium: {
          fontFamily: string;
          fontWeight: '500';
        };
        bold: {
          fontFamily: string;
          fontWeight: '700';
        };
        heavy: {
          fontFamily: string;
          fontWeight: '700';
        };
      };
    }
  }
}

// Custom light theme
export const CustomLightTheme: ReactNavigation.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.light.tint,
    background: Colors.light.background,
    card: Colors.light.background,
    text: Colors.light.text,
    border: Colors.light.tabIconDefault,
    notification: Colors.light.tint,
  },
  fonts: {
    regular: {
      fontFamily: FontFamilies.regular,
      fontWeight: '400',
    },
    medium: {
      fontFamily: FontFamilies.medium,
      fontWeight: '500',
    },
    bold: {
      fontFamily: FontFamilies.bold,
      fontWeight: '700',
    },
    heavy: {
      fontFamily: FontFamilies.bold,
      fontWeight: '700',
    },
  },
};

// Custom dark theme
export const CustomDarkTheme: ReactNavigation.Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.dark.tint,
    background: Colors.dark.background,
    card: Colors.dark.background,
    text: Colors.dark.text,
    border: Colors.dark.tabIconDefault,
    notification: Colors.dark.tint,
  },
  fonts: {
    regular: {
      fontFamily: FontFamilies.regular,
      fontWeight: '400',
    },
    medium: {
      fontFamily: FontFamilies.medium,
      fontWeight: '500',
    },
    bold: {
      fontFamily: FontFamilies.bold,
      fontWeight: '700',
    },
    heavy: {
      fontFamily: FontFamilies.bold,
      fontWeight: '700',
    },
  },
};
