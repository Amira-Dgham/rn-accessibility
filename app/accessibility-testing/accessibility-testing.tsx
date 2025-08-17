import { Card, ThemedView } from '@/components';

import { ACCESSIBILITY_TESTING_TOOLS } from '@/constants/accessibility';
import { AccessibilityTool } from '@/types/accessibility.types';
import { Linking } from 'react-native';
import { translations } from '@/locales';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';

/**
 * AccessibilityTesting Screen
 * ---------------------------
 * This screen displays a list of accessibility testing tools.
 * Each tool includes a name, description, and icon, and opens its
 * respective URL when tapped
 */
const AccessibilityTesting: React.FC = () => {
  // Get current language and translation function
  const { currentLanguage, t } = useLanguage();

  // Set the screen header title using localized text
  useHeaderTitle(t('accessibility.feature.userTesting.title'));

  return (
    <ThemedView preset="scroll" safeAreaEdges={[]}>
      {/* Loop through all accessibility testing tools */}
      {ACCESSIBILITY_TESTING_TOOLS.map((tool: AccessibilityTool, idx: number) => {
        // Get localized tool details based on the current language
        const toolsObj = translations[currentLanguage].accessibility.tools as Record<string, any>;
        const toolDetails = toolsObj[tool.localeKey];

        return (
          <Card
            key={tool.id} // Unique key for React list rendering
            index={idx} // Index to style cards differently if needed
            title={toolDetails.name} // Tool name
            description={toolDetails.description} // Tool description
            icon={tool.icon} // Icon for the tool
            onPress={() => Linking.openURL(tool.url)} // Open URL when pressed
            containerStyle={{ marginBottom: 12 }} // Space between cards
          />
        );
      })}
    </ThemedView>
  );
};

export default AccessibilityTesting;
