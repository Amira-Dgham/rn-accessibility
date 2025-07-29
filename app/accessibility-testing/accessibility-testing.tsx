import { Card, ThemedView } from '@/components';

import { ACCESSIBILITY_TESTING_TOOLS } from '@/constants/accessibility';
import { AccessibilityTool } from '@/types/accessibility.types';
import { Linking } from 'react-native';
import { translations } from '@/locales';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';

const AccessibilityTesting = () => {
  const { currentLanguage, t } = useLanguage();
  useHeaderTitle(t('accessibility.feature.userTesting.title'));

  return (
    <ThemedView preset="scroll" safeAreaEdges={[]}>
      {ACCESSIBILITY_TESTING_TOOLS.map((tool: AccessibilityTool, idx: number) => {
        const toolsObj = translations[currentLanguage].accessibility.tools as Record<string, any>;
        const toolDetails = toolsObj[tool.localeKey];
        return (
          <Card
            key={tool.id}
            index={idx}
            title={toolDetails.name}
            description={toolDetails.description}
            icon={tool.icon}
            onPress={() => Linking.openURL(tool.url)}
            containerStyle={{ marginBottom: 12 }}
          />
        );
      })}
    </ThemedView>
  );
};

export default AccessibilityTesting;
