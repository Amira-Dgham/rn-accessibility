import { STORAGE_KEYS } from '@/constants/storage';
import { storageService } from '@/services/StorageService';
import { Colors } from '@/theme';
import { flow, Instance, types } from 'mobx-state-tree';

// Define the preference types
export interface PreferenceItem {
    key: string;
    title: string;
    description: string;
    icon?: string;
    type: 'switch' | 'select' | 'slider';
    route?: string;
}

// Preferences Store
export const PreferencesStore = types
    .model('PreferencesStore', {
        // Accessibility preferences
        fontSize: types.optional(types.number, 16),
        isDarkMode: types.optional(types.boolean, false),
        isHighContrast: types.optional(types.boolean, false),
        isReduceMotion: types.optional(types.boolean, false),
        isScreenReaderEnabled: types.optional(types.boolean, false),
        isTextToSpeechEnabled: types.optional(types.boolean, false),
        isHapticsEnabled: types.optional(types.boolean, true),
        isSimpleNavigation: types.optional(types.boolean, false),

        // Custom colors (you can expand this based on your needs)
        customTextColor: types.optional(types.string, Colors.light.text),
        customBackgroundColor: types.optional(types.string, Colors.light.background),

        isInitialized: types.optional(types.boolean, false),
    })
    .views((self) => ({
        // Get all preferences as an array for rendering
        get preferencesConfig(): PreferenceItem[] {
            return [
                {
                    key: 'fontSize',
                    title: 'accessibility.preferences.fontSize.title',
                    description: 'accessibility.preferences.fontSize.description',
                    type: 'slider',
                    route: '/settings/font-size-customization',
                },
                {
                    key: 'theme',
                    title: 'accessibility.preferences.theme.title',
                    description: 'accessibility.preferences.theme.description',
                    type: 'switch',
                },
                {
                    key: 'contrast',
                    title: 'accessibility.preferences.contrast.title',
                    description: 'accessibility.preferences.contrast.description',
                    type: 'switch',
                },
                {
                    key: 'reduceMotion',
                    title: 'accessibility.preferences.reduceMotion.title',
                    description: 'accessibility.preferences.reduceMotion.description',
                    type: 'switch',
                },
                {
                    key: 'screenReader',
                    title: 'accessibility.preferences.screenReader.title',
                    description: 'accessibility.preferences.screenReader.description',
                    type: 'switch',
                },
                {
                    key: 'language',
                    title: 'accessibility.preferences.language.title',
                    description: 'accessibility.preferences.language.description',
                    type: 'select',
                    route: '/settings/language-customization',
                },
                {
                    key: 'textToSpeech',
                    title: 'accessibility.preferences.textToSpeech.title',
                    description: 'accessibility.preferences.textToSpeech.description',
                    type: 'switch',
                },
                {
                    key: 'haptics',
                    title: 'accessibility.preferences.haptics.title',
                    description: 'accessibility.preferences.haptics.description',
                    type: 'switch',
                },
                {
                    key: 'customColors',
                    title: 'accessibility.preferences.customColors.title',
                    description: 'accessibility.preferences.customColors.description',
                    type: 'select',
                    route: '/settings/colors-customization',
                },
                {
                    key: 'simpleNavigation',
                    title: 'accessibility.preferences.simpleNavigation.title',
                    description: 'accessibility.preferences.simpleNavigation.description',
                    type: 'switch',
                },
            ];
        },

        // Helper methods to get specific preference values
        get themePreferences() {
            return {
                isDarkMode: self.isDarkMode,
                isHighContrast: self.isHighContrast,
                customTextColor: self.customTextColor,
                customBackgroundColor: self.customBackgroundColor,
            };
        },

        get accessibilityPreferences() {
            return {
                fontSize: self.fontSize,
                isReduceMotion: self.isReduceMotion,
                isScreenReaderEnabled: self.isScreenReaderEnabled,
                isTextToSpeechEnabled: self.isTextToSpeechEnabled,
                isHapticsEnabled: self.isHapticsEnabled,
                isSimpleNavigation: self.isSimpleNavigation,
            };
        },

        // Get switch value for a specific preference
        getSwitchValue(key: string): boolean {
            switch (key) {
                case 'theme':
                    return self.isDarkMode;
                case 'contrast':
                    return self.isHighContrast;
                case 'reduceMotion':
                    return self.isReduceMotion;
                case 'screenReader':
                    return self.isScreenReaderEnabled;
                case 'textToSpeech':
                    return self.isTextToSpeechEnabled;
                case 'haptics':
                    return self.isHapticsEnabled;
                case 'simpleNavigation':
                    return self.isSimpleNavigation;
                default:
                    return false;
            }
        },
    }))
    .actions((self) => {
        // Helper function to persist a value to storage
        const persistValue = (key: string, value: any) => {
            try {
                storageService.set(`${STORAGE_KEYS.PREFERENCES}_${key}`, JSON.stringify(value));
            } catch (error) {
                console.error(`Error persisting preference ${key}:`, error);
            }
        };

        // Helper function to load a value from storage
        const loadValue = (key: string, defaultValue: any) => {
            try {
                const stored = storageService.getString(`${STORAGE_KEYS.PREFERENCES}_${key}`);
                return stored ? JSON.parse(stored) : defaultValue;
            } catch (error) {
                console.error(`Error loading preference ${key}:`, error);
                return defaultValue;
            }
        };

        return {
            // Initialize preferences from storage
            initialize: flow(function* () {
                try {
                    console.log('Initializing preferences store...');

                    // Load all preferences from storage
                    self.fontSize = loadValue('fontSize', 16);
                    self.isDarkMode = loadValue('isDarkMode', false);
                    self.isHighContrast = loadValue('isHighContrast', false);
                    self.isReduceMotion = loadValue('isReduceMotion', false);
                    self.isScreenReaderEnabled = loadValue('isScreenReaderEnabled', false);
                    self.isTextToSpeechEnabled = loadValue('isTextToSpeechEnabled', false);
                    self.isHapticsEnabled = loadValue('isHapticsEnabled', true);
                    self.isSimpleNavigation = loadValue('isSimpleNavigation', false);
                    self.customTextColor = loadValue('customTextColor', Colors.light.text);
                    self.customBackgroundColor = loadValue('customBackgroundColor', Colors.light.background);

                    self.isInitialized = true;
                    console.log('Preferences store initialized successfully');
                } catch (error) {
                    console.error('Error initializing preferences store:', error);
                    self.isInitialized = true;
                }
            }),

            // Theme actions
            setDarkMode(enabled: boolean) {
                self.isDarkMode = enabled;
                persistValue('isDarkMode', enabled);
            },

            setHighContrast(enabled: boolean) {
                self.isHighContrast = enabled;
                persistValue('isHighContrast', enabled);
            },

            // Accessibility actions
            setFontSize(size: number) {
                self.fontSize = Math.max(12, Math.min(24, size)); // Clamp between 12-24
                persistValue('fontSize', self.fontSize);
            },

            setReduceMotion(enabled: boolean) {
                self.isReduceMotion = enabled;
                persistValue('isReduceMotion', enabled);
            },

            setScreenReader(enabled: boolean) {
                self.isScreenReaderEnabled = enabled;
                persistValue('isScreenReaderEnabled', enabled);
            },

            setTextToSpeech(enabled: boolean) {
                self.isTextToSpeechEnabled = enabled;
                persistValue('isTextToSpeechEnabled', enabled);
            },

            setHaptics(enabled: boolean) {
                self.isHapticsEnabled = enabled;
                persistValue('isHapticsEnabled', enabled);
            },

            setSimpleNavigation(enabled: boolean) {
                self.isSimpleNavigation = enabled;
                persistValue('isSimpleNavigation', enabled);
            },

            // Custom colors actions
            setCustomTextColor(color: string) {
                self.customTextColor = color;
                persistValue('customTextColor', color);
            },

            setCustomBackgroundColor(color: string) {
                self.customBackgroundColor = color;
                persistValue('customBackgroundColor', color);
            },

            // Generic switch handler for UI
            handleSwitchToggle(key: string, value: boolean) {
                switch (key) {
                    case 'theme':
                        this.setDarkMode(value);
                        break;
                    case 'contrast':
                        this.setHighContrast(value);
                        break;
                    case 'reduceMotion':
                        this.setReduceMotion(value);
                        break;
                    case 'screenReader':
                        this.setScreenReader(value);
                        break;
                    case 'textToSpeech':
                        this.setTextToSpeech(value);
                        break;
                    case 'haptics':
                        this.setHaptics(value);
                        break;
                    case 'simpleNavigation':
                        this.setSimpleNavigation(value);
                        break;
                    default:
                        console.warn(`Unknown preference key: ${key}`);
                }
            },

            // Reset all preferences to default
            resetToDefaults() {
                this.setFontSize(16);
                this.setDarkMode(false);
                this.setHighContrast(false);
                this.setReduceMotion(false);
                this.setScreenReader(false);
                this.setTextToSpeech(false);
                this.setHaptics(true);
                this.setSimpleNavigation(false);
                this.setCustomTextColor(Colors.light.text);
                this.setCustomBackgroundColor(Colors.light.background);
            },

            // Reset only theme preferences (colors)
            resetThemePreferences() {
                this.setCustomTextColor(Colors.light.text);
                this.setCustomBackgroundColor(Colors.light.background);
            },

            // Reset only font preferences
            resetFontPreferences() {
                this.setFontSize(16);
            },

            // Placeholder: Reset only language preferences (actual language reset is in LanguageStore)
            resetLanguagePreferences() {
                // This function is a placeholder. Actual language reset should be called on LanguageStore.
            },

            // Bulk update preferences (useful for importing settings)
            updatePreferences(preferences: Partial<{
                fontSize: number;
                isDarkMode: boolean;
                isHighContrast: boolean;
                isReduceMotion: boolean;
                isScreenReaderEnabled: boolean;
                isTextToSpeechEnabled: boolean;
                isHapticsEnabled: boolean;
                isSimpleNavigation: boolean;
                customTextColor: string;
                customBackgroundColor: string;
            }>) {
                Object.entries(preferences).forEach(([key, value]) => {
                    switch (key) {
                        case 'fontSize':
                            this.setFontSize(value as number);
                            break;
                        case 'isDarkMode':
                            this.setDarkMode(value as boolean);
                            break;
                        case 'isHighContrast':
                            this.setHighContrast(value as boolean);
                            break;
                        case 'isReduceMotion':
                            this.setReduceMotion(value as boolean);
                            break;
                        case 'isScreenReaderEnabled':
                            this.setScreenReader(value as boolean);
                            break;
                        case 'isTextToSpeechEnabled':
                            this.setTextToSpeech(value as boolean);
                            break;
                        case 'isHapticsEnabled':
                            this.setHaptics(value as boolean);
                            break;
                        case 'isSimpleNavigation':
                            this.setSimpleNavigation(value as boolean);
                            break;
                        case 'customTextColor':
                            this.setCustomTextColor(value as string);
                            break;
                        case 'customBackgroundColor':
                            this.setCustomBackgroundColor(value as string);
                            break;
                    }
                });
            },
        };
    });

export type IPreferencesStore = Instance<typeof PreferencesStore>;
export default PreferencesStore;