import * as ScreenOrientation from "expo-screen-orientation";

import React, {
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  AccessibilityInfo,
  NativeEventSubscription,
  Platform,
  findNodeHandle,
} from 'react-native';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

interface AnnounceOptions {
  message: string;
  queue?: boolean;
  delay?: number;
}

interface SetFocusOptions {
  ref: RefObject<any>;
  delay?: number;
}

type OrientationType = "portrait" | "landscape";


export interface AccessibilityContent {

  // Screen reader
  screenReaderIsEnabled: boolean;
  setScreenReaderIsEnabled: Dispatch<SetStateAction<boolean>>;

  // Screen Orientation 
  orientation: OrientationType;

  // Visual preferences
  prefersReducedMotion: boolean;
  boldTextEnabled: boolean;
  highContrastEnabled: boolean;
  largeTextEnabled: boolean;
  fontScale: number;

  // Audio preferences
  soundCueEnabled: boolean;

  // Focus management
  setFocus: (options: SetFocusOptions) => void;
  setFocusOnFirst: (containerRef: RefObject<any>) => void;

  // Announcements
  announce: (options: AnnounceOptions) => void;

  // Timing utils
  getRecommendedTimeoutMs: (defaultMs: number) => Promise<number>;

  // Semantic grouping
  createAccessibilityGroupRef: (groupName: string) => any;

  // Haptic feedback
  triggerHaptic: (type?: string) => void;

  // Accessibility checking
  isElementAccessible: (ref: RefObject<any>) => Promise<boolean>;
}

const defaultContext: AccessibilityContent = {
  screenReaderIsEnabled: false,
  setScreenReaderIsEnabled: () => { },
  orientation: 'portrait',
  prefersReducedMotion: false,
  boldTextEnabled: false,
  highContrastEnabled: false,
  largeTextEnabled: false,
  fontScale: 1,
  soundCueEnabled: false,
  setFocus: () => { },
  setFocusOnFirst: () => { },
  announce: () => { },
  getRecommendedTimeoutMs: async () => 500,
  createAccessibilityGroupRef: () => ({ current: null }),
  triggerHaptic: () => { },
  isElementAccessible: async () => false,
};

export const AccessibilityContext = createContext<AccessibilityContent>(defaultContext);

export const useAccessibilityContext = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  // Screen reader state
  const [screenReaderIsEnabled, setScreenReaderIsEnabled] = useState(false);

  // Orientation state
  const [orientation, setOrientation] = useState<OrientationType>("portrait");

  // Visual preferences
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [boldTextEnabled, setBoldTextEnabled] = useState(false);
  const [highContrastEnabled, setHighContrastEnabled] = useState(false);
  const [largeTextEnabled, setLargeTextEnabled] = useState(false);
  const [fontScale, setFontScale] = useState(1);

  // Audio preferences
  const [soundCueEnabled, setSoundCueEnabled] = useState(false);

  // Initialize accessibility states
  useEffect(() => {
    const initializeAccessibilityStates = async () => {
      // Initialize screen reader status
      const isScreenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
      setScreenReaderIsEnabled(isScreenReaderEnabled);

      // Initialize reduced motion preference
      try {
        const isReduceMotionEnabled = await AccessibilityInfo.isReduceMotionEnabled();
        setPrefersReducedMotion(isReduceMotionEnabled);
      } catch (error) {
        console.warn('Error checking reduced motion:', error);
      }

      // Initialize bold text preference (iOS)
      if (Platform.OS === 'ios') {
        try {
          const isBoldTextEnabled = await AccessibilityInfo.isBoldTextEnabled();
          setBoldTextEnabled(isBoldTextEnabled);
        } catch (error) {
          console.warn('Error checking bold text:', error);
        }
      }

      // Initialize high contrast preference (Android)
      if (Platform.OS === 'android') {
        // High contrast preference is not supported on Android by AccessibilityInfo
        setHighContrastEnabled(false);
      }

      // Initialize font scale preference
      try {
        if (Platform.OS === 'ios') {
          // @ts-ignore - might not be available in all typings
          const contentSizeMultiplier = await AccessibilityInfo.getAccessibilityContentSizeMultiplier();
          console.log('fontScale:', contentSizeMultiplier);

          if (contentSizeMultiplier !== undefined) {
            setFontScale(contentSizeMultiplier);
            setLargeTextEnabled(contentSizeMultiplier > 1);
          }
        }
      } catch (error) {
        console.warn('Error checking font scale:', error);
      }

      // Initialize sound cue status (iOS)
      if (Platform.OS === 'ios') {
        try {
          // @ts-ignore - might not be available in all typings
          const isSoundPlaybackEnabled = await AccessibilityInfo.isSoundPlaybackEnabled?.();
          if (isSoundPlaybackEnabled !== undefined) {
            setSoundCueEnabled(isSoundPlaybackEnabled);
          }
        } catch (error) {
          console.warn('Error checking sound playback:', error);
        }
      }
    };

    initializeAccessibilityStates();
  }, []);




  useEffect(() => {
    const updateOrientation = async () => {
      const expoOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(
        expoOrientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
          expoOrientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
          ? "portrait"
          : "landscape"
      );
    };

    // Initial orientation check
    updateOrientation();

    // Listen for orientation changes
    const subscription = ScreenOrientation.addOrientationChangeListener(({ orientationInfo }) => {
      setOrientation(
        orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
          orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
          ? "portrait"
          : "landscape"
      );
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // Set up accessibility change listeners
  useEffect(() => {
    const listeners: NativeEventSubscription[] = [];

    // Screen reader listener
    const screenReaderListener = AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      (isEnabled) => {
        setScreenReaderIsEnabled(isEnabled);
      },
    );
    listeners.push(screenReaderListener);

    // Reduced motion listener
    const reducedMotionListener = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      (isEnabled) => {
        setPrefersReducedMotion(isEnabled);
      },
    );
    listeners.push(reducedMotionListener);

    // Bold text listener (iOS)
    if (Platform.OS === 'ios') {
      const boldTextListener = AccessibilityInfo.addEventListener(
        'boldTextChanged',
        (isEnabled) => {
          setBoldTextEnabled(isEnabled);
        },
      );
      listeners.push(boldTextListener);
    }

    // High contrast listener (Android)
    if (Platform.OS === 'android') {
      // High contrast preference is not supported on Android by AccessibilityInfo
      setHighContrastEnabled(false);
    }

    // Clean up listeners on unmount
    return () => {
      listeners.forEach(listener => listener.remove());
    };
  }, []);

  // Focus management
  const setFocus = useCallback(({ ref, delay }: SetFocusOptions) => {
    const reactTag = findNodeHandle(ref.current);
    if (reactTag) {
      if (delay) {
        setTimeout(() => {
          AccessibilityInfo.setAccessibilityFocus(reactTag);
        }, delay);
      } else {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, []);

  // Set focus on first focusable element in a container
  const setFocusOnFirst = useCallback((containerRef: RefObject<any>) => {
    const reactTag = findNodeHandle(containerRef.current);
    if (reactTag && Platform.OS === 'ios') {
      // @ts-ignore - might not be available in all typings
      AccessibilityInfo.setAccessibilityFocus?.(reactTag);
    }
  }, []);

  // Announcements
  const announce = useCallback(({ message, queue = false, delay }: AnnounceOptions) => {
    console.log('Accessibility announcement:', message);

    const announceMessage = () => {
      if (Platform.OS === 'ios' && queue) {
        // @ts-ignore - might not be available in all typings
        AccessibilityInfo.announceForAccessibilityWithOptions?.(message, {
          queue,
        });
      } else {
        AccessibilityInfo.announceForAccessibility(message);
      }
    };

    if (delay) {
      setTimeout(announceMessage, delay);
    } else {
      announceMessage();
    }
  }, []);

  // Get recommended timeout for screen reader users
  const getRecommendedTimeoutMs = useCallback(async (defaultMs: number = 500) => {
    if (Platform.OS === 'ios') {
      try {
        // @ts-ignore - might not be available in all typings
        const timeout = await AccessibilityInfo.getRecommendedTimeoutMillis?.(defaultMs);
        return timeout || defaultMs;
      } catch (error) {
        console.warn('Error getting recommended timeout:', error);
        return defaultMs;
      }
    }
    return defaultMs;
  }, []);

  // Create accessibility group reference
  const createAccessibilityGroupRef = useCallback((groupName: string) => {
    return {
      current: {
        groupName,
        accessibilityLabel: groupName,
        accessible: true,
        accessibilityRole: 'none',
        accessibilityHint: `${groupName} group`,
      },
    };
  }, []);

  // Haptic feedback
  const triggerHaptic = useCallback((
    type: Parameters<typeof ReactNativeHapticFeedback.trigger>[0] = 'impactLight'
  ) => {
    // If you're using react-native-haptic-feedback
    ReactNativeHapticFeedback.trigger(type, {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });

    // If you're not using the library, you can implement a placeholder:
    console.log('Haptic feedback triggered:', type);
  }, []);

  // Check if an element is accessible
  const isElementAccessible = useCallback(async (ref: RefObject<any>) => {
    const reactTag = findNodeHandle(ref.current);
    if (reactTag) {
      try {
        if (Platform.OS === 'ios') {
          // @ts-ignore - might not be available in all typings
          const isAccessible = await AccessibilityInfo.isAccessibilityElement?.(reactTag);
          return isAccessible || false;
        }
      } catch (error) {
        console.warn('Error checking accessibility:', error);
      }
    }
    return false;
  }, []);

  // Provide all accessibility values and functions
  const value = {
    // Screen reader
    screenReaderIsEnabled,
    setScreenReaderIsEnabled,

    // Orientation
    orientation,
    // Visual preferences
    prefersReducedMotion,
    boldTextEnabled,
    highContrastEnabled,
    largeTextEnabled,
    fontScale,

    // Audio preferences
    soundCueEnabled,

    // Focus management
    setFocus,
    setFocusOnFirst,

    // Announcements
    announce,

    // Timing utils
    getRecommendedTimeoutMs,

    // Semantic grouping
    createAccessibilityGroupRef,

    // Haptic feedback
    triggerHaptic,

    // Accessibility checking
    isElementAccessible,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};