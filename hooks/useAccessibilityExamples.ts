import { AccessibilityComponent } from '@/types/accessibility.types';
import { ChildComponentProps } from '@/types/ui.types';
import { useMemo } from 'react';

interface UseAccessibilityExamplesProps {
    componentConfig: AccessibilityComponent;
    selectedLevel: string;
}

export const useAccessibilityExamples = ({ componentConfig, selectedLevel }: UseAccessibilityExamplesProps) => {
    const examplesWithComponents: ChildComponentProps[] = useMemo(() => {
        if (!componentConfig) return [];

        // Create different examples based on the selected level
        const examples = [
            {
                id: '1',
                title: `${componentConfig.title} Example (Level ${selectedLevel})`,
                description: `Example implementation for ${selectedLevel} level compliance`,
                component: null, // You can add actual components here
            },
            {
                id: '2',
                title: `${componentConfig.title} Best Practices (Level ${selectedLevel})`,
                description: `Best practices for ${selectedLevel} level accessibility`,
                component: null,
            }
        ];

        return examples;
    }, [componentConfig, selectedLevel]);

    return {
        examplesWithComponents,
    };
}; 