import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { ThemedText, ThemedView } from '@/components';
import { Accordion } from '@/components/Accordion';
import { StoreProvider, useLanguageStore } from '@/context/StoreContext';
import { AccessibilityLevel } from '@/types/accessibility.types';
import { observer } from 'mobx-react-lite';

interface AccordionsProps {
  level: AccessibilityLevel;
}
//TODO : FIX THE t USElANGUAGE AND REMOVE UNECESSARY LOADING AND NONE ACCESSIBBILITY 
// EXAMPLE ,,ETC..
const Accordions = observer(({ level }: AccordionsProps) => {
  const [expanded, setExpanded] = useState(false);
  const languageStore = useLanguageStore();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeStore = async () => {
      if (!languageStore.isInitialized) {
        await languageStore.initialize();
      }
      setIsReady(true);
    };
    initializeStore();
  }, [languageStore]);

  if (!isReady) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const t = languageStore.translate;

  const handleToggle = (expanded: boolean) => setExpanded(expanded);

  let title = '';
  let description = '';
  let exampleKey: 'A' | 'AA' | 'AAA' = 'A';
  let accessibilityLevel: AccessibilityLevel = 'A';

  if (level === 'A') {
    title = 'Basic Accordion (Level A)';
    description = t('screens.components.accordions.exampleAccessibility.A');
    exampleKey = 'A';
    accessibilityLevel = 'A';
  } else if (level === 'AA') {
    title = 'Enhanced Accordion (Level AA)';
    description = t('screens.components.accordions.exampleAccessibility.AA');
    exampleKey = 'AA';
    accessibilityLevel = 'AA';
  } else {
    title = 'Full Accessibility Accordion (Level AAA)';
    description = t('screens.components.accordions.exampleAccessibility.AAA');
    exampleKey = 'AAA';
    accessibilityLevel = 'AAA';
  }

  const content = (
    <ThemedText variant="bodyMedium">
      {t('screens.components.accordions.themedText')}
    </ThemedText>
  );

  const Wrapper: React.ElementType = level === 'AAA' ? ThemedView : View;
  const wrapperProps =
    level === 'AAA'
      ? { preset: 'auto', safeAreaEdges: ['top'] }
      : { style: styles.container };

  return (
    <Wrapper {...wrapperProps}>
      <ThemedText style={styles.title} > {title}</ThemedText >
      <ThemedText style={styles.description}>{description}</ThemedText>
      <View style={styles.accordionContainer}>
        <Accordion
          title={description}
          expanded={expanded}
          onToggle={handleToggle}
          accessibilityLevel={accessibilityLevel}
          testID={`accordion-${level}`}
        >
          {content}
        </Accordion>
      </View>
    </Wrapper>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 24,
    opacity: 0.8,
    lineHeight: 20,
  },
  accordionContainer: {
    gap: 12,
  },
});

// Wrap the component with StoreProvider to ensure store context is available
const WrappedAccordions = ({ level }: AccordionsProps) => {
  return (
    <StoreProvider>
      <Accordions level={level} />
    </StoreProvider>
  );
};

export default WrappedAccordions;
