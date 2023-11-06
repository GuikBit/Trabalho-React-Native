import { StyleSheet, View } from 'react-native';
import React from 'react';
import globalStyle from '../../../globalStyle';
import listUser from '../../components/Listagem/Cards/lista';
import Listagem from '../../components/Listagem/Listagem';

const ListaDentista = ({ navigation }) => {
  return (
    <View style={globalStyle.container}>
      <Listagem navigation={navigation} titulo="Dentistas" lista={listUser} />
    </View>
  );
};

export default ListaDentista;

const styles = StyleSheet.create({});
