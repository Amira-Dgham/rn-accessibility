import { AccessibilityLevel } from '@/types/accessibility';

export const ACCESSIBILITY_LEVELS: Record<AccessibilityLevel, {
    name: string;
    color: string;
    backgroundColor: string;
    description: string;
}> = {
    A: {
        name: 'Level A',
        color: '#059669',
        backgroundColor: '#ecfdf5',
        description: 'Minimum level of conformance'
    },
    AA: {
        name: 'Level AA',
        color: '#ea580c',
        backgroundColor: '#fff7ed',
        description: 'Standard level of conformance'
    },
    AAA: {
        name: 'Level AAA',
        color: '#1e40af',
        backgroundColor: '#eff6ff',
        description: 'Enhanced level of conformance'
    }
};

export const WCAG_GUIDELINES = {
    A: [
        'Images have alt text',
        'Videos have captions',
        'Content is keyboard accessible',
        'Page has proper heading structure',
        'Links have descriptive text'
    ],
    AA: [
        'Color contrast ratio of at least 4.5:1',
        'Text can be resized up to 200%',
        'Focus indicators are visible',
        'Touch targets are at least 44x44 pixels',
        'Content reflows at 320px width'
    ],
    AAA: [
        'Color contrast ratio of at least 7:1',
        'Text can be resized up to 200% without assistive technology',
        'Context-sensitive help is available',
        'Error identification and suggestions',
        'Consistent navigation and identification'
    ]
};