import { useTheme } from '@/hooks/useTheme';
import { useScrollToTop } from '@react-navigation/native';
import { StatusBar, StatusBarProps, StatusBarStyle } from 'expo-status-bar';
import { ReactNode, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  LayoutChangeEvent,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { Edge, useSafeAreaInsets } from 'react-native-safe-area-context';

export const DEFAULT_BOTTOM_OFFSET = 50;

// Safe area edges type
export type ExtendedEdge = Edge | 'start' | 'end';

interface BaseScreenProps {
  /**
   * Children components.
   */
  children?: ReactNode;
  /**
   * Style for the outer content container useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style for the inner content container useful for padding & margin.
   */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Override the default edges for the safe area.
   */
  safeAreaEdges?: ExtendedEdge[];
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Status bar setting. Defaults to auto based on theme.
   */
  statusBarStyle?: StatusBarStyle;
  /**
   * By how much should we offset the keyboard? Defaults to 0.
   */
  keyboardOffset?: number;
  /**
   * By how much we scroll up when the keyboard is shown. Defaults to 50.
   */
  keyboardBottomOffset?: number;
  /**
   * Pass any additional props directly to the StatusBar component.
   */
  StatusBarProps?: StatusBarProps;
  /**
   * Pass any additional props directly to the KeyboardAvoidingView component.
   */
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
}

interface FixedScreenProps extends BaseScreenProps {
  preset?: 'fixed';
}

interface ScrollScreenProps extends BaseScreenProps {
  preset?: 'scroll';
  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  /**
   * Pass any additional props directly to the ScrollView component.
   */
  ScrollViewProps?: ScrollViewProps;
}

interface AutoScreenProps extends Omit<ScrollScreenProps, 'preset'> {
  preset?: 'auto';
  /**
   * Threshold to trigger the automatic disabling/enabling of scroll ability.
   * Defaults to `{ percent: 0.92 }`.
   */
  scrollEnabledToggleThreshold?: { percent?: number; point?: number };
}

export type ScreenProps = ScrollScreenProps | FixedScreenProps | AutoScreenProps;

const isIos = Platform.OS === 'ios';

type ScreenPreset = 'fixed' | 'scroll' | 'auto';

/**
 * Custom hook to handle safe area insets with extended edge support
 */
function useSafeAreaInsetsStyle(safeAreaEdges?: ExtendedEdge[]): ViewStyle {
  const insets = useSafeAreaInsets();

  if (!safeAreaEdges) {
    return {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    };
  }

  const insetsStyle: ViewStyle = {};

  safeAreaEdges.forEach((edge) => {
    switch (edge) {
      case 'top':
        insetsStyle.paddingTop = insets.top;
        break;
      case 'bottom':
        insetsStyle.paddingBottom = insets.bottom;
        break;
      case 'left':
      case 'start':
        insetsStyle.paddingLeft = insets.left;
        break;
      case 'right':
      case 'end':
        insetsStyle.paddingRight = insets.right;
        break;
    }
  });

  return insetsStyle;
}

/**
 * @param {ScreenPreset?} preset - The preset to check.
 * @returns {boolean} - Whether the preset is non-scrolling.
 */
function isNonScrolling(preset?: ScreenPreset) {
  return !preset || preset === 'fixed';
}

/**
 * Custom hook that handles the automatic enabling/disabling of scroll ability based on the content size and screen size.
 */
function useAutoPreset(props: AutoScreenProps): {
  scrollEnabled: boolean;
  onContentSizeChange: (w: number, h: number) => void;
  onLayout: (e: LayoutChangeEvent) => void;
} {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {};

  const scrollViewHeight = useRef<null | number>(null);
  const scrollViewContentHeight = useRef<null | number>(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  function updateScrollState() {
    if (scrollViewHeight.current === null || scrollViewContentHeight.current === null) return;

    // check whether content fits the screen then toggle scroll state according to it
    const contentFitsScreen = (function () {
      if (point) {
        return scrollViewContentHeight.current < scrollViewHeight.current - point;
      } else {
        return scrollViewContentHeight.current < scrollViewHeight.current * percent;
      }
    })();

    // content is less than the size of the screen, so we can disable scrolling
    if (scrollEnabled && contentFitsScreen) setScrollEnabled(false);

    // content is greater than the size of the screen, so let's enable scrolling
    if (!scrollEnabled && !contentFitsScreen) setScrollEnabled(true);
  }

  function onContentSizeChange(w: number, h: number) {
    scrollViewContentHeight.current = h;
    updateScrollState();
  }

  function onLayout(e: LayoutChangeEvent) {
    const { height } = e.nativeEvent.layout;
    scrollViewHeight.current = height;
    updateScrollState();
  }

  // update scroll state on every render
  if (preset === 'auto') updateScrollState();

  return {
    scrollEnabled: preset === 'auto' ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  };
}

/**
 * Screen component without scrolling capability
 */
function ScreenWithoutScrolling(props: ScreenProps) {
  const { style, contentContainerStyle, children, preset } = props;
  return (
    <View style={[$outerStyle, style]}>
      <View style={[$innerStyle, preset === 'fixed' && $justifyFlexEnd, contentContainerStyle]}>
        {children}
      </View>
    </View>
  );
}

/**
 * Screen component with scrolling capability
 */
function ScreenWithScrolling(props: ScreenProps) {
  const {
    children,
    keyboardShouldPersistTaps = 'handled',
    keyboardBottomOffset = DEFAULT_BOTTOM_OFFSET,
    contentContainerStyle,
    ScrollViewProps,
    style,
  } = props as ScrollScreenProps;

  const ref = useRef<ScrollView>(null);

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(props as AutoScreenProps);

  // Add native behavior of pressing the active tab to scroll to the top of the content
  useScrollToTop(ref);

  return (
    <KeyboardAwareScrollView
      bottomOffset={keyboardBottomOffset}
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...ScrollViewProps}
      onLayout={(e) => {
        onLayout(e);
        ScrollViewProps?.onLayout?.(e);
      }}
      onContentSizeChange={(w: number, h: number) => {
        onContentSizeChange(w, h);
        ScrollViewProps?.onContentSizeChange?.(w, h);
      }}
      style={[$outerStyle, ScrollViewProps?.style, style]}
      contentContainerStyle={[
        $innerStyle,
        ScrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}

/**
 * Represents a screen component that provides a consistent layout and behavior for different screen presets.
 * The `Screen` component can be used with different presets such as "fixed", "scroll", or "auto".
 * It handles safe area insets, status bar settings, keyboard avoiding behavior, and scrollability based on the preset.
 * Integrates with your app's theme system for consistent styling.
 */
export function ThemedView(props: ScreenProps) {
  const { theme, colorScheme, colors } = useTheme();
  const {
    backgroundColor,
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeAreaEdges,
    StatusBarProps,
    statusBarStyle,
  } = props;

  const $containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  return (
    <View
      style={[
        $containerStyle,
        { backgroundColor: backgroundColor || colors.background },
        $containerInsets,
      ]}
    >
      <StatusBar
        style={statusBarStyle || (colorScheme === 'dark' ? 'light' : 'dark')}
        {...StatusBarProps}
      />

      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}
        style={[$flex1, KeyboardAvoidingViewProps?.style]}
      >
        {isNonScrolling(props.preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

// Styles
const $containerStyle: ViewStyle = {
  flex: 1,
  height: '100%',
  width: '100%',
};

const $outerStyle: ViewStyle = {
  flex: 1,
  height: '100%',
  width: '100%',
};

const $justifyFlexEnd: ViewStyle = {
  justifyContent: 'flex-end',
};

const $innerStyle: ViewStyle = {
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

const $flex1: ViewStyle = {
  flex: 1,
};
