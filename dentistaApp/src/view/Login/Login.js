import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Colors, Dimension } from '../../global/GlobalStyles';
import { AuthContext, AuthProvider, userAuth } from '../../Auth/Auth';
import Logo from '../../components/Logo';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { apiGetPorId } from '../../service/Api';
import { LinearGradient } from 'expo-linear-gradient';
const Login = ({}) => {
  const [newUser, setNewuser] = useState();

  const { login, user, setUser } = useContext(AuthContext);

  const route = useRoute();
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (route.params?.criado) {
  //     setNewuser = true;
  //   }
  // }, [route.params?.criado]);

  const handleLogin = () => {
    login();
    navigation.navigate('Home');
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
              icon="account"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
          activeOutlineColor={Colors.secondary}
          style={{
            height: 50,
            fontSize: 22,
            backgroundColor: '#FFFFFF',
            color: '#24AAE3',
          }}
          textColor={Colors.secondary}
          value={user.login}
          labelColor={Colors.secondary}
          onChangeText={(e) => setUser({ ...user, login: e })}
        />

        <TextInput
          mode="outlined"
          label="Senha"
          secureTextEntry
          right={
            <TextInput.Icon
              icon="eye"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          left={
            <TextInput.Icon
              icon="key"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
          activeOutlineColor={Colors.secondary}
          style={{
            height: 50,
            fontSize: 22,
            backgroundColor: '#FFFFFF',
            color: '#24AAE3',
          }}
          textColor={Colors.secondary}
          value={user.password}
          onChangeText={(e) => setUser({ ...user, password: e })}
        />
      </View>

      <View style={styles.acoes}>
      <LinearGradient      
        colors={["#2e86c9", "#24aae3"]}
        style={styles.buttons}
        start={ {x: 0.3, y: 0.1} } 
        >
          <Button
          icon="account-plus"
          textColor="white"
          mode="contained"
          onPress={() => {
            navigation.navigate('Cadastro');
          }}
          style={styles.buttons}
          labelStyle={{ fontSize: 20 }}
        >
          Cadastrar
        </Button>

        </LinearGradient>
        
        <LinearGradient      
        colors={["#2e86c9", "#24aae3"]}
        style={styles.buttons}
        start={ {x: 0.3, y: 0.1} } 
        >
        <Button
          icon="login"
          textColor="white"
          mode="contained"
          onPress={handleLogin}
          style={styles.buttons}
          labelStyle={{ fontSize: 20 }}
        >
          Logar
        </Button>
        </LinearGradient>
        
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
  buttons: {
    //backgroundColor: Colors.secondary,
    backgroundColor: "transparent",
    width: 155,
     height: 45,
     justifyContent: 'center',
    //padding: 5,
    borderRadius: 50,
  },
});
