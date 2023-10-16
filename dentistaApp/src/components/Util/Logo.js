import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import img from '../../../assets/img/odonto.png';
import { Colors, Dimension } from '../../global/GlobalStyles';

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
    width: Dimension.width,
    height: (475 / 950) * Dimension.width,
  },
});
