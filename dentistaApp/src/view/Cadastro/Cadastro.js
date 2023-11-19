import React, { useContext, useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Text } from 'react-native';
import globalStyle from '../../../globalStyle';
import Stepper from 'react-native-stepper-ui';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import CadastroPaciente from './Utils/CadastroPaciente';
import CadastroResponsavel from './Utils/CadastroResponsavel';
import CadastroEndereco from './Utils/CadastroEndereco';
import CadastroAnamnese from './Utils/CadastroAnamnese';
import { GlobalContext } from '../../store/Context';
import Icon from '@expo/vector-icons/FontAwesome';
import { usePostPaciente } from '../../service/queries/paciente';
import { LinearGradient } from 'expo-linear-gradient';

const Cadastro = ({ route }) => {
  const [active, setActive] = useState(0);

  const navigation = useNavigation();

  const { mutate } = usePostPaciente();

  const { paciente, setPaciente, limpaPaciente } = useContext(GlobalContext);

  const handlePostPaciente = () => {
    mutate(paciente);
    limpaPaciente();
    verificaRetorno();
  };

  function verificaRetorno (){
    if(route.params.interno == true){
      navigation.navigate('Lista Pacientes')
    }
    else{
      navigation.navigate('Login')
    }
    
    
  }

  const content = [
    <CadastroPaciente subTitulo="Informações Pessoais" />,
    <CadastroResponsavel subTitulo="Responsável" />,
    <CadastroEndereco subTitulo="Endereço" />,
    <CadastroAnamnese subTitulo="Anamnese" />,
  ];

  return (
    <ScrollView style={globalStyle.container}>
      <LinearGradient      
        colors={["#2e86c9", "#24aae3"]}
        style={globalStyle.headerPesq}
        start={ {x: 0.3, y: 0.1} } 
        >
          
        <View style={{ flexDirection: 'row'}}>
          <Icon
              name="chevron-left"
              size={30}
              color="#ECECEC"
              style={{ padding: 8 }}
              onPress={verificaRetorno}
          />
          <View style={styles.titulo}>
            <Text style={[globalStyle.titulo]}>
              Novo Paciente
            </Text>
          </View>
        </View>
      </LinearGradient>
      
      <View style={{ margin: 20 }}>
        <Stepper
          active={active}
          content={content}
          onBack={() => setActive((p) => p - 1)}
          onFinish={handlePostPaciente}
          onNext={() => setActive((p) => p + 1)}
          buttonStyle={styles.btn}
          buttonTextStyle={styles.btnText}
          stepStyle={styles.teste}
        />
      </View>
    </ScrollView>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  btnStepper: {
    backgroundColor: '#16181b', //Cor de Fundo
    borderColor: '#24AAE3', //Azul Claro
    borderWidth: 1,
    width: 155,
    height: 45,
    paddingTop: 5,
    borderRadius: 50,
  },
  btn: {
    marginTop: 20,
    width: 100,
    borderRadius: 50,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  teste: {
    backgroundColor: '#2070B4',
  }, 
  titulo: {
    width: "80%",
    alignItems: 'center',
  }
});
