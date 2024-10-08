import React, { useContext, useEffect  } from 'react';
import img from '../../../../assets/img/odontoWhite.png';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import globalStyle from '../../../../globalStyle';
import { AuthContext } from '../../../Auth/Auth';
import { Button, TextInput, IconButton} from 'react-native-paper';
import { useNavigation, useFocusEffect  } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../global/GlobalStyles';
import { useGetPacienteByIdAuth } from '../../../service/queries/paciente';

const width = Dimensions.get('screen').width;

const Header = ({userLogged, handleLogout}) => { 

  // const { data, isLoading } = useGetPacienteByIdAuth(userLogged.id)
  // console.log(data)
  return (
    <LinearGradient        
        // colors={["#2e86c9", "#24aae3"]}
        colors={["#2070b4", "#1e7bbd", "#1c85c7", "#1c90cf", "#1e9bd8", "#309ed9", "#3ea1d9", "#49a4da", "#599fd3", "#669bcc", "#6f96c4", "#7692bc"]}
        style={styles.header}
        start={ {x: 0.3, y: 0.1} } 
        >
        
        <View style={styles.top}>
        <IconButton
          icon="logout"
          iconColor="#FFFFFF"
          size={27}
          onPress={handleLogout}
          
        />
        <IconButton
          icon="cog-outline"
          iconColor="#FFFFFF"
          size={27}
                    
        />
        </View>
        {/* {!isLoading &&
        ( */}
          <View style={styles.menu}>
          <Text style={styles.nome}>{userLogged.nome}</Text>
          
        </View>
        {/* )
        } */}
       
        
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
    paddingBottom: 4
  },
});
