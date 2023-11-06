import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './Utils/Header';
import Body from './Utils/Body';

const Home = ({ navigation, route }) => {
  return (
    <View>
      <Header />
      <Body navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
