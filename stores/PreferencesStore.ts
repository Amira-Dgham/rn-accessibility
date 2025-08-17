import { DEFAULT_PREFERENCES, PREFERENCES_CONFIG } from '@/constants/preferences';
import { STORAGE_KEYS } from '@/constants/storage';
import { storageService } from '@/services/StorageService';
import { Colors } from '@/theme';
import { Instance, flow, types } from 'mobx-state-tree';

export const PreferencesStore = types
  .model('PreferencesStore', {
    // Accessibility preferences
    fontSize: types.optional(types.number, DEFAULT_PREFERENCES.fontSize),
    isDarkMode: types.optional(types.boolean, DEFAULT_PREFERENCES.isDarkMode),
    isHighContrast: types.optional(types.boolean, DEFAULT_PREFERENCES.isHighContrast),
    isReduceMotion: types.optional(types.boolean, DEFAULT_PREFERENCES.isReduceMotion),
    isScreenReaderEnabled: types.optional(types.boolean, DEFAULT_PREFERENCES.isScreenReaderEnabled),
    isTextToSpeechEnabled: types.optional(types.boolean, DEFAULT_PREFERENCES.isTextToSpeechEnabled),
    isHapticsEnabled: types.optional(types.boolean, DEFAULT_PREFERENCES.isHapticsEnabled),
    isSimpleNavigation: types.optional(types.boolean, DEFAULT_PREFERENCES.isSimpleNavigation),

    // Theme preferences are controlled by isDarkMode only
    customTextColor: types.optional(types.string, Colors.light.text),
    customBackgroundColor: types.optional(types.string, Colors.light.background),

    isInitialized: types.optional(types.boolean, false),
  })
  .views((self) => ({
    // Get all preferences as an array for rendering
    get preferencesConfig() {
      return PREFERENCES_CONFIG;
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

          // Load all preferences from storage with defaults
          Object.entries(DEFAULT_PREFERENCES).forEach(([key, defaultValue]) => {
            (self as any)[key] = loadValue(key, defaultValue);
          });
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
        // Reset custom colors when switching theme mode
        const defaultColors = enabled ? Colors.dark : Colors.light;
        this.setCustomTextColor(defaultColors.text);
        this.setCustomBackgroundColor(defaultColors.background);
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
        this.updatePreferences(DEFAULT_PREFERENCES);
        this.resetThemePreferences();
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
      // Bulk update preferences (useful for importing settings)
      updatePreferences(
        preferences: Partial<{
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
        }>,
      ) {
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
