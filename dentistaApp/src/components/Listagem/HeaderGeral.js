import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import globalStyle from '../../../globalStyle';
import { useNavigation } from '@react-navigation/core';

const HeaderGeral = ({ titulo }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TextInput.Icon
        icon="chevron-left"
        size={35}
        color="#2070B4"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text style={[globalStyle.titulo, { alignSelf: 'center' }]}>
        {titulo}
      </Text>
    </View>
  );
};

export default HeaderGeral;

const styles = StyleSheet.create({});
