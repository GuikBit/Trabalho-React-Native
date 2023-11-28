import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from './Utils/Header';
import Body from './Utils/Body';
import globalStyle from '../../../globalStyle';
import Footer from './Utils/footer';
import Dashboard from '../Dashboard/Dashboard';
import { AuthContext } from '../../Auth/Auth';
import { useCallback } from 'react';
import { useFocusEffect  } from '@react-navigation/native';
import { useGetPacienteByIdAuth } from '../../service/queries/paciente';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

const Home = ({ navigation, route }) => {

  const { userLogged, logout } = useContext(AuthContext);
 
  const handleLogout = () =>{
    if( logout() ){
      navigation.replace("Login", {novo: false})
    }    
  }

  console.log(userLogged)

  return (
    <View style={styles.container}>
      
  
        <Header userLogged={userLogged} handleLogout={handleLogout}/>
      
        <Body navigation={navigation} /> 
        {userLogged.role !== "Paciente" &&(
          <Footer navigation={navigation} />
        )}
        

      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#FFFFFF",
    flex: 1
  }
});
