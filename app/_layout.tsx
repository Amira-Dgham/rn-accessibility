import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme.web';
import { CustomDarkTheme, CustomLightTheme } from '@/theme/navigationTheme';

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

/**
 * RootLayout component sets up the theme, font loading, and navigation stack for the app.
 * It ensures that the splash screen is hidden once the assets are loaded.
 */
export default function RootLayout() {
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

  // Return null to prevent rendering before fonts are loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Select the appropriate navigation theme based on the color scheme
  const navigationTheme = colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack>
        {/* Main tab navigation */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Fallback screen for unmatched routes */}
        <Stack.Screen name="+not-found" />
      </Stack>
      {/* Set the status bar style based on the color scheme */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
