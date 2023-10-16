import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import globalStyle from '../../../../assets/styles/globalStyle';

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
      <Text style={globalStyle.titulo}>Novo Usuário</Text>
      <Text style={globalStyle.subTitulo}>{subTitulo}</Text>
      <TextInput
        mode="outlined"
        label="Nome"
        left={
          <TextInput.Icon
            icon="account-circle"
            // color= {styles.}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor="#24AAE3"
        outlineColor="#24AAE3"
        outlineStyle={globalStyle.inputRadius}
        activeOutlineColor="#24AAE3"
        style={globalStyle.input}
        textColor="#24AAE3"
        value={user.nome}
        labelColor="#24AAE3"
        onChangeText={(e) => setUser({ ...user, nome: e })}
      />
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
        value={user.login}
        labelColor="#24AAE3"
        onChangeText={(e) => setUser({ ...user, login: e })}
      />
      <TextInput
        mode="outlined"
        label="Senha"
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
        value={user.senha}
        labelColor="#24AAE3"
        onChangeText={(e) => setUser({ ...user, senha: e })}
      />
      <TextInput
        mode="outlined"
        label="E-mail"
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
        value={user.email}
        labelColor="#24AAE3"
        onChangeText={(e) => setUser({ ...user, email: e })}
      />
      {/* SEXO */}

      <TextInput
        mode="outlined"
        label="Data de Nascimento"
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
        value={user.dataNasc}
        labelColor="#24AAE3"
        onChangeText={(e) => setUser({ ...user, dataNasc: e })}
      />
      <TextInput
        mode="outlined"
        label="Telefone"
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
        value={user.tel}
        labelColor="#24AAE3"
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
});
