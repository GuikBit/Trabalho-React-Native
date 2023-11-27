import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import img from '../../assets/img/odonto.png';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Logo = () => {
  return (
    <View style={styles.topo}>
      <Image source={img} style={styles.img}></Image>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  topo: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 40
  },
  fontLarge: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  fontSmall: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  img: {
    width: width,
    height: ((475 / 950) * width) ,
  },
});
