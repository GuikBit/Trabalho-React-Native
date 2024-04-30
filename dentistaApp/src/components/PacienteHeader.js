import { StyleSheet, Text, View, Linking } from 'react-native';
import React, { useContext } from 'react';
import globalStyle from '../../globalStyle';
import { Dimension } from '../global/GlobalStyles';
import { TextInput, Avatar  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useGetPacienteByIdAuth } from '../service/queries/paciente';
import { AuthContext } from '../Auth/Auth';

const UserHeader = ({ navigation, paciente }) => {
  const { userLogged } = useContext(AuthContext);

  formataData = () =>{
    const date = new Date(paciente.dataNascimento);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;    

    return formattedDate;
  }

  openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=${paciente.telefone}`);
  }
  return (
    <View>
      <LinearGradient  
        colors={["#2070b4", "#1e7bbd", "#1c85c7", "#1c90cf", "#1e9bd8", "#309ed9", "#3ea1d9", "#49a4da", "#599fd3", "#669bcc", "#6f96c4", "#7692bc"]}
        style={styles.container}
        start={ {x: 0.3, y: 0.1} } 
        >
          <Text style={styles.voltar}>
            <TextInput.Icon
              icon="chevron-left"
              size={45}
              color="#FFFFFF"
              onPress={() => {
                if(userLogged.role === "Paciente"){
                  navigation.navigate('Home');
                  
                }else{
                  navigation.navigate('Lista Pacientes');
                }
                
              }}
            />
          </Text>
        </LinearGradient>
        <LinearGradient  
        colors={paciente. ativo?["#2070b4", "#1e7bbd", "#1c85c7", "#1c90cf", "#1e9bd8", "#309ed9", "#3ea1d9", "#49a4da", "#599fd3", "#669bcc", "#6f96c4", "#7692bc"]:["#EF4444", "#EF4444"]}
        style={styles.headerGrad}
        start={ {x: 0.3, y: 0.1} } 
        > 
          {/* "#1c90cf", "#1e9bd8", "#309ed9", "#3ea1d9", "#49a4da" */}
          <View style={styles.header}>
            {/* <View style={[styles.avatar, {borderColor: paciente.ativo? '#2070b4' : '#EF4444'}]}>
              <Avatar.Image size={80} source={require('../../assets/avatar2.jpg')} />
            </View> */}
            {/* <LinearGradient  
              colors={paciente. ativo?["#1c90cf", "#1e9bd8", "#309ed9", "#3ea1d9", "#49a4da" ]:["#EF4444", "#EF4444"]}
              style={styles.avatar}
              start={ {x: 0.3, y: 0.1} } 
              > 
             <Avatar.Image size={80} source={require('../../assets/avatar2.jpg')} />
             </LinearGradient> */}
            <Text style={styles.nome}> { paciente.nome } </Text>    
            <View
              style={[globalStyle.rowAround, { marginVertical: 15, marginTop: 10 }]}
            >
              <Text style={styles.texto}>
                <Icon name="paste" size={16} cor="#2070B4" /> 1548{' '}
              </Text>
              <Text style={styles.texto}>
                <Icon name="calendar" size={16} cor="#2070B4" /> { formataData() }
              </Text>
            </View>
            <View style={[globalStyle.rowAround]}>
              <Text style={styles.texto}>
                <Icon name="address-card-o" size={16} cor="#2070B4" /> { paciente.cpf }
              </Text>
              <Text style={styles.texto} onPress={this.openWhatsApp}>
                <Icon name="phone" size={16} cor="#2070B4" /> { paciente.telefone }
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
  avatar: {
    position: 'absolute',
    top: -56,
    left: Dimension.width / 2 - 50,
    zIndex: 1,
    borderWidth: 3, 
    borderRadius: 50, 
    width: 86, 
    height:86,
    backgroundColor: 'transparent'
  },
  voltar: {
    margin: 15,
    zIndex: 2
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
