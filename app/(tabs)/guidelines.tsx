import { Accordion, ThemedText, ThemedView } from '@/components';
import {
  ESSENTIALS_QUESTIONS,
  PRINCIPLES,
  RESOURCES,
  SUCCESS_CRITERIA_LEVELS,
} from '@/constants/guidelines';
import { Linking, StyleSheet, View } from 'react-native';

import Header from '@/components/Header';
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function GuidelinesScreen() {
  const { t } = useLanguage();

  return (
    <ThemedView preset="scroll" safeAreaEdges={['top']}>
      <Header title={t('screens.guidelines.title')} subtitle={t('screens.guidelines.subtitle')} />
      <View style={styles.section}>
        <Accordion title={t('screens.guidelines.sections.successCriteria')}>
          <ThemedText variant="body" style={styles.item}>
            {t('screens.guidelines.successCriteria.description')}
          </ThemedText>
          {SUCCESS_CRITERIA_LEVELS.map((item, idx) => (
            <ThemedText key={idx} variant="body" style={styles.item}>
              - {t(item)}
            </ThemedText>
          ))}
        </Accordion>
        <Accordion title={t('screens.guidelines.sections.principles')}>
          {PRINCIPLES.map((item, idx) => (
            <ThemedText key={idx} variant="body" style={styles.item}>
              - {t(item)}
            </ThemedText>
          ))}
        </Accordion>
        <Accordion title={t('screens.guidelines.essentials.title')}>
          {ESSENTIALS_QUESTIONS.map((q, idx) => (
            <ThemedText key={idx} variant="body" style={styles.item}>
              {idx + 1}. {t(q)}
            </ThemedText>
          ))}
        </Accordion>
        <Accordion title={t('screens.guidelines.sections.resources')}>
          {RESOURCES.map((res) => (
            <ThemedText
              key={res.url}
              variant="body"
              style={styles.link}
              onPress={() => Linking.openURL(res.url)}
            >
              {t(res.label)}
            </ThemedText>
          ))}
        </Accordion>
      </View>
    </ThemedView>
  );
}

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
