import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyle from '../../../globalStyle'
import HeaderGeral from '../../components/Listagem/HeaderGeral'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import ButtonIcon from '../Home/Utils/ButtonIcon'
import { Colors } from '../../global/GlobalStyles'
import ModalNovaEspec from '../../components/Modal/ModalNovaEspec'
import { useState } from 'react'


const Admin = () => {

  const navigation = useNavigation();

  const [modalNovaEspec, setModalEspec] = useState();

  const hideEspec = () => setModalEspec(false);

  const styleModal = {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    height: 300,
    justifyContent: '',
  };
  return (
    <View style={globalStyle.container}>
        <LinearGradient
        colors={['#2e86c9', '#24aae3']}
        style={globalStyle.headerPesq}
        start={{ x: 0.3, y: 0.1 }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="chevron-left"
            size={30}
            color="#ECECEC"
            style={{ padding: 8 }}
            onPress={() => {
                navigation.navigate('Home');
            }}
          />
          <View style={styles.titulo}>
            <Text style={[globalStyle.titulo, {alignSelf: 'center'}]}>Area Adminstrativa</Text>
          </View>
        </View>
      </LinearGradient>

        <View style={styles.container}>
            <Text style={styles.subTitulo}>Paciente</Text>
            <View style={styles.row}>
           
              <ButtonIcon
                icone="medical-bag"
                tam={40}
                cor="#24AAE3"
                texto="Novo Paciente"
                acao={() => {
                    navigation.navigate('Cadastro', { interno: true });
                }}
              />
              <ButtonIcon
                icone="clipboard-text-clock"
                tam={40}
                cor="#24AAE3"
                texto="Todos Pacientes"
                acao={() => {
                  navigation.navigate('Lista Pacientes');
                }}
              />
              
            </View>
            <Text style={styles.subTitulo}>Dentista</Text>
            <View style={styles.row}>
           
              <ButtonIcon
                icone="medical-bag"
                tam={40}
                cor="#24AAE3"
                texto="Cadastrar Especialidade"
                acao={()=>{setModalEspec(true)}}
                
              />
              <ButtonIcon
                icone="clipboard-text-clock"
                tam={40}
                cor="#24AAE3"
                texto="Novo Dentista"
                acao={() => {
                  navigation.navigate('Novo Dentista');
                }}
              />
              <ButtonIcon
                icone="account-details"
                tam={40}
                cor="#24AAE3"
                texto="Todos Dentistas"
                acao={() => {
                  navigation.navigate('Lista Dentista');
                }}
              />
            </View>
            <Text style={styles.subTitulo}>Consulta</Text>
            <View style={styles.row}>
           
              <ButtonIcon
                icone="medical-bag"
                tam={40}
                cor="#24AAE3"
                texto="Agendar Consulta"
                acao={() => {
                  navigation.navigate('Nova Consulta');
                }}
              />
              <ButtonIcon
                icone="clipboard-text-clock"
                tam={40}
                cor="#24AAE3"
                texto="Histórico Consultas"
                acao={() => {
                  navigation.navigate('Lista Consultas');
                }}
              />
             
            </View>
        </View>    


        <ModalNovaEspec 
        modalEspec={modalNovaEspec}
        styleModalEspec={styleModal}
        hideEspec={hideEspec}
        />        

    </View>
  )
}

export default Admin

const styles = StyleSheet.create({
  titulo: {
    width: "80%",
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  container: {
    marginTop: 70
  }, 
  subTitulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primary,
    alignSelf: 'center',
    marginTop: 20
  }
})