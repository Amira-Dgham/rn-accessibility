import { LANGUAGE_CODE_REGEX } from '@/constants/regex';
import { SupportedLanguage, TranslationNestedKey, translations } from '@/locales';

/**
 * Get translation from specific language with parameter interpolation
 */
export function getTranslationFromLanguage(
    lang: SupportedLanguage,
    key: string,
    params?: Record<string, string | number>,
    defaultValue: string = key
): string {
    const keys = key.split('.');
    let translation: any = translations[lang];

    for (const k of keys) {
        if (translation && typeof translation === 'object' && k in translation) {
            translation = translation[k];
        } else {
            return defaultValue;
        }
    }

    let result = typeof translation === 'string' ? translation : defaultValue;

    // Handle parameter interpolation
    if (params && typeof result === 'string') {
        result = result.replace(LANGUAGE_CODE_REGEX, (match, paramKey) => {
            return params[paramKey]?.toString() || match;
        });
    }

    return result;
}

/**
 * Validate if language code is supported
 */
export function isValidLanguageCode(
    lang: string,
    availableLanguages: Array<{ code: string; name: string; nativeName: string }>
): lang is SupportedLanguage {
    return availableLanguages.some(availableLang => availableLang.code === lang);
}

/**
 * Get translation with automatic fallback to English
 */
export function translateWithFallback(
    currentLanguage: SupportedLanguage,
    key: TranslationNestedKey | string,
    params?: Record<string, string | number>
): string {
    const keys = key.split('.');
    let translation: any = translations[currentLanguage];

    // Navigate through nested keys
    for (const k of keys) {
        if (translation && typeof translation === 'object' && k in translation) {
            translation = translation[k];
        } else {
            // If translation not found, try English as fallback
            if (currentLanguage !== 'en') {
                return getTranslationFromLanguage('en', key, params, key);
            }
            return key; // Return key as fallback
        }
    }

    let result = typeof translation === 'string' ? translation : key;

    // Handle parameter interpolation {{param}}
    if (params && typeof result === 'string') {
        result = result.replace(LANGUAGE_CODE_REGEX, (match, paramKey) => {
            return params[paramKey]?.toString() || match;
        });
    }

    return result;
}

/**
 * Get device preferred language that is supported
 */
export function getPreferredSupportedLanguage(
    deviceLanguages: Array<{ languageCode: string }>,
    availableLanguages: Array<{ code: string; name: string; nativeName: string }>
): SupportedLanguage | null {
    for (const deviceLang of deviceLanguages) {
        if (isValidLanguageCode(deviceLang.languageCode, availableLanguages)) {
            return deviceLang.languageCode as SupportedLanguage;
        }
    }
    return null;
}