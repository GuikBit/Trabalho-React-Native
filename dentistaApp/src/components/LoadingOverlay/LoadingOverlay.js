import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Colors } from '../../global/GlobalStyles';

const LoadingOverlay = () => {
  return <ActivityIndicator animating={true} color={Colors.primary} />;
};

export default LoadingOverlay;

const styles = StyleSheet.create({});
