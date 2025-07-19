import { useHeaderTitle } from '@/hooks/useHeaderTitle';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ErrorValidation: FC = () => {
  useHeaderTitle();

  return (
    <View>
      <Text>error-validation</Text>
    </View>
  );
};

export default ErrorValidation;

const styles = StyleSheet.create({});
