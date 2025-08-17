import 'react-native-reanimated';

import * as SplashScreen from 'expo-splash-screen';

import { CustomDarkTheme, CustomLightTheme } from '@/theme';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';

import { StoreProvider, useStore } from '@/context/StoreContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import RootStack from '@/navigation/RootStack';
import { ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

/**
 * AppContent component that handles the main app UI and is wrapped by StoreProvider
 */
const AppContent = observer(() => {
  // Get the root store to check initialization status
  const store = useStore();

  // Determine the current color scheme (light or dark)
  const colorScheme = useColorScheme();

  // Load Inter fonts with consistent naming
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  useEffect(() => {
    // Hide the splash screen when fonts are loaded or if there's an error loading fonts
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return null to prevent rendering before fonts are loaded or store is initialized
  if ((!fontsLoaded && !fontError) || !store.isAppReady) {
    return null;
  }

  // Select the appropriate navigation theme based on the color scheme
  const navigationTheme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

  return (
    <ThemeProvider value={navigationTheme}>
      <KeyboardProvider>
        <RootStack />
        {/* Set the status bar style based on the color scheme */}
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </KeyboardProvider>
    </ThemeProvider>
  );
});

/**
 * RootLayout component that provides the store context to the app
 */
export default function RootLayout() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
