import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native';
import globalStyle from '../../../../globalStyle';
import { AuthContext } from '../../../Auth/Auth';
import ButtonIcon from './ButtonIcon';
import Dashboard from '../../Dashboard/Dashboard';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import { Dimension } from '../../../global/GlobalStyles';


const Body = ({ navigation }) => {
  const { userLogged } = useContext(AuthContext);

  return (
    <ScrollView style={{marginBottom: 65}}>
      <View style={styles.submenu}>
        {userLogged.role == 'Admin' && (
          <>
          {/* <View style={styles.row}>
            <ButtonIcon
                icone="account-group"
                tam={40}
                cor="#24AAE3"
                texto="Todos Pacientes"
                acao={() => {
                  navigation.navigate('Lista Pacientes');
                }}
              />
              <ButtonIcon
                icone="medical-bag"
                tam={40}
                cor="#24AAE3"
                texto="Listar Consultas"
                acao={() => {
                  navigation.navigate('Lista Consultas');
                }}
              />
              <ButtonIcon
                icone="account-multiple"
                tam={40}
                cor="#24AAE3"
                texto="Todos Dentistas"
                acao={() => {
                  navigation.navigate('Lista Dentista');
                }}
              />
              
          </View>
          <View style={styles.row}>
            <ButtonIcon
                icone="monitor-dashboard"
                tam={40}
                cor="#24AAE3"
                texto="DashBoard"
                acao={() => {
                  navigation.navigate('Dashboard');
                }}
              />
              <ButtonIcon
                icone="monitor-dashboard"
                tam={40}
                cor="#24AAE3"
                texto="Cadastrar Dentista"
                acao={() => {
                  navigation.navigate('Cadastro Dentista');
                }}
              />
              <ButtonIcon
                icone="monitor-dashboard"
                tam={40}
                cor="#24AAE3"
                texto="Cadastrar Admin"
                acao={() => {
                  navigation.navigate('Cadastro Dentista');
                }}
              />
          </View> */}
          <Dashboard user="admin" id={null}/>
          </>
          
          
        )}
        {userLogged.role == "Dentista" && (
          <Dashboard user="dentista" id={userLogged.id} />
        )}

        {userLogged.role == 'Paciente' && (
          <>
            <View style={styles.row}>
              <ButtonIcon
                icone="medical-bag"
                tam={40}
                cor="#24AAE3"
                texto="Agendar Consulta"
                acao={() => {
                  navigation.navigate('Nova Consulta');
                }}
              />
              <ButtonIcon
                icone="clipboard-text-clock"
                tam={40}
                cor="#24AAE3"
                texto="Histórico Consultas"
                acao={() => {
                  navigation.navigate('Lista Consultas');
                }}
              />
              <ButtonIcon
                icone="account-details"
                tam={40}
                cor="#24AAE3"
                texto="Informações Pessoais"
                acao={() => {
                  navigation.navigate('Paciente Details');
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
  submenu:{
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    margin: 10,
  },
  container: {
    top: -90,
    backgroundColor: '#f2f8fd',
  },
});
