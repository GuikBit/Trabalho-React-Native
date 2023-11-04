import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Colors, Dimension } from '../../global/GlobalStyles';
import { AuthProvider } from '../../Auth/Auth';
import Logo from '../../components/atoms/Logo';
import Mensagens from '../../components/molecules/Mensagens';
import LoginButtons from '../organisms/LoginButtons';
import LoginInputs from '../organisms/LoginInputs';

const LoginTemplate = () => {
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
      navigation.navigate('Home');
      {
        /* navigation.reset({ index: 0, routes: {nome: 'Tela Inicial'} })*/
      }
    }
  };

  return (
    <View>
      <Logo style={styles.topo} />
      <LoginInputs setObj={setObj} obj={obj} newUser={newUser} />

      <LoginButtons callLogar={callLogar} />
    </View>
  );
};

export default LoginTemplate;

const styles = StyleSheet.create({});
