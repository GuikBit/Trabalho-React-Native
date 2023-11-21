import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import AcaoPrincipal from './AcaoPrincipal';
import Acao from './Acao';
const Menus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Acao
        icone="home"
        tam={26}
        cor="#FFFFFF"
        texto="Admin"
        acao={() => {
          navigation.navigate('Home');
        }}
      />
      <Acao
        icone="account-multiple"
        tam={26}
        cor="#FFFFFF"
        texto="Dentistas"
        acao={() => {
          navigation.navigate('Lista Dentista');
        }}
      />
      <AcaoPrincipal
        titulo="Consulta"
        acao={() => {
          navigation.navigate('Nova Consulta');
        }}
      />
      {/* <Acao icone="plus-circle-outline" tam={26} cor="#FFFFFF" texto="Consulta" acao={()=>{ navigation.navigate('Nova Consulta') }}/> */}
      <Acao
        icone="account-group"
        tam={26}
        cor="#FFFFFF"
        texto="Pacientes"
        acao={() => {
          navigation.navigate('Lista Pacientes');
        }}
      />
      <Acao
        icone="medical-bag"
        tam={26}
        cor="#FFFFFF"
        texto="Consultas"
        acao={() => {
          navigation.navigate('Lista Consultas');
        }}
      />

      {/* icone, tam, cor, texto, acao */}
    </View>
  );
};

export default Menus;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
