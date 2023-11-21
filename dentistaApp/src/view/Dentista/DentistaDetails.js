import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import NovoDentista from './NovoDentista';
import globalStyle from '../../../globalStyle';
import { useNavigation } from '@react-navigation/core';

const DentistaDetails = ({ route }) => {
  const navigation = useNavigation();
  // useEffect(()=>{
  //   navigation.navigate("Novo Dentista")
  // })
  return (
    <View style={globalStyle.container}>
      <Text>DentistaDetails</Text>
    </View>
  );
};

export default DentistaDetails;

const styles = StyleSheet.create({});
