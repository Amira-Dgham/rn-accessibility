import { ACCESSIBILITY_COMPONENTS } from '@/constants';
// AccessibilityComponentWrapper.tsx
import AccessibilityComponentScreen from '@/components/AccessibilityComponentScreen';
import { useAccessibility } from '@/hooks/useAccessibility';
import { useAccessibilityExamples } from '@/hooks/useAccessibilityExamples';
import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import { useLanguage } from '@/hooks/useLanguage';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

const AccessibilityComponentWrapper = () => {
    const { t } = useLanguage();
    const { levels } = useAccessibility();
    const route = useRoute();
    const params = route.params as { slug?: string } | undefined;
    const slug = params?.slug;
    const [selectedLevel, setSelectedLevel] = useState<string>('A');

    const componentConfig = ACCESSIBILITY_COMPONENTS.find(
        (comp) => comp.title === `${slug}`
    );
    useHeaderTitle(slug);

    // Get examples based on selected level
    const { examplesWithComponents } = useAccessibilityExamples({
        componentConfig: componentConfig!,
        selectedLevel,
    });

    if (!componentConfig) {
        return null;
    }

    return (
        <AccessibilityComponentScreen
            componentConfig={componentConfig}
            levels={levels}
            t={t}
            examplesWithComponents={examplesWithComponents}
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
        />
    );
};

export default AccessibilityComponentWrapper;
