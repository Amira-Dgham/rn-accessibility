import { useEffect, useState } from 'react';
import { usePreferences } from './usePreferences';

/**
 * Custom hook that combines system color scheme with app theme preference
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);
  const { isDarkMode } = usePreferences();

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  if (hasHydrated) {
    // Prioritize the app's theme preference over system theme
    return isDarkMode ? 'dark' : 'light';
  }

  return 'light';
}
