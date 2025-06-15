// Storage keys constants
export const STORAGE_KEYS = {
    LANGUAGE: 'selected_language',
    THEME: 'selected_theme',
    USER_PREFERENCES: 'user_preferences',
    ONBOARDING_COMPLETED: 'onboarding_completed',
} as const;

export const AVAILABLE_LANGUAGES = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
]