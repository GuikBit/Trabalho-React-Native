import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Colors, Dimension } from '../../global/GlobalStyles';
import { AuthProvider } from '../../Auth/Auth';
import Logo from '../../components/atoms/Logo';
import Mensagens from '../../components/molecules/Mensagens';
import LoginTemplate from '../../components/templates/LoginTemplate';

const Login = ({ navigation, route }) => {
  const [obj, setObj] = useState({ login: 'Admin', senha: '123' });

  const { login } = userAuth();

  const [newUser, setNewuser] = useState();

  useEffect(() => {
    if (route.params?.criado) {
      setNewuser = true;
    }
  }, [route.params?.criado]);

  const callLogar = () => {
    if (login(obj.login, obj.senha)) {
      navigation.navigate('Tela Inicial');
      {
        /* navigation.reset({ index: 0, routes: {nome: 'Tela Inicial'} })*/
      }
    }
  };
  return (
    <ScrollView>
      <LoginTemplate />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  texto: {
    color: 'black',
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 100,
  },
  login: {
    marginHorizontal: 20,
    height: 150,
    justifyContent: 'space-around',
    marginTop: 130,
  },
  label: {
    fontSize: 22,
  },
});
