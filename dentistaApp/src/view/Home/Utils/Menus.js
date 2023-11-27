import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { TextInput } from 'react-native-paper';
import AcaoPrincipal from './AcaoPrincipal';
import Acao from './Acao';
import { AuthContext } from '../../../Auth/Auth';

const Menus = ({ navigation }) => {

  const { userLogged } = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      {userLogged.role == "Admin" && (
        <>
        <Acao
          icone="home"
          tam={26}
          cor="#FFFFFF"
          texto="Admin"
          acao={() => {
            navigation.navigate('Admin');
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
        </>
      )}
      {userLogged.role == "Dentista" && (
        <>
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
        </>
      )}
      
      

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
