import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native';
import globalStyle from '../../../../globalStyle';
import { AuthContext } from '../../../Auth/Auth';
import ButtonIcon from './ButtonIcon';
import Dashboard from '../../Dashboard/Dashboard';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import { Dimension } from '../../../global/GlobalStyles';
import DashboardDentista from '../../Dashboard/DashboardDentista';
import { useGetPacienteByIdAuth } from '../../../service/queries/paciente';
import LoadingOverlay from '../../../components/LoadingOverlay/LoadingOverlay';


const Body = ({ navigation }) => {
  const { userLogged } = useContext(AuthContext);
  const { data, isLoading } = useGetPacienteByIdAuth(userLogged.id)


  return (
    <ScrollView style={{marginBottom: 65}}>
      <View style={styles.submenu}>
        {userLogged.role == 'Admin' && (
          
          <Dashboard/>          
          
        )}
        {userLogged.role == "Dentista" && (

          <DashboardDentista id={userLogged.id} />

        )}

        {isLoading? <LoadingOverlay/>
        : 
        userLogged.role == 'Paciente'  &&  (
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
                icone="account-details"
                tam={40}
                cor="#24AAE3"
                texto="Informações Pessoais"
                acao={() => {
                  navigation.navigate('Paciente Details', {item: data});
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
    alignSelf: 'center',
    marginTop: 100
  },
  container: {
    top: -90,
    backgroundColor: '#f2f8fd',
  },
});
