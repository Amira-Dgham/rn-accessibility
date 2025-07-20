import { preferencesStore } from '@/stores/RootStore';
import { useMemo } from 'react';

export const usePreferences = () => {
    const store = preferencesStore;

    return useMemo(
        () => ({
            // Store reference
            store,

            // Computed values
            preferencesConfig: store.preferencesConfig,
            themePreferences: store.themePreferences,
            accessibilityPreferences: store.accessibilityPreferences,
            isInitialized: store.isInitialized,

            // Individual preference values
            fontSize: store.fontSize,
            isDarkMode: store.isDarkMode,
            isHighContrast: store.isHighContrast,
            isReduceMotion: store.isReduceMotion,
            isScreenReaderEnabled: store.isScreenReaderEnabled,
            isTextToSpeechEnabled: store.isTextToSpeechEnabled,
            isHapticsEnabled: store.isHapticsEnabled,
            isSimpleNavigation: store.isSimpleNavigation,
            customTextColor: store.customTextColor,
            customBackgroundColor: store.customBackgroundColor,

            // Helper functions
            getSwitchValue: store.getSwitchValue,

            // Actions
            setDarkMode: store.setDarkMode,
            setHighContrast: store.setHighContrast,
            setFontSize: store.setFontSize,
            setReduceMotion: store.setReduceMotion,
            setScreenReader: store.setScreenReader,
            setTextToSpeech: store.setTextToSpeech,
            setHaptics: store.setHaptics,
            setSimpleNavigation: store.setSimpleNavigation,
            setCustomTextColor: store.setCustomTextColor,
            setCustomBackgroundColor: store.setCustomBackgroundColor,
            handleSwitchToggle: store.handleSwitchToggle,
            resetToDefaults: store.resetToDefaults,
            updatePreferences: store.updatePreferences,
        }),
        [store]
    );
};