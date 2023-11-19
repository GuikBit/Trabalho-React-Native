import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import globalStyle from '../../../globalStyle';
import { useNavigation } from '@react-navigation/core';
import Icon from '@expo/vector-icons/FontAwesome';

const HeaderGeral = ({ titulo, route }) => {
  const navigation = useNavigation();



  return (
    <View style={styles.nav}>
      <View>
        <Icon
            name="chevron-left"
            size={30}
            color="#ECECEC"
            style={{ padding: 8 }}
            onPress={() => navigation.navigate('Home')}
        />
      </View>
     <View style={styles.titulo}>
        <Text style={[globalStyle.titulo]}>
          {titulo}
        </Text>
     </View>
        

    </View>
  );
};

export default HeaderGeral;

const styles = StyleSheet.create({
  nav:{
    flexDirection: 'row'
  }, titulo: {
    width: "80%",
    alignItems: 'center'
  }
});
