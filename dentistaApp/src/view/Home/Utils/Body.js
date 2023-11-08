import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Acao from './Acao';
import { ScrollView } from 'react-native';
import globalStyle from '../../../../globalStyle';

const Body = ({ navigation }) => {
  return (
    <ScrollView style={globalStyle.container}>
      <View style={styles.submenu}>
        <Text> Visao de ADM</Text>
        <View style={styles.row}>
          <Acao
            icone="account-group"
            tam={35}
            cor="#24AAE3"
            texto="Pacientes"
            acao={() => {
              navigation.navigate('Lista Pacientes');
            }}
          />
          <Acao
            icone="medical-bag"
            tam={35}
            cor="#24AAE3"
            texto="Consultas"
            acao={() => {
              navigation.navigate('Lista Consultas');
            }}
          />
          <Acao
            icone="account-multiple"
            tam={35}
            cor="#24AAE3"
            texto="Dentistas"
            acao={() => {
              navigation.navigate('Lista Dentista');
            }}
          />
          <Acao
            icone="monitor-dashboard"
            tam={35}
            cor="#24AAE3"
            texto="DashBoard"
            acao={() => {
              navigation.navigate('Dashboard');
            }}
          />
        </View>

        <Text> Visao do Dentista</Text>
        <View style={styles.row}>
          <Acao
            icone="account-group"
            tam={35}
            cor="#24AAE3"
            texto="Pacientes"
            acao={() => {
              navigation.navigate('Lista Pacientes');
            }}
          />
          <Acao
            icone="medical-bag"
            tam={35}
            cor="#24AAE3"
            texto="Minhas Consultas"
            acao={() => {
              navigation.navigate('Novo Paciente');
            }}
          />
          <Acao
            icone="monitor-dashboard"
            tam={35}
            cor="#24AAE3"
            texto="Meu DashBoard"
            acao={() => {
              navigation.navigate('Dashboard');
            }}
          />
        </View>

        <Text> Visao do usuário logado</Text>
        <View style={styles.row}>
          <Acao
            icone="medical-bag"
            tam={35}
            cor="#24AAE3"
            texto="Agendar Consulta"
            acao={() => {
              navigation.navigate('Nova Consulta');
            }}
          />
          <Acao
            icone="clipboard-text-clock"
            tam={35}
            cor="#24AAE3"
            texto="Histórico Consultas"
            acao={() => {
              navigation.navigate('Lista Consultas');
            }}
          />
          <Acao
            icone="account-details"
            tam={35}
            cor="#24AAE3"
            texto="Informações Pessoais"
            acao={() => {
              navigation.navigate('Novo Paciente');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Body;

const styles = StyleSheet.create({
  submenu: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  container: {
    top: -90,
    backgroundColor: '#f2f8fd',
  },
});
