import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CadastroPaciente = ({ subTitulo }) => {
  const cor = '#2070B4';

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
      <Text>{subTitulo}</Text>
      <TextInput
        mode="outlined"
        label="Nome"
        left={
          <TextInput.Icon
            icon="lead-pencil"
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={user.nome}
        labelColor={cor}
        onChangeText={(e) => setUser({ ...user, nome: e })}
      />
      <TextInput
        mode="outlined"
        label="Login"
        left={
          <TextInput.Icon
            icon="account"
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor="#2070B4"
        value={user.login}
        labelColor="#2070B4"
        onChangeText={(e) => setUser({ ...user, login: e })}
      />
      <TextInput
        mode="outlined"
        label="Senha"
        secureTextEntry
        right={
          <TextInput.Icon
            icon="eye"
            color="#2070B4"
            style={{ paddingTop: 10 }}
          />
        }
        left={
          <TextInput.Icon
            icon="key"
            color="#2070B4"
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={user.senha}
        labelColor={cor}
        onChangeText={(e) => setUser({ ...user, senha: e })}
      />
      <TextInput
        mode="outlined"
        label="Email"
        left={
          <TextInput.Icon icon="email" color={cor} style={{ paddingTop: 10 }} />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={user.email}
        labelColor={cor}
        onChangeText={(e) => setUser({ ...user, email: e })}
      />
      {/* SEXO */}

      <TextInput
        mode="outlined"
        label="Data de Nascimento"
        left={
          <TextInput.Icon
            icon="calendar"
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={user.dataNasc}
        labelColor={cor}
        onChangeText={(e) => setUser({ ...user, dataNasc: e })}
      />
      <TextInput
        mode="outlined"
        label="Telefone"
        left={
          <TextInput.Icon icon="phone" color={cor} style={{ paddingTop: 10 }} />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={user.tel}
        labelColor={cor}
        onChangeText={(e) => setUser({ ...user, tel: e })}
      />
    </View>
  );
};

export default CadastroPaciente;

const styles = StyleSheet.create({
  cadastro: {
    height: 550,
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
});
