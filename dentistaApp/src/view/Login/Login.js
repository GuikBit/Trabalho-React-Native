import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { userAuth } from '../../components/Auth/Auth';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../../components/Util/Logo';
import globalStyle from '../../../assets/styles/globalStyle';

const width = Dimensions.get('screen').width;
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
    <ScrollView style={globalStyle.container}>
      <Logo style={styles.topo} />

      <View style={styles.login}>
        {newUser == true && (
          <View style={globalStyle.successContainer}>
            <Text style={globalStyle.success}>
              Usuário cadastrado com sucesso!
            </Text>
          </View>
        )}
        {newUser == false && (
          <View style={globalStyle.dangerContainer}>
            <Text style={globalStyle.danger}>
              Não foi possivel salvar o usuário!
            </Text>
          </View>
        )}
        <TextInput
          mode="outlined"
          label="Login"
          left={
            <TextInput.Icon
              icon="account-circle"
              color="#24AAE3"
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor="#24AAE3"
          outlineColor="#24AAE3"
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor="#24AAE3"
          style={globalStyle.input}
          textColor="#24AAE3"
          value={obj.login}
          labelColor="#24AAE3"
          onChangeText={(e) => setObj({ ...obj, login: e })}
        />

        <TextInput
          mode="outlined"
          label="Senha"
          secureTextEntry
          right={
            <TextInput.Icon
              icon="eye"
              color="#24AAE3"
              style={{ paddingTop: 10 }}
            />
          }
          left={
            <TextInput.Icon
              icon="key"
              color="#24AAE3"
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor="#24AAE3"
          outlineColor="#24AAE3"
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor="#24AAE3"
          style={globalStyle.input}
          textColor="#24AAE3"
          value={obj.senha}
          onChangeText={(e) => setObj({ ...obj, senha: e })}
        />
      </View>

      <View style={styles.acoes}>
        <Button
          icon="account-plus"
          textColor="white"
          mode="contained"
          labelStyle={globalStyle.label}
          onPress={() => {
            navigation.navigate('Cadastro');
          }}
          style={globalStyle.btn}
        >
          Cadastrar
        </Button>

        <Button
          icon="login"
          textColor="white"
          mode="contained"
          labelStyle={globalStyle.label}
          onPress={callLogar}
          style={globalStyle.btn}
        >
          Logar
        </Button>
      </View>
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
