import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const StyledText = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Medium: Poppins_500Medium,
    Poppins_SemiBold: Poppins_600SemiBold,
    Poppins_Bold: Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      onLayout={onLayoutRootView}
      style={[{ fontFamily: 'Poppins_Medium' }, style]}
    >
      {children}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create({});
