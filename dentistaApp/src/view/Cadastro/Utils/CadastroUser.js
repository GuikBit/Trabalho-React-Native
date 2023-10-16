import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Colors, Dimension } from '../../../global/GlobalStyles';

const CadastroUser = ({ subTitulo }) => {
  const [user, setUser] = useState({
    nome: null,
    login: null,
    senha: null,
    email: null,
    sexo: null,
    dataNasc: null,
    tel: null,
  });

  return (
    <View style={styles.cadastro}>
      <Text style={styles.titulo}>Novo Usuário</Text>
      <Text style={styles.subTitulo}>{subTitulo}</Text>
      <TextInput
        mode="outlined"
        label="Nome"
        left={
          <TextInput.Icon
            icon="account-circle"
            color={Colors.primary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.primary}
        outlineColor={Colors.primary}
        outlineStyle={styles.inputRadius}
        activeOutlineColor={Colors.primary}
        style={styles.input}
        textColor={Colors.primary}
        value={user.nome}
        labelColor={Colors.primary}
        onChangeText={(e) => setUser({ ...user, nome: e })}
      />
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
        outlineStyle={styles.inputRadius}
        activeOutlineColor={Colors.primary}
        style={styles.input}
        textColor={Colors.primary}
        value={user.login}
        labelColor={Colors.primary}
        onChangeText={(e) => setUser({ ...user, login: e })}
      />
      <TextInput
        mode="outlined"
        label="Senha"
        left={
          <TextInput.Icon
            icon="account-circle"
            color={Colors.primary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.primary}
        outlineColor={Colors.primary}
        outlineStyle={styles.inputRadius}
        activeOutlineColor={Colors.primary}
        style={styles.input}
        textColor={Colors.primary}
        value={user.senha}
        labelColor={Colors.primary}
        onChangeText={(e) => setUser({ ...user, senha: e })}
      />
      <TextInput
        mode="outlined"
        label="E-mail"
        left={
          <TextInput.Icon
            icon="account-circle"
            color={Colors.primary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.primary}
        outlineColor={Colors.primary}
        outlineStyle={styles.inputRadius}
        activeOutlineColor={Colors.primary}
        style={styles.input}
        textColor={Colors.primary}
        value={user.email}
        labelColor={Colors.primary}
        onChangeText={(e) => setUser({ ...user, email: e })}
      />
      {/* SEXO */}

      <TextInput
        mode="outlined"
        label="Data de Nascimento"
        left={
          <TextInput.Icon
            icon="account-circle"
            color={Colors.primary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.primary}
        outlineColor={Colors.primary}
        outlineStyle={styles.inputRadius}
        activeOutlineColor={Colors.primary}
        style={styles.input}
        textColor={Colors.primary}
        value={user.dataNasc}
        labelColor={Colors.primary}
        onChangeText={(e) => setUser({ ...user, dataNasc: e })}
      />
      <TextInput
        mode="outlined"
        label="Telefone"
        left={
          <TextInput.Icon
            icon="account-circle"
            color={Colors.primary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.primary}
        outlineColor={Colors.primary}
        outlineStyle={styles.inputRadius}
        activeOutlineColor={Colors.primary}
        style={styles.input}
        textColor={Colors.primary}
        value={user.tel}
        labelColor={Colors.primary}
        onChangeText={(e) => setUser({ ...user, tel: e })}
      />
    </View>
  );
};

export default CadastroUser;

const styles = StyleSheet.create({
  cadastro: {
    height: 700,
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  btn: {
    backgroundColor: '#24AAE3', //Cor de Fundo
    borderColor: '#24AAE3', //Azul Claro
    borderWidth: 1,
    width: 155,
    height: 45,
    paddingTop: 5,
    borderRadius: 50,
  },
  input: {
    height: 50,
    fontSize: 22,
    backgroundColor: 'white', //Cor de Fundo 16181b
    color: '#24AAE3', //Azul Claro
  },
  label: {
    fontSize: 20,
  },
  container: {
    backgroundColor: '#e6eef2', //Cor de Fundo 16181b
    height: Dimension.height,
  },
  inputRadius: {
    borderRadius: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#24AAE3',
    marginVertical: 15,
  },
  subTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 15,
  },
});
