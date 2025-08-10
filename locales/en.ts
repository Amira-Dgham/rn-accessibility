export const en = {
  common: {
    ok: 'OK',
    cancel: 'Cancel',
    save: 'Save',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
  },
  navigation: {
    home: 'Home',
    components: 'Components',
    guidelines: 'Guidelines',
    settings: 'Settings',
  },
  list: {
    empty: 'List is empty',
  },
  screens: {
    home: {
      title: 'Accessibility Guide',
      subtitle: 'Master digital accessibility with comprehensive examples and guidelines',
    },
    components: {
      title: 'WayA11Y components',
      subtitle: 'Explore all available accessibility components and features',
    },
    settings: {
      title: 'Settings',
      subtitle: 'Customize your accessibility preferences',
      fontSize: {
        title: 'Font Size',
        description: 'Adjust the size of the text displayed in the app',
        reset: 'Reset to Default',
      },
      colors: {
        title: 'Color Customization',
        description: 'Adjust background and text colors for accessibility.',
        background: 'Background Color',
        text: 'Text Color',
        reset: 'Reset to Default',
        contrastLabel: 'Contrast Ratio',
        contrastGood: '(Good)',
        contrastLow: '(Low)',
      },
      language: {
        title: 'Language Customization',
        description: 'Switch between available languages for the app.',
        selectLabel: 'Select Language',
      },
    },
    guidelines: {
      title: 'Accessibility Guidelines',
      subtitle: 'Key questions, principles, and resources for accessible development.',
      essentials: {
        title: 'Essentials for Developers',
        intro:
          'Ask yourself these questions to ensure your app is accessible. Each point links to a key accessibility principle or WCAG guideline.',
        questions: {
          semanticMarkup: 'Semantic Markup: Do all elements have the correct semantic markup?',
          inputLabels:
            'Input Labels: Are there descriptive labels marking each input element, and labels for input groups?',
          focus:
            'Focus: Is there an indicator when interactive elements have keyboard focus, and does its order follow a logical sequence?',
          keyboard:
            'Keyboard: Can all interactive elements be selected and activated using the keyboard?',
          names: 'Names: Do all interactive controls have an accessible descriptive name?',
          roles:
            'Roles: Do all custom controls and widgets have the correct role (e.g., link, button, tab panel)?',
          dynamicUpdates:
            'Dynamic Updates: Are all dynamic updates, including error messages, conveyed to assistive technology?',
          colors: 'Colors: Does the design provide sufficient color contrast?',
          layouts: 'Layouts: Do page layouts adapt to different window widths and text sizes?',
          images: 'Images: Do images and icons have the appropriate text alternative?',
        },
        explanations: {
          semanticMarkup: 'Use semantic elements for regions and content.',
          inputLabels: 'Provide accessible labels and instructions.',
          focus: 'Provide logical and visible focus indication.',
          keyboard: 'Support keyboard interaction.',
          names: 'Custom widgets and controls should have accessible names.',
          roles: 'Provide name, role, and value information.',
          dynamicUpdates: 'Provide notification of dynamic changes to content.',
          colors: 'Avoid reliance on color alone.',
          layouts: 'Support flexibility and adaptation.',
          images: 'Provide accessible images.',
        },
        examples: {
          headingStructure: 'Use heading structure',
          mainLandmark: 'Create main landmark',
          descriptiveInputLabels: 'Create descriptive input labels',
          requiredFields: 'Indicate required fields',
          focusOrder: 'Provide focus order for interactive elements',
          linkFocus: 'Indicate paragraph/link focus',
          manageFocus: 'Manage focus and inactive elements',
          accessibleModals: 'Create accessible modal dialogs',
          expandableSections: 'Create accessible expandable sections',
          customKeyboardControls: 'Create custom controls that are keyboard operable',
          accessibleNames: 'Provide accessible names for buttons',
          autocomplete: 'Autocomplete input controls',
          liveRegions: 'Form feedback with live regions',
          requiredFieldsNoColor: 'Indicate required fields without reliance on color',
          currentPageNoColor: 'Indicate accessible current page without reliance on color',
          textResizing: 'Enable text resizing',
          iconInfo: 'Provide icon information to users of assistive technology',
          altText: 'Provide useful alternative text',
        },
        resources: {
          title: 'Helpful Resources',
          appt: 'Appt.org: Accessibility Handbook & Stats',
          silktide: 'Silktide: WCAG for Beginners',
          w3c: 'W3C: WCAG Official Documentation',
          medium: 'Medium: Complete Guide to Accessibility',
          medium2: 'Medium: Introduction to Accessibility',
        },
      },
      successCriteria: {
        description:
          'This is where things get specific. Success criteria are the checkpoints that tell you how to make your site more inclusive. They’re divided into three levels:',
        levelA: 'A (bare essentials)',
        levelAA: 'AA (the legal requirement in most places)',
        levelAAA: 'AAA (reaching for the stars).',
      },
      principles: {
        perceivable:
          'Perceivable: Information and user interface components must be presentable to users in ways they can perceive.',
        operable: 'Operable: User interface components and navigation must be operable.',
        understandable:
          'Understandable: Information and the operation of user interface must be understandable.',
        robust:
          'Robust: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.',
      },
      sections: {
        successCriteria: 'Accessibility Success Criteria',
        principles: 'The 4 Accessibility Principles',
        essentials: 'Essentials for Developers',
        resources: 'Helpful Resources',
      },
    },
  },
  accessibility: {
    complianceLevels: 'Compliance Levels',
    features: 'Features',
    levels: {
      A: {
        name: 'A',
        description: 'Basic accessibility requirements',
      },
      AA: {
        name: 'AA',
        description: 'Enhanced accessibility requirements',
      },
      AAA: {
        name: 'AAA',
        description: 'Highest accessibility requirements',
      },
      none: {
        name: 'None',
        description: 'No specific requirements',
      },
    },
    feature: {
      wcagCompliance: {
        title: 'WCAG Compliance',
        description: 'Learn and implement WCAG 2.1 guidelines across all levels',
      },
      componentsSamples: {
        title: 'Accessibility Components',
        description: 'Interactive examples of accessible UI components',
      },
      userTesting: {
        title: 'Accessibility Testing Tools',
        description: 'Tools and guidelines for accessibility user testing',
      },
    },
    preferences: {
      title: 'Preferences',
      description: 'Customize your accessibility and app experience',
      fontSize: {
        title: 'Text Size',
        description: 'Adjust the size of the text displayed in the app',
      },
      theme: {
        title: 'Theme',
        description: 'Switch between light and dark mode',
      },
      contrast: {
        title: 'High Contrast Mode',
        description: 'Enable a higher contrast color scheme for better visibility',
      },
      reduceMotion: {
        title: 'Reduce Motion',
        description: 'Minimize animations and motion effects',
      },
      screenReader: {
        title: 'Screen Reader',
        description: 'Enhance compatibility with screen readers',
      },
      language: {
        title: 'Language',
        description: 'Choose the language of the app',
      },
      textToSpeech: {
        title: 'Text to Speech',
        description: 'Enable speech for selected content',
      },
      haptics: {
        title: 'Haptic Feedback',
        description: 'Enable or disable vibration feedback',
      },
      customColors: {
        title: 'Color Customization',
        description: 'Personalize text and background colors',
      },
      simpleNavigation: {
        title: 'Simplified Navigation',
        description: 'Use a simplified layout for easier navigation',
      },
    },
    tools: {
      nativeAccessibilityEngine: {
        name: 'Native Accessibility Engine',
        description: 'Missing labels, roles, contrast',
        useCase: 'CLI checker for accessibility props',
        guidelines: 'WCAG, ARIA',
        usage: 'Run in dev or test env. Early issue detection in code',
        free: 'Free',
      },
      axeDevtoolsReactNative: {
        name: 'Axe DevTools React Native (Deque)',
        description: 'WCAG violations SDK to run accessibility scans inside app',
        useCase: 'Add SDK to your RN project. Deep automatic analysis',
        guidelines: 'WCAG, Section 508',
        usage: 'Add SDK to your RN project. Deep automatic analysis',
        free: 'Free / Paid',
      },
      jestTestingLibraryAxe: {
        name: 'Jest + @testing-library/react-native + jest-axe',
        description: 'Semantic markup, labels',
        useCase: 'Unit-level a11y assertions',
        guidelines: 'WCAG, ARIA',
        usage: 'In your test suite. CI pipeline integration',
        free: 'Free',
      },
      accessibilityInspectorXcode: {
        name: 'Accessibility Inspector (Xcode)',
        description: 'Touch targets, labels, contrast',
        useCase: 'Visual inspector for a11y elements',
        guidelines: 'WCAG, iOS a11y Guidelines',
        usage: 'Built into Xcode tools. Manual iOS auditing',
        free: 'Free',
      },
      accessibilityScannerAndroid: {
        name: 'Accessibility Scanner (Android)',
        description: 'Touch targets, color contrast, missing labels',
        useCase: 'Visual scanner for UI accessibility',
        guidelines: 'WCAG, Android a11y Guidelines',
        usage: 'Download from Play Store. Auditing Android UI in-app',
        free: 'Free',
      },
      voiceoverIos: {
        name: 'VoiceOver (iOS)',
        description: 'Screen reader support',
        useCase: 'Simulates blind user experience',
        guidelines: 'WCAG',
        usage: 'Enable in iOS settings. Screen reader validation (iOS)',
        free: 'Free',
      },
      talkbackAndroid: {
        name: 'TalkBack (Android)',
        description: 'Screen reader support',
        useCase: 'Spoken feedback on interaction',
        guidelines: 'WCAG',
        usage: 'Enable in Android settings. Screen reader validation (Android)',
        free: 'Free',
      },
      switchAccessSwitchControl: {
        name: 'Switch Access / Switch Control',
        description: 'External input support',
        useCase: 'Simulate motor-impairment navigation',
        guidelines: 'WCAG',
        usage: 'Enable in iOS/Android settings. Motor accessibility testing',
        free: 'Free',
      },
      zoomScreenMagnifier: {
        name: 'Zoom / Screen Magnifier',
        description: 'Visual accessibility',
        useCase: 'Tests zoom behavior for low vision users',
        guidelines: 'WCAG',
        usage: 'Enable in accessibility settings. Text readability & layout zoom',
        free: 'Free',
      },
      colorContrastAnalyzer: {
        name: 'Color Contrast Analyzer / ColorSlurp',
        description: 'Color contrast',
        useCase: 'Checks text readability and contrast ratios',
        guidelines: 'WCAG',
        usage: 'Use on-device or online. UI color testing',
        free: 'Free',
      },
      reactNativeEslintLibrary: {
        name: 'React Native ESLint Library',
        description: 'Semantic markup, labels',
        useCase: 'Unit-level a11y assertions',
        guidelines: 'WCAG, ARIA',
        usage: 'In your test suite. CI pipeline integration',
        free: 'Free',
      },
      reduceMotion: {
        name: 'Reduce Motion',
        description: 'Reduce motion',
        useCase: 'Reduce motion',
        guidelines: 'WCAG',
        usage: 'Reduce motion',
        free: 'Free',
      },
      transcriptionsCaptions: {
        name: 'Transcriptions / Captions',
        description: 'Transcriptions / Captions',
        useCase: 'Transcriptions / Captions',
        guidelines: 'WCAG',
        usage: 'Transcriptions / Captions',
        free: 'Free',
      },
    },

    components: {
      examples: 'Examples',
      requirements: 'Requirements',
      accordions: {
        title: 'Accordions',
        description:
          'Accordions are collapsible content sections that help organize information hierarchically.',
        requirements: {
          A: {
            '1': 'Provide clear accessibility labels for the accordion header',
            '2': 'Ensure proper focus management when accordion expands/collapses',
            '3': 'Use semantic roles to identify accordion sections',
          },
          AA: {
            '1': 'Add appropriate accessibility hints for interaction expectations',
            '2': 'Ensure the entire accordion header is tappable with minimum 44×44 points touch target',
            '3': 'Include focus indication with sufficient contrast',
          },
          AAA: {
            '1': 'Allow keyboard shortcuts for quick navigation between accordions',
            '2': 'Provide custom accessibility actions for advanced interaction',
            '3': 'Remember expanded/collapsed states between sessions for user convenience',
          },
        },
      },
      alerts: {
        title: 'Alerts',
        description: 'Accessible alerts notify users of important information or changes in state.',
        requirements: {
          A: {
            '1': 'Use accessibilityRole="alert" on custom alert components (not native Alert.alert() which doesn\'t expose this)',
            '2': 'Provide clear and descriptive accessibilityLabel for alert titles and buttons',
            '3': 'Use AccessibilityInfo.announceForAccessibility() to announce critical messages (especially for custom alerts)',
            '4': 'Ensure keyboard or screen reader focus is programmatically moved to the alert content when it appears',
          },
          AA: {
            '1': 'Write alert messages using plain language — no jargon or ambiguous terms',
            '2': 'Provide sufficient time before auto-dismissal (e.g., avoid instant disappearance unless user-triggered)',
            '3': 'Use clear, action-oriented button labels like "Try Again" instead of just "OK"',
            '4': 'When the alert closes, ensure focus is returned to a meaningful location (e.g., the last focused button or input)',
          },
          AAA: {
            '1': 'Implement alert priority levels (e.g., distinguish between "info", "warning", "error" with announcements or visuals)',
            '2': 'Support dismiss actions using accessibilityActions (for custom alerts, especially in modals)',
            '3': 'Provide users with the option to save or review important alerts later (e.g., by logging alerts in an "Activity" screen)',
            '4': 'Support multiple notification methods like haptic feedback (Haptics.notificationAsync()), sound, or vibration',
          },
        },
      },
      buttons: {
        title: 'Buttons',
        description: 'Accessible buttons are operable by all users and provide clear feedback.',
        requirements: {
          A: {
            '1': 'Use accessibilityRole="button" for all buttons',
            '2': 'Provide clear accessibilityLabel for button purpose',
            '3': 'Ensure button state is communicated via accessibilityState',
            '4': 'Make entire button tappable, not just text',
          },
          AA: {
            '1': 'Set accessibilityHint for complex button functions',
            '2': 'Ensure minimum touch target size of 44×44 points',
            '3': 'Provide visible focus indicator when button is selected',
            '4': 'Maintain 4.5:1 contrast ratio between text and background',
          },
          AAA: {
            '1': 'Implement custom button accessibilityAction',
            '2': 'Provide haptic feedback for button presses',
            '3': 'Support keyboard shortcuts for primary buttons',
            '4': 'Ensure buttons are operable with various input methods',
          },
        },
      },
      cards: {
        title: 'Cards',
        description:
          'Accessible cards group related information and are navigable by assistive technology.',
        requirements: {
          A: {
            '1': "Make entire card tappable if it's interactive",
            '2': 'Provide descriptive accessibilityLabel',
            '3': 'Use appropriate accessibilityRole (button if tappable)',
            '4': 'Ensure proper heading hierarchy within card content',
          },
          AA: {
            '1': 'Ensure proper focus indication when card is selected',
            '2': 'Add accessibilityHint about what happens when interacting',
            '3': 'Ensure card layout is responsive for different text sizes',
            '4': 'Provide sufficient contrast for card content',
          },
          AAA: {
            '1': 'Implement custom swipe actions with accessibility',
            '2': 'Provide context-aware accessibility actions',
            '3': 'Support keyboard navigation between cards',
            '4': 'Include haptic feedback for card interactions',
          },
        },
      },
      charts: {
        title: 'Charts',
        description:
          'Accessible charts provide data visualization that is perceivable by all users.',
        requirements: {
          A: {
            '1': 'Provide text alternatives for chart data',
            '2': "Ensure chart doesn't rely on color alone to convey information",
            '3': 'Make chart data accessible through screen readers',
            '4': 'Use accessibilityLabel to describe chart purpose',
          },
          AA: {
            '1': 'Add detailed descriptions of data',
            '2': 'Provide alternative tabular representation',
            '3': 'Include audio feedback for data point selection',
            '4': 'Support focus navigation between chart elements',
          },
          AAA: {
            '1': 'Provide interactive exploration of data points',
            '2': 'Support multiple representation formats',
            '3': 'Implement sonification of chart data',
            '4': 'Allow customization of chart appearance for accessibility',
            '5': 'Provide Sign Language or Visual Descriptions for Video-Embedded Charts',
          },
        },
      },
      checkboxes: {
        title: 'Checkboxes',
        description:
          'Accessible checkboxes are operable, clearly labeled, and provide state feedback.',
        requirements: {
          A: {
            '1': 'Set accessibilityRole="checkbox"',
            '2': 'Provide clear accessibilityLabel',
            '3': 'Use accessibilityState={{ checked }} to indicate state',
            '4': 'Ensure entire checkbox area is tappable',
          },
          AA: {
            '1': 'Add accessibilityHint for expected behavior',
            '2': 'Ensure minimum touch target size of 44×44 points',
            '3': 'Provide sufficient contrast for checkbox states',
            '4': 'Support text resizing without breaking layout',
          },
          AAA: {
            '1': 'Implement keyboard shortcuts for checking/unchecking',
            '2': 'Add haptic feedback for state changes',
            '3': 'Support grouping of related checkboxes',
            '4': 'Provide custom accessibility actions',
          },
        },
      },
      confirmationDialog: {
        title: 'Confirmation Dialog',
        description:
          'Accessible confirmation dialogs provide clear choices and prevent accidental actions.',
        requirements: {
          A: {
            '1': 'Dialog is modal and traps focus',
            '2': 'Dialog has clear action buttons',
          },
          AA: {
            '1': 'Dialog provides sufficient color contrast',
            '2': 'Dialog is announced to screen readers',
          },
          AAA: {
            '1': 'Dialog supports keyboard-only operation',
            '2': 'Dialog provides detailed context for assistive technology',
          },
        },
      },
      dataTable: {
        title: 'Data Tables',
        description:
          'Accessible data tables provide structured information that is navigable and understandable by all users.',
        requirements: {
          A: {
            '1': 'Use proper table markup with row/column headers',
            '2': 'Provide table caption or summary',
            '3': 'Ensure proper reading order for screen readers',
            '4': 'Associate data cells with header cells',
          },
          AA: {
            '1': 'Support keyboard navigation between cells',
            '2': 'Implement column sorting with accessibility announcements',
            '3': 'Provide status updates for dynamic content changes',
            '4': 'Include row and column index announcements',
          },
          AAA: {
            '1': 'Support multiple selection methods',
            '2': 'Provide alternative views (card, list) for complex tables',
            '3': 'Allow custom configuration of column visibility',
            '4': 'Include contextual help for table interactions',
          },
        },
      },
      dateTimePicker: {
        title: 'Date & Time Pickers',
        description:
          'Accessible date and time pickers allow users to select dates and times through various input methods.',
        requirements: {
          A: {
            '1': 'Provide clear labels for date and time pickers',
            '2': 'Ensure dates and times are announced properly by screen readers',
          },
          AA: {
            '1': 'Support multiple date formats',
            '2': 'Provide error prevention for invalid dates',
            '3': 'Announce selected date changes to screen readers',
            '4': 'Implement clear current/selected date indication',
            '5': 'Ensure correct touch target size for Picker controls',
          },
          AAA: {
            '1': 'Support voice input for dates and times',
            '2': 'Provide relative date options (today, tomorrow, next week)',
            '3': "Remember user's preferred date format",
            '4': 'Include contextual calendar information (holidays, events)',
          },
        },
      },
      errorValidation: {
        title: 'Error Validation',
        description:
          'Accessible error validation provides clear feedback and guidance for correcting input errors.',
        requirements: {
          A: {
            '1': 'Identify specific errors in text form',
            '2': 'Provide error messages in text (not just color)',
            '3': 'Associate error messages with form fields',
            '4': 'Offer suggestions for correction when possible',
          },
          AA: {
            '1': 'Implement real-time validation where appropriate',
            '2': 'Provide context-sensitive help for errors',
            '3': 'Ensure error messages are announced to screen readers',
            '4': 'Include suggestions for fixing validation errors',
          },
          AAA: {
            '1': 'Provide multiple formats for error information',
            '2': 'Support guided correction of errors',
            '3': 'Remember and auto-correct common user errors',
            '4': 'Include contextual examples of correct input',
          },
        },
      },
      focusManagement: {
        title: 'Focus Management',
        description: 'Proper focus management ensures logical navigation and prevents focus traps.',
        requirements: {
          A: {
            '1': 'Focus follows logical tab order',
            '2': 'Focus is visible and distinguishable',
          },
          AA: {
            '1': 'Focus provides sufficient color contrast',
            '2': 'Focus is programmatically determinable',
          },
          AAA: {
            '1': 'Focus supports custom navigation patterns',
            '2': 'Focus provides additional context for screen readers',
          },
        },
      },
      images: {
        title: 'Images',
        description:
          'Accessible images provide meaningful alternatives for users who cannot see visual content.',
        requirements: {
          A: {
            '1': 'Provide alt text for all non-decorative images',
            '2': 'Use null alt text for decorative images',
            '3': 'Ensure text alternatives convey purpose of image',
            '4': 'Include accessible names for actionable images',
          },
          AA: {
            '1': 'Provide extended descriptions for complex images',
            '2': 'Ensure sufficient contrast for informative image content',
            '3': 'Support image resizing without loss of function',
            '4': 'Include context in alt text for ambiguous images',
          },
          AAA: {
            '1': 'Provide multiple formats of complex information',
            '2': 'Support user preferences for image display',
            '3': 'Include audio descriptions for informative images',
            '4': 'Provide sign language alternatives for key visual content',
          },
        },
      },
      links: {
        title: 'Links',
        description:
          'Accessible links are clearly identifiable and provide meaningful information about their destination.',
        requirements: {
          A: {
            '1': 'Provide descriptive link text',
            '2': 'Ensure links are distinguishable from surrounding text',
            '3': 'Make entire link area clickable/tappable',
            '4': 'Avoid generic link text like "click here"',
          },
          AA: {
            '1': 'Indicate when links open in new windows/tabs',
            '2': 'Ensure consistent identification of links',
            '3': 'Provide visual focus indication for links',
            '4': 'Differentiate between visited and unvisited links',
          },
          AAA: {
            '1': 'Provide information about link destination before activation',
            '2': 'Support keyboard shortcut activation of common links',
            '3': 'Group related links for easier navigation',
            '4': 'Allow customization of link appearance',
          },
        },
      },
      lists: {
        title: 'Lists',
        description:
          'Accessible lists organize information in a structured way that is navigable by assistive technology.',
        requirements: {
          A: {
            '1': 'Use proper list markup (ordered/unordered)',
            '2': 'Maintain logical reading order of list items',
            '3': 'Identify list purpose with proper heading',
            '4': 'Ensure all interactive list items are focusable',
          },
          AA: {
            '1': 'Support keyboard navigation between list items',
            '2': 'Provide visual indication of current list item',
            '3': 'Include list information in screen reader announcements',
            '4': 'Support collapsible/expandable lists with proper ARIA',
          },
          AAA: {
            '1': 'Allow customization of list presentation',
            '2': 'Support multiple selection methods for list items',
            '3': 'Provide alternative views for complex lists',
            '4': 'Include drag-and-drop functionality with keyboard alternatives',
          },
        },
      },
      menu: {
        title: 'Menu',
        description: 'Accessible menus provide navigation options that are operable by all users.',
        requirements: {
          A: {
            '1': 'Ensure all menu items are keyboard accessible',
            '2': 'Provide descriptive labels for menu items',
            '3': 'Use appropriate roles for menus and items',
            '4': 'Support closing menus with ESC key',
          },
          AA: {
            '1': 'Implement arrow key navigation within menus',
            '2': 'Support submenu navigation with keyboard',
            '3': 'Provide visual focus indicators for menu items',
            '4': 'Announce menu state changes to screen readers',
          },
          AAA: {
            '1': 'Support keyboard shortcuts for common menu items',
            '2': 'Allow customization of menu organization',
            '3': 'Provide contextual help for menu functionality',
            '4': 'Support voice activation of menu items',
          },
        },
      },
      progressIndicators: {
        title: 'Progress Indicators',
        description:
          'Accessible progress indicators provide feedback on ongoing processes and operations.',
        requirements: {
          A: {
            '1': 'Provide text alternatives for visual indicators',
            '2': 'Use ARIA roles for progress elements',
            '3': 'Ensure progress can be determined programmatically',
            '4': 'Include start and end state descriptions',
          },
          AA: {
            '1': 'Announce progress updates to screen readers',
            '2': 'Provide estimated completion time when available',
            '3': 'Ensure sufficient color contrast for visual indicators',
            '4': 'Include numerical values alongside visual indicators',
          },
          AAA: {
            '1': 'Support customizable progress notifications',
            '2': 'Provide alternative formats for progress indication',
            '3': 'Allow control over progress update frequency',
            '4': 'Include contextual progress information',
          },
        },
      },
      radioButton: {
        title: 'Radio Buttons',
        description:
          'Accessible radio buttons allow users to select one option from a mutually exclusive group.',
        requirements: {
          A: {
            '1': 'Group related radio buttons programmatically',
            '2': 'Provide group label for radio button sets',
            '3': 'Support keyboard navigation within group',
            '4': 'Ensure each radio button has descriptive label',
          },
          AA: {
            '1': 'Implement proper focus management within groups',
            '2': 'Provide visual indication of selected state',
            '3': 'Announce selection changes to screen readers',
            '4': 'Support arrow key navigation between options',
          },
          AAA: {
            '1': 'Support alternative selection methods',
            '2': 'Provide contextual examples for radio options',
            '3': 'Allow customization of radio button presentation',
            '4': "Remember user's common selections",
          },
        },
      },
      segmentedControl: {
        title: 'Segmented Controls',
        description:
          'Accessible segmented controls allow users to switch between related options or views.',
        requirements: {
          A: {
            '1': 'Ensure each segment is keyboard focusable',
            '2': 'Provide descriptive labels for each segment',
            '3': 'Use appropriate role (tablist/radiogroup)',
            '4': 'Indicate selected state programmatically',
          },
          AA: {
            '1': 'Support arrow key navigation between segments',
            '2': 'Provide visual focus indicators for segments',
            '3': 'Announce selection changes to screen readers',
            '4': 'Ensure sufficient contrast for selected state',
          },
          AAA: {
            '1': 'Support alternative selection methods',
            '2': 'Allow customization of segment appearance',
            '3': 'Remember user selections between sessions',
            '4': 'Provide contextual help for segment options',
          },
        },
      },
      sliders: {
        title: 'Sliders',
        description:
          'Accessible sliders allow users to adjust values within a range using various input methods.',
        requirements: {
          A: {
            '1': 'Provide text alternatives for current slider value',
            '2': 'Support keyboard adjustment of values',
            '3': 'Include min/max value information',
            '4': 'Label slider purpose clearly',
          },
          AA: {
            '1': 'Support step-based navigation for precision',
            '2': 'Provide visual and programmatic indication of current value',
            '3': 'Announce value changes to screen readers',
            '4': 'Include value information in slider label',
          },
          AAA: {
            '1': 'Support alternative input methods for value adjustment',
            '2': 'Provide haptic feedback for value changes',
            '3': 'Allow customization of slider appearance and behavior',
            '4': 'Include contextual value information (e.g., "50% volume")',
          },
        },
      },
      switches: {
        title: 'Switches',
        description: 'Accessible switches allow users to toggle between two states.',
        requirements: {
          A: {
            '1': 'Switch is operable by keyboard',
            '2': 'Switch has a descriptive label',
          },
          AA: {
            '1': 'Switch state is programmatically determinable',
            '2': 'Switch provides visible focus indicator',
          },
          AAA: {
            '1': 'Switch supports custom states and ARIA attributes',
            '2': 'Switch provides additional context for screen readers',
          },
        },
      },
      textInputs: {
        title: 'Text Inputs',
        description:
          'Accessible text inputs provide clear labeling and support for various input methods.',
        requirements: {
          A: {
            '1': 'Associate labels with text fields',
            '2': 'Provide descriptive placeholder text',
            '3': 'Support keyboard interaction',
            '4': 'Indicate required fields',
          },
          AA: {
            '1': 'Provide error messages for invalid input',
            '2': 'Ensure error messages are announced to screen readers',
            '3': 'Support autocomplete when appropriate',
            '4': 'Maintain visible labels during input focus',
          },
          AAA: {
            '1': 'Provide contextual help for input fields',
            '2': 'Remember previously entered values when appropriate',
            '3': 'Support alternative input methods',
            '4': 'Include input format guidance inline',
          },
        },
      },
      tabs: {
        title: 'Tabs',
        description:
          'Accessible tabs organize content into logical sections that are navigable by all users.',
        requirements: {
          A: {
            '1': 'Use proper tab/tabpanel roles',
            '2': 'Associate tabs with their panels programmatically',
            '3': 'Ensure keyboard navigation between tabs',
            '4': 'Provide descriptive labels for each tab',
          },
          AA: {
            '1': 'Support arrow key navigation within tab list',
            '2': 'Indicate current tab visually and programmatically',
            '3': 'Announce tab changes to screen readers',
            '4': 'Ensure tabs are visible in the viewport when activated',
          },
          AAA: {
            '1': 'Remember active tab between sessions',
            '2': 'Support alternative tab selection methods',
            '3': 'Provide contextual help for tab functionality',
            '4': 'Allow customization of tab presentation',
          },
        },
      },
      deviceOrientation: {
        title: 'Device Orientation',
        description: 'Support for different device orientations with accessibility considerations.',
        requirements: {
          A: {
            '1': 'Content adapts to different orientations',
            '2': 'Orientation changes are announced to assistive technology',
          },
          AA: {
            '1': 'Orientation changes provide sufficient contrast',
            '2': 'Orientation changes maintain focus position',
          },
          AAA: {
            '1': 'Orientation changes support custom navigation patterns',
            '2': 'Orientation changes provide detailed context for screen readers',
          },
        },
      },
      groupingControls: {
        title: 'Grouping Controls',
        description:
          'Accessible grouping controls organize related interface elements for better navigation and understanding.',
        requirements: {
          A: {
            '1': 'Group related controls visually and programmatically',
            '2': 'Provide group labels for related controls',
            '3': 'Ensure logical tab order within groups',
            '4': 'Use consistent styling for control groups',
          },
          AA: {
            '1': 'Implement keyboard shortcuts for navigating between groups',
            '2': 'Provide group-level instructions where appropriate',
            '3': 'Allow collapsing/expanding of control groups',
            '4': 'Ensure proper ARIA role assignment for groups',
          },
          AAA: {
            '1': 'Support custom arrangement of control groups',
            '2': 'Provide contextual help for each control group',
            '3': 'Remember group state between sessions',
            '4': 'Support multiple selection methods within groups',
          },
        },
      },
      headingLevel: {
        title: 'Heading Level',
        description: 'Proper heading hierarchy for document structure and navigation.',
        requirements: {
          A: {
            '1': 'Headings follow logical hierarchy (h1, h2, h3, etc.)',
            '2': 'Headings have descriptive text',
          },
          AA: {
            '1': 'Headings provide sufficient color contrast',
            '2': 'Headings are programmatically determinable',
          },
          AAA: {
            '1': 'Headings support custom navigation patterns',
            '2': 'Headings provide detailed context for screen readers',
          },
        },
      },
      largeContentViewer: {
        title: 'Large Content Viewer',
        description: 'Accessible viewer for large content areas with proper navigation.',
        requirements: {
          A: {
            '1': 'Large content is navigable by keyboard',
            '2': 'Large content has descriptive labels',
          },
          AA: {
            '1': 'Large content provides sufficient color contrast',
            '2': 'Large content supports zoom and pan',
          },
          AAA: {
            '1': 'Large content supports custom navigation patterns',
            '2': 'Large content provides detailed context for screen readers',
          },
        },
      },
      pickers: {
        title: 'Pickers',
        description:
          'Accessible pickers allow users to select from options using various input methods.',
        requirements: {
          A: {
            '1': 'Ensure all picker options are keyboard accessible',
            '2': 'Provide clear labels for pickers and options',
            '3': 'Support native picker controls when available',
            '4': 'Announce selected option to screen readers',
          },
          AA: {
            '1': 'Group related options in logical categories',
            '2': 'Support search/filtering for long option lists',
            '3': 'Provide visual indication of current selection',
            '4': 'Include clear instructions for multi-select pickers',
          },
          AAA: {
            '1': 'Support alternative selection methods (e.g., voice)',
            '2': 'Allow customization of option presentation',
            '3': "Remember user's common selections",
            '4': 'Provide contextual help for complex pickers',
          },
        },
      },
      popovers: {
        title: 'Popovers',
        description: 'Accessible popover components with proper focus management.',
        requirements: {
          A: {
            '1': 'Popovers are operable by keyboard',
            '2': 'Popovers have descriptive labels',
          },
          AA: {
            '1': 'Popovers provide sufficient color contrast',
            '2': 'Popovers announce state changes to screen readers',
          },
          AAA: {
            '1': 'Popovers support custom states and ARIA attributes',
            '2': 'Popovers provide detailed context for screen readers',
          },
        },
      },
      sheets: {
        title: 'Sheets',
        description:
          'Accessible sheets provide modal content that is properly contained and navigable.',
        requirements: {
          A: {
            '1': 'Ensure sheet is keyboard accessible',
            '2': 'Provide clear title for the sheet',
            '3': 'Support closing sheet with ESC key',
            '4': 'Include proper role (dialog)',
          },
          AA: {
            '1': 'Trap focus within sheet when open',
            '2': 'Announce sheet opening/closing to screen readers',
            '3': 'Ensure sheet is positioned in the visual viewport',
            '4': 'Provide visible close button',
          },
          AAA: {
            '1': 'Support customizable entry/exit animations',
            '2': 'Remember sheet position/state between sessions',
            '3': 'Allow multiple interaction methods for dismissal',
            '4': 'Provide contextual help for sheet functionality',
          },
        },
        webview: {
          title: 'WebView',
          description: 'Accessible WebViews provide access to web content within the app context.',
          requirements: {
            A: {
              '1': 'Provide title describing WebView content',
              '2': 'Ensure keyboard focus can move in and out of WebView',
              '3': 'Provide loading state information',
              '4': 'Include fallback for failed content loading',
            },
            AA: {
              '1': 'Announce WebView loading states to screen readers',
              '2': 'Ensure content within WebView is accessible',
              '3': 'Provide mechanism to refresh WebView content',
              '4': 'Support content scaling for WebView',
            },
            AAA: {
              '1': 'Allow customization of WebView presentation',
              '2': 'Provide alternative formats for WebView content',
              '3': 'Support user preferences for WebView content',
              '4': 'Include contextual help for WebView functionality',
            },
          },
        },
        reduceMotion: {
          title: 'Reduce Motion',
          description:
            'Accessible motion controls allow users to customize animation and movement preferences.',
          requirements: {
            A: {
              '1': 'Respect system-level reduce motion settings',
              '2': 'Provide controls to disable non-essential animations',
              '3': 'Ensure all functionality works without animation',
              '4': 'Avoid auto-playing animations longer than 5 seconds',
            },
            AA: {
              '1': 'Implement reduced motion alternatives for essential animations',
              '2': 'Provide user preference settings for motion',
              '3': "Ensure animations don't flash more than 3 times per second",
              '4': 'Support pausing/stopping of all animations',
            },
            AAA: {
              '1': 'Allow fine-grained control over animation types',
              '2': 'Remember user motion preferences across sessions',
              '3': 'Provide alternative representations of animated content',
              '4': 'Support customization of animation speed and intensity',
            },
          },
        },
        timeLimits: {
          title: 'Time Limits',
          description:
            'Accessible time limits provide users with control over time-sensitive content and functionality.',
          requirements: {
            A: {
              '1': 'Allow users to extend time limits where present',
              '2': 'Provide warning before timeout occurs',
              '3': 'Support pausing or stopping time-limited content',
              '4': 'Ensure no functionality requires specific timing',
            },
            AA: {
              '1': 'Allow users to completely disable time limits',
              '2': 'Allow users to save progress before timeout',
              '3': 'Provide options to extend session multiple times',
              '4': "Ensure content refreshes don't disrupt user's place",
            },
            AAA: {
              '1': 'Allow users to set personal time preferences',
              '2': 'Provide customizable time extension options',
              '3': 'Auto-save user progress at regular intervals',
              '4': 'Support resuming from previous state after timeout',
            },
          },
        },
        gesturesAlternatives: {
          title: 'Gesture Alternatives',
          description:
            'Accessible gesture alternatives provide multiple input methods for users who cannot use touch gestures.',
          requirements: {
            A: {
              '1': 'Provide button alternatives for all gesture controls',
              '2': 'Ensure all functionality is operable via simple tap/click',
              '3': 'Include text labels for gesture actions',
              '4': 'Support keyboard alternatives for all gestures',
            },
            AA: {
              '1': 'Implement single-point activation for complex gestures',
              '2': 'Provide visual indicators for available gestures',
              '3': 'Support customizable gesture sensitivity',
              '4': 'Include haptic feedback for gesture recognition',
            },
            AAA: {
              '1': 'Allow users to customize or disable gestures',
              '2': 'Provide multiple alternative input methods',
              '3': 'Support voice command alternatives',
              '4': 'Include tutorials for learning available gestures',
            },
          },
        },
        draggable: {
          title: 'Draggable',
          description: 'Draggable elements with keyboard alternatives and proper feedback.',
          requirements: {
            A: {
              '1': 'Draggable elements have keyboard alternatives',
              '2': 'Draggable elements have descriptive labels',
            },
            AA: {
              '1': 'Draggable elements provide sufficient contrast',
              '2': 'Draggable elements announce state changes to screen readers',
            },
            AAA: {
              '1': 'Draggable elements support custom input methods',
              '2': 'Draggable elements provide detailed context for screen readers',
            },
          },
        },
        language: {
          title: 'Language',
          description:
            'Accessible language support ensures content is understandable for users with different language needs.',
          requirements: {
            A: {
              '1': 'Identify language changes within content',
              '2': 'Avoid using language-dependent content without alternatives',
              '3': 'Provide translations for critical instructions',
            },
            AA: {
              '1': 'Support automatic language detection for user input',
              '2': 'Provide mechanisms to change language settings',
              '3': 'Ensure consistency in terminology across languages',
              '4': 'Support language-appropriate formatting of numbers and dates',
            },
            AAA: {
              '1': "Provide content in the user's preferred language",
              '2': 'Support multiple language preferences in order of priority',
              '3': 'Include regional dialect variations when appropriate',
              '4': 'Provide sign language alternatives for key content',
            },
          },
        },
        comprehension: {
          title: 'Comprehension',
          description:
            'Support for users with comprehension difficulties and learning disabilities.',
          requirements: {
            A: {
              '1': 'Content uses clear, simple language',
              '2': 'Complex concepts have explanations',
            },
            AA: {
              '1': 'Content provides sufficient contrast',
              '2': 'Content supports multiple reading levels',
            },
            AAA: {
              '1': 'Content supports custom reading preferences',
              '2': 'Content provides detailed explanations for screen readers',
            },
          },
        },
      },
      webview: {
        title: 'WebView',
        description: 'Accessible WebViews provide access to web content within the app context.',
        requirements: {
          A: {
            '1': 'Provide title describing WebView content',
            '2': 'Ensure keyboard focus can move in and out of WebView',
            '3': 'Provide loading state information',
            '4': 'Include fallback for failed content loading',
          },
          AA: {
            '1': 'Announce WebView loading states to screen readers',
            '2': 'Ensure content within WebView is accessible',
            '3': 'Provide mechanism to refresh WebView content',
            '4': 'Support content scaling for WebView',
          },
          AAA: {
            '1': 'Allow customization of WebView presentation',
            '2': 'Provide alternative formats for WebView content',
            '3': 'Support user preferences for WebView content',
            '4': 'Include contextual help for WebView functionality',
          },
        },
      },
      reduceMotion: {
        title: 'Reduce Motion',
        description:
          'Accessible motion controls allow users to customize animation and movement preferences.',
        requirements: {
          A: {
            '1': 'Respect system-level reduce motion settings',
            '2': 'Provide controls to disable non-essential animations',
            '3': 'Ensure all functionality works without animation',
            '4': 'Avoid auto-playing animations longer than 5 seconds',
          },
          AA: {
            '1': 'Implement reduced motion alternatives for essential animations',
            '2': 'Provide user preference settings for motion',
            '3': "Ensure animations don't flash more than 3 times per second",
            '4': 'Support pausing/stopping of all animations',
          },
          AAA: {
            '1': 'Allow fine-grained control over animation types',
            '2': 'Remember user motion preferences across sessions',
            '3': 'Provide alternative representations of animated content',
            '4': 'Support customization of animation speed and intensity',
          },
        },
      },
      timeLimits: {
        title: 'Time Limits',
        description:
          'Accessible time limits provide users with control over time-sensitive content and functionality.',
        requirements: {
          A: {
            '1': 'Allow users to extend time limits where present',
            '2': 'Provide warning before timeout occurs',
            '3': 'Support pausing or stopping time-limited content',
            '4': 'Ensure no functionality requires specific timing',
          },
          AA: {
            '1': 'Allow users to completely disable time limits',
            '2': 'Allow users to save progress before timeout',
            '3': 'Provide options to extend session multiple times',
            '4': "Ensure content refreshes don't disrupt user's place",
          },
          AAA: {
            '1': 'Allow users to set personal time preferences',
            '2': 'Provide customizable time extension options',
            '3': 'Auto-save user progress at regular intervals',
            '4': 'Support resuming from previous state after timeout',
          },
        },
      },
      gesturesAlternatives: {
        title: 'Gesture Alternatives',
        description:
          'Accessible gesture alternatives provide multiple input methods for users who cannot use touch gestures.',
        requirements: {
          A: {
            '1': 'Provide button alternatives for all gesture controls',
            '2': 'Ensure all functionality is operable via simple tap/click',
            '3': 'Include text labels for gesture actions',
            '4': 'Support keyboard alternatives for all gestures',
          },
          AA: {
            '1': 'Implement single-point activation for complex gestures',
            '2': 'Provide visual indicators for available gestures',
            '3': 'Support customizable gesture sensitivity',
            '4': 'Include haptic feedback for gesture recognition',
          },
          AAA: {
            '1': 'Allow users to customize or disable gestures',
            '2': 'Provide multiple alternative input methods',
            '3': 'Support voice command alternatives',
            '4': 'Include tutorials for learning available gestures',
          },
        },
      },
      draggable: {
        title: 'Draggable',
        description: 'Draggable elements with keyboard alternatives and proper feedback.',
        requirements: {
          A: {
            '1': 'Draggable elements have keyboard alternatives',
            '2': 'Draggable elements have descriptive labels',
          },
          AA: {
            '1': 'Draggable elements provide sufficient contrast',
            '2': 'Draggable elements announce state changes to screen readers',
          },
          AAA: {
            '1': 'Draggable elements support custom input methods',
            '2': 'Draggable elements provide detailed context for screen readers',
          },
        },
      },
      language: {
        title: 'Language',
        description:
          'Accessible language support ensures content is understandable for users with different language needs.',
        requirements: {
          A: {
            '1': 'Identify language changes within content',
            '2': 'Avoid using language-dependent content without alternatives',
            '3': 'Provide translations for critical instructions',
          },
          AA: {
            '1': 'Support automatic language detection for user input',
            '2': 'Provide mechanisms to change language settings',
            '3': 'Ensure consistency in terminology across languages',
            '4': 'Support language-appropriate formatting of numbers and dates',
          },
          AAA: {
            '1': "Provide content in the user's preferred language",
            '2': 'Support multiple language preferences in order of priority',
            '3': 'Include regional dialect variations when appropriate',
            '4': 'Provide sign language alternatives for key content',
          },
        },
      },
      comprehension: {
        title: 'Comprehension',
        description: 'Support for users with comprehension difficulties and learning disabilities.',
        requirements: {
          A: {
            '1': 'Content uses clear, simple language',
            '2': 'Complex concepts have explanations',
          },
          AA: {
            '1': 'Content provides sufficient contrast',
            '2': 'Content supports multiple reading levels',
          },
          AAA: {
            '1': 'Content supports custom reading preferences',
            '2': 'Content provides detailed explanations for screen readers',
          },
        },
      },
    },

    errors: {
      networkError: 'Network connection error',
      unknownError: 'An unknown error occurred',
      validationError: 'Please check your input',
    },
  },
};
