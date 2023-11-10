import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import globalStyle from '../../../../globalStyle';
import { AuthContext } from '../../../Auth/Auth';
import ButtonIcon from './ButtonIcon';

const Body = ({ navigation }) => {
  const { userLogged } = useContext(AuthContext);

  return (
    <ScrollView style={globalStyle.container}>
      <View style={styles.submenu}>
        {userLogged.role == 'Admin' && (
          <>
            <ScrollView horizontal={true} style={styles.row}>
              <ButtonIcon
                icone="account-group"
                tam={35}
                cor="#24AAE3"
                texto="Pacientes"
                acao={() => {
                  navigation.navigate('Lista Pacientes');
                }}
              />
              <ButtonIcon
                icone="medical-bag"
                tam={35}
                cor="#24AAE3"
                texto="Consultas"
                acao={() => {
                  navigation.navigate('Lista Consultas');
                }}
              />
              <ButtonIcon
                icone="account-multiple"
                tam={35}
                cor="#24AAE3"
                texto="Dentistas"
                acao={() => {
                  navigation.navigate('Lista Dentista');
                }}
              />
              <ButtonIcon
                icone="monitor-dashboard"
                tam={35}
                cor="#24AAE3"
                texto="DashBoard"
                acao={() => {
                  navigation.navigate('Dashboard');
                }}
              />
              <ButtonIcon
                icone="monitor-dashboard"
                tam={35}
                cor="#24AAE3"
                texto="Cadastrar Dentista"
                acao={() => {
                  navigation.navigate('Cadastro Dentista');
                }}
              />
            </ScrollView>
          </>
        )}

        {userLogged.role == 'Dentista' && (
          <>
            <View style={styles.row}>
              <ButtonIcon
                icone="account-group"
                tam={35}
                cor="#24AAE3"
                texto="Pacientes"
                acao={() => {
                  navigation.navigate('Lista Pacientes');
                }}
              />
              <ButtonIcon
                icone="medical-bag"
                tam={35}
                cor="#24AAE3"
                texto="Minhas Consultas"
                acao={() => {
                  navigation.navigate('Novo Paciente');
                }}
              />
              <ButtonIcon
                icone="monitor-dashboard"
                tam={35}
                cor="#24AAE3"
                texto="Meu DashBoard"
                acao={() => {
                  navigation.navigate('Dashboard');
                }}
              />
            </View>
          </>
        )}

        {userLogged.role == 'Paciente' && (
          <>
            <View style={styles.row}>
              <ButtonIcon
                icone="medical-bag"
                tam={35}
                cor="#24AAE3"
                texto="Agendar Consulta"
                acao={() => {
                  navigation.navigate('Nova Consulta');
                }}
              />
              <ButtonIcon
                icone="clipboard-text-clock"
                tam={35}
                cor="#24AAE3"
                texto="Histórico Consultas"
                acao={() => {
                  navigation.navigate('Lista Consultas');
                }}
              />
              <ButtonIcon
                icone="account-details"
                tam={35}
                cor="#24AAE3"
                texto="Informações Pessoais"
                acao={() => {
                  navigation.navigate('Perfil');
                }}
              />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Body;

const styles = StyleSheet.create({
  submenu: {},
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    margin: 10,
  },
  container: {
    top: -90,
    backgroundColor: '#f2f8fd',
  },
});
