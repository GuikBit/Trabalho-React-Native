import { StyleSheet, View } from 'react-native';
import React from 'react';
import globalStyle from '../../../globalStyle';
import Listagem from '../../components/Listagem/Listagem';
import lista from '../../Mock/lista';

const ListaDentista = ({ navigation }) => {
  return (
    <View style={globalStyle.container}>
      <Listagem navigation={navigation} titulo="Dentistas" lista={lista} />
    </View>
  );
};

export default ListaDentista;

const styles = StyleSheet.create({});
