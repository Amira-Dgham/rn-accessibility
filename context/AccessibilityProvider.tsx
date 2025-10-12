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
  Platform,
  findNodeHandle
} from 'react-native';
import { useStore } from './StoreContext';

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


interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  // MobX store
  const store = useStore().preferencesStore;

  // Orientation state (not in MobX)
  const [orientation, setOrientation] = useState<OrientationType>("portrait");

  // Local state for system reduce motion
  const [systemReduceMotion, setSystemReduceMotion] = useState(false);

  // Visual preferences
  // prefersReducedMotion is true if either system or store is true
  const prefersReducedMotion = systemReduceMotion || store.isReduceMotion;
  const boldTextEnabled = false; // Not in MobX, keep local
  const highContrastEnabled = store.isHighContrast;
  const largeTextEnabled = store.fontSize > 1;
  const fontScale = store.fontSize;

  // Audio preferences (from MobX)
  const soundCueEnabled = false; // Not in MobX, keep local

  // Screen reader state (from MobX)
  const screenReaderIsEnabled = store.isScreenReaderEnabled;
  const setScreenReaderIsEnabled: Dispatch<SetStateAction<boolean>> = (value) => {
    if (typeof value === 'function') {
      // value is a function: (prevState: boolean) => boolean
      store.setScreenReader(value(store.isScreenReaderEnabled));
    } else {
      // value is a boolean
      store.setScreenReader(value);
    }
  };

  // Listen for system reduce motion changes and sync with MobX store
  useEffect(() => {
    let isMounted = true;
    // Initial fetch
    AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        console.log('System reduce motion enabled:', enabled);
        if (isMounted) {
          setSystemReduceMotion(enabled);
          if (store.isReduceMotion !== enabled) {
            store.setReduceMotion(enabled);
          }
        }
      });
    // Listener
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', (enabled) => {
      setSystemReduceMotion(enabled);
      if (store.isReduceMotion !== enabled) {
        store.setReduceMotion(enabled);
      }
    });
    return () => {
      isMounted = false;
      // @ts-ignore
      if (sub && typeof sub.remove === 'function') sub.remove();
    };
  }, [store]);

  // Initialize accessibility states
  // Remove local state for values now in MobX

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

  // Remove local listeners for values now in MobX

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
    type: string | undefined = 'impactLight'
  ) => {
    // If you're using react-native-haptic-feedback
    ReactNativeHapticFeedback.trigger(type as any, {
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

    // MobX store actions for preferences
    setHighContrast: store.setHighContrast,
    setFontSize: store.setFontSize,
    setReduceMotion: store.setReduceMotion,
    setHaptics: store.setHaptics,
    setSimpleNavigation: store.setSimpleNavigation,
    setTextToSpeech: store.setTextToSpeech,
    setDarkMode: store.setDarkMode,
    // ...add more as needed
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
