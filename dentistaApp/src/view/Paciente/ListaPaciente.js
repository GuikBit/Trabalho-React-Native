import { StyleSheet, View } from 'react-native';
import React from 'react';
import globalStyle from '../../../globalStyle';
import listUser from '../../Mock/lista';
import Listagem from '../../components/Listagem/Listagem';

const ListaPaciente = ({ navigation }) => {
  return (
    <View style={globalStyle.container}>
      <Listagem navigation={navigation} titulo="Pacientes" lista={listUser} />
    </View>
  );
};

export default ListaPaciente;

const styles = StyleSheet.create({
});
