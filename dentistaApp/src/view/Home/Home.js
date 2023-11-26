import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from './Utils/Header';
import Body from './Utils/Body';
import globalStyle from '../../../globalStyle';
import Footer from './Utils/footer';
import Dashboard from '../Dashboard/Dashboard';
import { AuthContext } from '../../Auth/Auth';

const Home = ({ navigation, route }) => {

  const { userLogged, logout } = useContext(AuthContext);

  const handleLogout = () =>{
    if( logout() ){
      navigation.replace("Login", {novo: false})
    }    
  }
  return (
    <View style={styles.container}>
      <Header userLogged={userLogged} handleLogout={handleLogout}/>
      
      <Body navigation={navigation} /> 
      
      <Footer navigation={navigation} />
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
