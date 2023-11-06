import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Text } from 'react-native';
import globalStyle from '../../../globalStyle';
import Stepper from 'react-native-stepper-ui';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import CadastroPaciente from './Utils/CadastroPaciente';
import CadastroResponsavel from './Utils/CadastroResponsavel';
import CadastroEndereco from './Utils/CadastroEndereco';
import CadastroAnamnese from './Utils/CadastroAnamnese';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Cadastro = ({ route }) => {
  const [active, setActive] = useState(0);

  const navigation = useNavigation();

  const content = [
    <CadastroPaciente subTitulo="Informações Pessoais" />,
    <CadastroResponsavel subTitulo="Responsável" />,
    <CadastroEndereco subTitulo="Endereço" />,
    <CadastroAnamnese subTitulo="Anamnese" />,
  ];

  return (
    <ScrollView>
      <View style={{ margin: 15 }}>
        <TextInput.Icon
          icon="chevron-left"
          size={35}
          color="#2070B4"
          onPress={() => navigation.navigate('Login')}
          // onPress={
          //   route.params.interno !== true
          //     ? () => {
          //         navigation.navigate('Login');
          //       }
          //     : () => {
          //         navigation.navigate('Lista Pacientes');
          //       }
          // }
        />
        <Text style={[globalStyle.titulo,{ alignSelf: 'center' }]}>Novo Paciente</Text>
      </View>
      <View style={{ margin: 20 }}>
        <Stepper
          active={active}
          content={content}
          onBack={() => setActive((p) => p - 1)}
          onFinish={() => alert('Finish')}
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
});
