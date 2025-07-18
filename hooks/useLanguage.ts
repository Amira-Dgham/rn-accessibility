import { useLanguageStore } from '@/context/StoreContext';
import { SupportedLanguage, TranslationNestedKey } from '@/locales';
import { useCallback } from 'react';

// Main language hook
export const useLanguage = () => {
  const languageStore = useLanguageStore();

  const translate = useCallback(
    (key: TranslationNestedKey | string, params?: Record<string, string | number>) => {
      return languageStore.translate(key, params);
    },
    [languageStore],
  );

  const changeLanguage = useCallback(
    (language: SupportedLanguage) => {
      languageStore.setLanguage(language);
    },
    [languageStore],
  );

  const toggleLanguage = useCallback(() => {
    languageStore.toggleLanguage();
  }, [languageStore]);

  const resetLanguage = useCallback(() => {
    languageStore.resetToDefault();
  }, [languageStore]);

  const isValidLanguage = useCallback(
    (lang: string) => {
      return languageStore.isValidLanguage(lang);
    },
    [languageStore],
  );

  return {
    // Translation function (short alias)
    t: translate,
    translate,

    // Language management
    changeLanguage,
    toggleLanguage,
    resetLanguage,
    isValidLanguage,

    // Current state
    currentLanguage: languageStore.currentLanguage,
    currentLanguageInfo: languageStore.currentLanguageInfo,
    availableLanguages: languageStore.availableLanguages,
    isInitialized: languageStore.isInitialized,
    isRTL: languageStore.isRTL,

    // Store reference (for advanced usage)
    languageStore,
  };
};

// Hook for translation only (lighter version)
export const useTranslation = () => {
  const languageStore = useLanguageStore();

  const t = useCallback(
    (key: TranslationNestedKey | string, params?: Record<string, string | number>) => {
      return languageStore.translate(key, params);
    },
    [languageStore],
  );

  return { t, translate: t };
};

// Custom hook for language switching UI
export const useLanguageSwitch = () => {
  const languageStore = useLanguageStore();

  const getLanguageOptions = useCallback(() => {
    return languageStore.availableLanguages.map((lang) => ({
      ...lang,
      isSelected: lang.code === languageStore.currentLanguage,
    }));
  }, [languageStore]);

  const selectLanguage = useCallback(
    (code: string) => {
      if (languageStore.isValidLanguage(code)) {
        languageStore.setLanguage(code as SupportedLanguage);
      }
    },
    [languageStore],
  );

  return {
    options: getLanguageOptions(),
    currentLanguage: languageStore.currentLanguage,
    selectLanguage,
    toggleLanguage: languageStore.toggleLanguage,
  };
};
