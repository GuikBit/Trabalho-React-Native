import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Listagem from '../../components/Listagem/Listagem';
import globalStyle from '../../../globalStyle';
import lista from '../../Mock/lista';

const ListaConsulta = ({ navigation }) => {
  return (
    <View style={globalStyle.container}>
      <Listagem navigation={navigation} titulo="Consultas" lista={lista} />
    </View>
  );
};

export default ListaConsulta;

const styles = StyleSheet.create({});
