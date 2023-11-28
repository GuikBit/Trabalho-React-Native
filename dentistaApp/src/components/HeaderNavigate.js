import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyle from '../../globalStyle';
import { TextInput } from 'react-native-paper';

const HeaderNavigate = ({ titulo, onPress }) => {
  return (
    <View>
      <View style={{ margin: 10 }}>
        <TextInput.Icon
          icon="chevron-left"
          size={55}
          color="#FFFFFF"
          onPress={onPress}
        />
        <Text style={[globalStyle.titulo, { alignSelf: 'center' }]}>
          {titulo}
        </Text>
      </View>
    </View>
  );
};

export default HeaderNavigate;

const styles = StyleSheet.create({});
