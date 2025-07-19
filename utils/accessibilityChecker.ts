// Make sure AccessibilityLevel is exported as an enum or object, not just a type
import { ACCESSIBILITY_LEVEL_BASE_CONFIG } from '@/constants';
import { AccessibilityLevel } from '@/types/accessibility';

// Utility function to calculate luminance
export const getLuminance = (hex: string): number => {
  // Remove # if present and handle short hex codes
  const color = hex.replace('#', '');
  const fullHex =
    color.length === 3
      ? color
          .split('')
          .map((c) => c + c)
          .join('')
      : color;

  // Convert to RGB
  const r = parseInt(fullHex.substr(0, 2), 16) / 255;
  const g = parseInt(fullHex.substr(2, 2), 16) / 255;
  const b = parseInt(fullHex.substr(4, 2), 16) / 255;

  // Apply gamma correction
  const sRGB = [r, g, b].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4),
  );

  // Calculate luminance
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
};

// Utility function to calculate contrast ratio
export const getContrastRatio = (color1: string, color2: string): number => {
  try {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  } catch {
    // If color parsing fails, return a safe contrast ratio
    return 7;
  }
};

// Check if color meets accessibility requirements
export const meetsAccessibilityLevel = (
  textColor: string,
  backgroundColor: string,
  level: AccessibilityLevel,
  fontSize: number,
): boolean => {
  if (level === AccessibilityLevel.NONE) return true;

  const contrastRatio = getContrastRatio(textColor, backgroundColor);
  const requiredRatio = ACCESSIBILITY_LEVEL_BASE_CONFIG[level].contrastRatio ?? 4.5;

  // Large text (18pt+ or 14pt+ bold) has lower requirements
  const isLargeText = fontSize >= 18 || fontSize >= 14;
  const adjustedRequiredRatio =
    isLargeText && level === AccessibilityLevel.AA
      ? 3
      : isLargeText && level === AccessibilityLevel.AAA
        ? 4.5
        : requiredRatio;

  return contrastRatio >= adjustedRequiredRatio;
};
