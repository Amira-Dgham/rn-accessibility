import { AVAILABLE_LANGUAGES, STORAGE_KEYS } from '@/constants/storage';
import { SupportedLanguage, TranslationNestedKey } from '@/locales';
import { storageService } from '@/services/StorageService';
import { LanguageOption } from '@/types/languageOption';
import {
  getPreferredSupportedLanguage,
  getTranslationFromLanguage as getTranslationFromLang,
  isValidLanguageCode,
  translateWithFallback,
} from '@/utils/languageUtils';
import { flow, Instance, types } from 'mobx-state-tree';
import * as Localization from 'react-native-localize';

// Main Language Store
export const LanguageStore = types
  .model('LanguageStore', {
    currentLanguage: types.optional(types.enumeration<SupportedLanguage>(['en', 'fr']), 'en'),
    isInitialized: types.optional(types.boolean, false),
    availableLanguages: types.optional(types.array(LanguageOption), AVAILABLE_LANGUAGES),
  })
  .views((self) => ({
    get isRTL() {
      // Neither English nor French are RTL, but you can expand this
      return false;
    },

    get currentLanguageInfo() {
      return self.availableLanguages.find((lang) => lang.code === self.currentLanguage);
    },

    // Get translation by key with dot notation support
    translate(
      key: TranslationNestedKey | string,
      params?: Record<string, string | number>,
    ): string {
      return translateWithFallback(self.currentLanguage, key, params);
    },

    // Helper method to get translation from specific language
    getTranslationFromLanguage(
      lang: SupportedLanguage,
      key: string,
      params?: Record<string, string | number>,
      defaultValue: string = key,
    ): string {
      return getTranslationFromLang(lang, key, params, defaultValue);
    },

    // Validate if language is supported
    isValidLanguage(lang: string): lang is SupportedLanguage {
      return isValidLanguageCode(lang, self.availableLanguages);
    },
  }))
  .actions((self) => {
    // Helper function to set language and persist to storage
    const setLanguageAndPersist = (language: SupportedLanguage) => {
      if (isValidLanguageCode(language, self.availableLanguages)) {
        self.currentLanguage = language;
        storageService.set(STORAGE_KEYS.LANGUAGE, language);
      } else {
        console.error(`Invalid language: ${language}`);
      }
    };

    return {
      // Initialize language from storage or device
      initialize: flow(function* () {
        try {
          // Try to get saved language from storage
          const savedLanguage = storageService.getString(
            STORAGE_KEYS.LANGUAGE,
          ) as SupportedLanguage;

          if (savedLanguage && isValidLanguageCode(savedLanguage, self.availableLanguages)) {
            self.currentLanguage = savedLanguage;
          } else {
            // If no saved language, try to use device language
            const deviceLanguages = Localization.getLocales();
            const preferredLanguage = getPreferredSupportedLanguage(
              deviceLanguages,
              self.availableLanguages,
            );

            if (preferredLanguage) {
              setLanguageAndPersist(preferredLanguage);
            } else {
              // Default to English if device language is not supported
              setLanguageAndPersist('en');
            }
          }

          self.isInitialized = true;
        } catch (error) {
          console.error('Error initializing language:', error);
          self.currentLanguage = 'en';
          self.isInitialized = true;
        }
      }),

      // Set language and persist to storage
      setLanguage(language: SupportedLanguage) {
        setLanguageAndPersist(language);
      },

      // Toggle between available languages (useful for quick switching)
      toggleLanguage() {
        const currentIndex = self.availableLanguages.findIndex(
          (lang) => lang.code === self.currentLanguage,
        );
        const nextIndex = (currentIndex + 1) % self.availableLanguages.length;
        const nextLanguage = self.availableLanguages[nextIndex];

        if (nextLanguage) {
          setLanguageAndPersist(nextLanguage.code as SupportedLanguage);
        }
      },

      // Reset to default language
      resetToDefault() {
        setLanguageAndPersist('en');
      },

      // Add new language (for future expansion)
      addLanguage(code: string, name: string, nativeName: string) {
        if (!self.availableLanguages.find((lang) => lang.code === code)) {
          self.availableLanguages.push(LanguageOption.create({ code, name, nativeName }));
        }
      },

      // Remove language (for future expansion)
      removeLanguage(code: string) {
        const index = self.availableLanguages.findIndex((lang) => lang.code === code);
        if (index !== -1 && self.availableLanguages.length > 1) {
          self.availableLanguages.splice(index, 1);

          // If removed language was current, switch to first available
          if (self.currentLanguage === code) {
            setLanguageAndPersist(self.availableLanguages[0].code as SupportedLanguage);
          }
        }
      },
    };
  });

export type ILanguageStore = Instance<typeof LanguageStore>;
export default LanguageStore;
