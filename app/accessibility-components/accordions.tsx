import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText, ThemedView } from '@/components';
import { Accordion } from '@/components/Accordion';
import { useLanguage } from '@/hooks/useLanguage';
import { AccessibilityLevel } from '@/types/accessibility.types';
import { observer } from 'mobx-react-lite';

interface AccordionsProps {
  level: AccessibilityLevel;
}
const Accordions = observer(({ level }: AccordionsProps) => {
  // Store expansion state for each level separately
  const [expansionState, setExpansionState] = useState<Record<AccessibilityLevel, boolean>>({
    A: false,
    AA: false,
    AAA: false,
    none: false
  });
  const { t } = useLanguage();

  const handleToggle = (expanded: boolean) => {
    setExpansionState(prev => ({
      ...prev,
      [level]: expanded
    }));
  };


  const content = (
    <ThemedText variant="bodyMedium">
      {t(`accessibility.components.accordions.exampleAccessibility.${level}`)}
    </ThemedText>
  );

  const Wrapper: React.ElementType = level === 'AAA' ? ThemedView : View;
  const wrapperProps =
    level === 'AAA'
      ? { preset: 'auto', safeAreaEdges: ['top'] }
      : { style: styles.container };

  return (
    <Wrapper {...wrapperProps}>
      <View style={styles.accordionContainer}>
        <Accordion
          title={t(`accessibility.components.accordions.titles.${level}`)}
          expanded={expansionState[level]}
          onToggle={handleToggle}
          accessibilityLevel={level}
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
  accordionContainer: {
    gap: 12,
  },
});

const WrappedAccordions = ({ level }: AccordionsProps) => {
  return (
    <Accordions level={level} />
  );
};

export default WrappedAccordions;
