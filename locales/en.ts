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
      title: 'Accessibility Components',
      subtitle: 'Explore all available accessibility components and features',
    },
    settings: {
      title: 'Settings',
      subtitle: 'Customize your accessibility preferences',
      fontSize: {
        title: 'Font Size',
        description: 'Adjust the size of the text displayed in the app',
        reset: 'Reset to Default'
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
    profile: {
      title: 'Profile',
      editProfile: 'Edit Profile',
      logout: 'Logout',
    },
    guidelines: {
      title: 'Accessibility Guidelines',
      subtitle: 'Key questions, principles, and resources for accessible development.',
      essentials: {
        title: 'Essentials for Developers',
        intro: 'Ask yourself these questions to ensure your app is accessible. Each point links to a key accessibility principle or WCAG guideline.',
        questions: {
          semanticMarkup: 'Semantic Markup: Do all elements have the correct semantic markup?',
          inputLabels: 'Input Labels: Are there descriptive labels marking each input element, and labels for input groups?',
          focus: 'Focus: Is there an indicator when interactive elements have keyboard focus, and does its order follow a logical sequence?',
          keyboard: 'Keyboard: Can all interactive elements be selected and activated using the keyboard?',
          names: 'Names: Do all interactive controls have an accessible descriptive name?',
          roles: 'Roles: Do all custom controls and widgets have the correct role (e.g., link, button, tab panel)?',
          dynamicUpdates: 'Dynamic Updates: Are all dynamic updates, including error messages, conveyed to assistive technology?',
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
        },
      },
      successCriteria: {
        description: 'This is where things get specific. Success criteria are the checkpoints that tell you how to make your site more inclusive. They’re divided into three levels:',
        levelA: 'A (bare essentials)',
        levelAA: 'AA (the legal requirement in most places)',
        levelAAA: 'AAA (reaching for the stars).',
      },
      principles: {
        perceivable: 'Perceivable: Information and user interface components must be presentable to users in ways they can perceive.',
        operable: 'Operable: User interface components and navigation must be operable.',
        understandable: 'Understandable: Information and the operation of user interface must be understandable.',
        robust: 'Robust: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.',
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
    feature: {
      wcagCompliance: {
        title: 'WCAG Compliance',
        description: 'Learn and implement WCAG 2.1 guidelines across all levels',
      },
      componentsSamples: {
        title: 'Components Samples',
        description: 'Interactive examples of accessible UI components',
      },
      userTesting: {
        title: 'User Testing',
        description: 'Tools and guidelines for accessibility user testing',
      },
      quickChecks: {
        title: 'Quick Checks',
        description: 'Rapid accessibility auditing and validation tools',
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
  },
  errors: {
    networkError: 'Network connection error',
    unknownError: 'An unknown error occurred',
    validationError: 'Please check your input',
  },
};