import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FocusManagement: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>FocusManagement</Text>
    </View>
  );
};

export default FocusManagement;

const styles = StyleSheet.create({});
