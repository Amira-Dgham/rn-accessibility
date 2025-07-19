import {
  ACCESSIBILITY_FEATURES_BASE,
  ACCESSIBILITY_LEVEL_BASE_CONFIG,
} from '@/constants/accessibility';
import { useLanguageStore } from '@/context/StoreContext';
import { AccessibilityLevel } from '@/types/accessibility';

export const useAccessibility = () => {
  const languageStore = useLanguageStore();

  // Get localized accessibility levels
  const getAccessibilityLevels = () => {
    return Object.keys(ACCESSIBILITY_LEVEL_BASE_CONFIG).map((level) => ({
      key: level as AccessibilityLevel,
      name: languageStore.translate(`accessibility.levels.${level}.name`),
      description: languageStore.translate(`accessibility.levels.${level}.description`),
      contrastRatio: ACCESSIBILITY_LEVEL_BASE_CONFIG[level as AccessibilityLevel].contrastRatio,
    }));
  };

  // Get localized accessibility features
  const getAccessibilityFeatures = () => {
    return ACCESSIBILITY_FEATURES_BASE.map((feature) => ({
      ...feature,
      title: languageStore.translate(`accessibility.feature.${feature.key}.title`),
      description: languageStore.translate(`accessibility.feature.${feature.key}.description`),
    }));
  };

  return {
    levels: getAccessibilityLevels(),
    features: getAccessibilityFeatures(),
  };
};
