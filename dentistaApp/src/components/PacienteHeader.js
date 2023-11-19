import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyle from '../../globalStyle';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const UserHeader = ({ navigation }) => {
  return (
    <View>
      <LinearGradient  
        colors={["#2e86c9", "#24aae3"]}
        style={styles.container}
        start={ {x: 0.3, y: 0.1} } 
        >
          <Text style={styles.voltar}>
            <TextInput.Icon
              icon="chevron-left"
              size={35}
              color="#FFFFFF"
              onPress={() => {
                navigation.navigate('Lista Pacientes');
              }}
            />
          </Text>
        </LinearGradient>
        <LinearGradient  
        colors={["#2e86c9", "#24aae3"]}
        style={styles.headerGrad}
        start={ {x: 0.3, y: 0.1} } 
        >
          <View style={styles.header}>
            <Text style={styles.nome}>Guilherme Oliveira</Text>    
            <View
              style={[globalStyle.rowAround, { marginVertical: 15, marginTop: 10 }]}
            >
              <Text style={styles.texto}>
                <Icon name="paste" size={16} cor="#2070B4" /> 1548{' '}
              </Text>
              <Text style={styles.texto}>
                <Icon name="calendar" size={16} cor="#2070B4" /> 18/11/1998
              </Text>
            </View>
            <View style={[globalStyle.rowAround]}>
              <Text style={styles.texto}>
                <Icon name="address-card-o" size={16} cor="#2070B4" /> 12098133600
              </Text>
              <Text style={styles.texto}>
                <Icon name="phone" size={16} cor="#2070B4" /> (32)998220082
              </Text>
            </View>
          </View>
        </LinearGradient>
      
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2070B4',
    height: 130,
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 150,
    margin: 1,
    paddingTop: 30,
    top: -30,
  },
  headerGrad: {    
    borderRadius: 10,
    elevation: 10,
    height: 152,
    margin: 10,
    paddingTop: 30,
    top: -82,
  },
  voltar: {
    margin: 15,
  },
  nome: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2070B4',
    top: -10,
  },
  texto: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#2070B4',
  },
});
