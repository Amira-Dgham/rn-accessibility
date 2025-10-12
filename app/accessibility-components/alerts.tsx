import { ThemedText, ThemedView } from '@/components';
import Alert from '@/components/Alert';
import { useLanguage } from '@/hooks/useLanguage';
import { AccessibilityLevel } from '@/types/accessibility.types';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface AlertsProps {
  level: AccessibilityLevel;
}

const Alerts = observer(({ level }: AlertsProps) => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  // Title and message dynamically fetched or translated
  const title = t(`accessibility.components.alerts.titles.${level}`);
  const message = t(`accessibility.components.alerts.messages.${level}`);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  const Wrapper: React.ElementType = level === 'AAA' ? ThemedView : View;
  const wrapperProps =
    level === 'AAA'
      ? { preset: 'auto', safeAreaEdges: ['top'] }
      : { style: styles.container };

  return (
    <Wrapper {...wrapperProps}>
      <ThemedText variant="body">
        {t(`accessibility.components.alerts.labels.${level}`)}
      </ThemedText>

      <Alert
        visible={visible}
        title={title}
        message={message}
        onClose={handleClose}
        level={level}
        buttons={[
          {
            text: t('common.ok'),
            onPress: handleClose,
          },
        ]}
      />

      <View style={styles.buttonContainer}>
        <ThemedText
          variant="bodyMedium"
          onPress={handleOpen}
          style={styles.triggerText}
        >
          {t(`accessibility.components.alerts.trigger.${level}`)}
        </ThemedText>
      </View>
    </Wrapper>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  triggerText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

const WrappedAlerts = ({ level }: AlertsProps) => <Alerts level={level} />;

export default WrappedAlerts;