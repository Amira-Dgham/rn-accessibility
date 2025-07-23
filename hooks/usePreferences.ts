import { preferencesStore } from '@/stores/RootStore';

// Make the hook reactive to MobX-State-Tree changes
export const usePreferences = () => {
    const store = preferencesStore;

    // Remove useMemo dependency array to make it reactive
    // Or better yet, remove useMemo entirely since we want reactivity
    return {
        // Store reference
        store,

        // Computed values - these will be reactive
        preferencesConfig: store.preferencesConfig,
        themePreferences: store.themePreferences,
        accessibilityPreferences: store.accessibilityPreferences,
        isInitialized: store.isInitialized,

        // Individual preference values - these will update reactively
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
        resetThemePreferences: store.resetThemePreferences,
        resetFontPreferences: store.resetFontPreferences,
    };
};