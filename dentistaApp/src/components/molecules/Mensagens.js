import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StyledText from '../atoms/StyledText';

const Mensagens = ({ children }) => {
  return (
    <View>
      <StyledText>{children}</StyledText>
    </View>
  );
};

export default Mensagens;

const styles = StyleSheet.create({});
