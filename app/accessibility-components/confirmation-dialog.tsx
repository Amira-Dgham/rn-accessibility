import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const confirmationDialog: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>confirmation-diolog</Text>
    </View>
  );
};

export default confirmationDialog;

const styles = StyleSheet.create({});
