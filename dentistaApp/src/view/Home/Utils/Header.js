import React, { useContext } from 'react';
import img from '../../../../assets/img/odontoWhite.png';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import globalStyle from '../../../../globalStyle';
import { AuthContext } from '../../../Auth/Auth';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../global/GlobalStyles';

const width = Dimensions.get('screen').width;

const Header = () => {
  const { userLogged } = useContext(AuthContext);

  const navigation = useNavigation();

  const handleLogout = () =>{

  }

  return (
    <LinearGradient        
        colors={["#2e86c9", "#24aae3"]}
        style={styles.header}
        start={ {x: 0.3, y: 0.1} } 
        >
        
        <View style={styles.top}>
          
          <Icon
            name="chevron-left"
            size={30}
            color="#ECECEC"
            style={{ padding: 8 }}
            onPress={() => navigation.navigate('Login')}
          />

          <Icon
            name="cog"
            size={30}
            color="#ECECEC"
            style={styles.conf}
            onPress={() => {}}
          />
        </View>

        <View style={styles.menu}>
          <Text style={styles.nome}>{userLogged.nome}</Text>
          <Button
              icon="login"
              textColor={Colors.secondary}
              mode="contained"
              onPress={handleLogout}
              style={styles.buttons}
              labelStyle={{ fontSize: 20 }}
            >
              Sair
            </Button>
        </View>
        
      </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 200,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    
  },
  menu: {
    backgroundColor: '#FFFFFF',
    height: 110,
    bottom: -20,
    marginHorizontal: 15,
    borderRadius: 8,
    elevation: 5,
  },
  top: {
    width: 'auto',
    paddingTop: 3,
    height: ((475 / 950) * width) / 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conf: {
    margin: 8,
  },
  nome: {
    color: '#2070B4',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10,
  },
  buttons: {
    backgroundColor: "#FFFFFF",
    
    width: 100,
    height: 30,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.secondary,
  },
});
