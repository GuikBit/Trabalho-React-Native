import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { userAuth } from '../../components/Auth/Auth';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../../components/Util/Logo';
import { Colors, Dimension } from '../../global/GlobalStyles';

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
      <Logo style={styles.topo} />

      <View style={styles.login}>
        {newUser == true && (
          <View>
            <Text>Usuário cadastrado com sucesso!</Text>
          </View>
        )}
        {newUser == false && (
          <View>
            <Text>Não foi possivel salvar o usuário!</Text>
          </View>
        )}
        <TextInput
          mode="outlined"
          label="Login"
          left={
            <TextInput.Icon
              icon="account-circle"
              color={Colors.primary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.primary}
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          textColor={Colors.primary}
          value={obj.login}
          labelColor={Colors.primary}
          onChangeText={(e) => setObj({ ...obj, login: e })}
        />

        <TextInput
          mode="outlined"
          label="Senha"
          secureTextEntry
          right={
            <TextInput.Icon
              icon="eye"
              color={Colors.primary}
              style={{ paddingTop: 10 }}
            />
          }
          left={
            <TextInput.Icon
              icon="key"
              color={Colors.primary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.primary}
          outlineColor={Colors.primary}
          activeOutlineColor={Colors.primary}
          textColor={Colors.primary}
          value={obj.senha}
          onChangeText={(e) => setObj({ ...obj, senha: e })}
        />
      </View>

      <View style={styles.acoes}>
        <Button
          icon="account-plus"
          textColor="white"
          mode="contained"
          onPress={() => {
            navigation.navigate('Cadastro');
          }}
        >
          Cadastrar
        </Button>

        <Button
          icon="login"
          textColor="white"
          mode="contained"
          onPress={callLogar}
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
