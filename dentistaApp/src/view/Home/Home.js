import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from './Utils/Header';
import Body from './Utils/Body';
import globalStyle from '../../../globalStyle';
import Footer from './Utils/footer';
import Dashboard from '../Dashboard/Dashboard';

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Header />
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
