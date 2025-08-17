import { Accordion, ThemedText, ThemedView } from '@/components';
import {
  ESSENTIALS_QUESTIONS,
  PRINCIPLES,
  RESOURCES,
  SUCCESS_CRITERIA_LEVELS,
} from '@/constants/guidelines';
import React, { FC, useCallback } from 'react';
import { Linking, StyleSheet, View } from 'react-native';

import Header from '@/components/Header';
import { useLanguage } from '@/hooks/useLanguage';

export type GuidelinesScreenProps = {};

/**
 * GuidelinesScreen
 *
 * Displays accessibility guidelines including:
 * - Success criteria levels
 * - Principles
 * - Essential questions
 * - Resources (with external links)
 */
const GuidelinesScreen: FC<GuidelinesScreenProps> = () => {
  const { t } = useLanguage();

  // Optional: memoize link handler if needed
  const handleLinkPress = useCallback((url: string) => {
    Linking.openURL(url);
  }, []);

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      {/* Header with title and subtitle */}
      <Header title={t('screens.guidelines.title')} subtitle={t('screens.guidelines.subtitle')} />

      <View style={styles.section}>
        {/* Success Criteria Section */}
        <Accordion title={t('screens.guidelines.sections.successCriteria')}>
          <ThemedText variant="body" style={styles.item}>
            {t('screens.guidelines.successCriteria.description')}
          </ThemedText>
          {SUCCESS_CRITERIA_LEVELS.map((level) => (
            <ThemedText key={level} variant="body" style={styles.item}>
              - {t(level)}
            </ThemedText>
          ))}
        </Accordion>

        {/* Principles Section */}
        <Accordion title={t('screens.guidelines.sections.principles')}>
          {PRINCIPLES.map((principle) => (
            <ThemedText key={principle} variant="body" style={styles.item}>
              - {t(principle)}
            </ThemedText>
          ))}
        </Accordion>

        {/* Essential Questions Section */}
        <Accordion title={t('screens.guidelines.essentials.title')}>
          {ESSENTIALS_QUESTIONS.map((question, index) => (
            <ThemedText key={question} variant="body" style={styles.item}>
              {index + 1}. {t(question)}
            </ThemedText>
          ))}
        </Accordion>

        {/* Resources Section */}
        <Accordion title={t('screens.guidelines.sections.resources')}>
          {RESOURCES.map((res) => (
            <ThemedText
              key={res.url}
              variant="body"
              style={styles.link}
              onPress={() => handleLinkPress(res.url)}
            >
              {t(res.label)}
            </ThemedText>
          ))}
        </Accordion>
      </View>
    </ThemedView>
  );
};

export default GuidelinesScreen;

// -------------------
// Styles
// -------------------
const styles = StyleSheet.create({
  section: {
    padding: 24,
  },
  item: {
    marginBottom: 8,
  },
  link: {
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
});
