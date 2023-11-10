import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { GlobalContext } from '../../../store/Context';

const CadastroPaciente = ({ subTitulo }) => {
  const cor = '#2070B4';

  const { paciente, setPaciente } = useContext(GlobalContext);

  return (
    <ScrollView style={styles.cadastro}>
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
          marginBottom: 10,
        }}
        textColor={cor}
        value={paciente.nome}
        labelColor={cor}
        onChangeText={(e) => setPaciente({ ...paciente, nome: e })}
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
          marginBottom: 10,
        }}
        textColor="#2070B4"
        value={paciente.login}
        labelColor="#2070B4"
        onChangeText={(e) => setPaciente({ ...paciente, login: e })}
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
          marginBottom: 10,
        }}
        textColor={cor}
        value={paciente.senha}
        labelColor={cor}
        onChangeText={(e) => setPaciente({ ...paciente, senha: e })}
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
          marginBottom: 10,
        }}
        textColor={cor}
        value={paciente.email}
        labelColor={cor}
        onChangeText={(e) => setPaciente({ ...paciente, email: e })}
      />
      {/* SEXO */}

      <TextInput
        mode="outlined"
        label="CPF"
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
          marginBottom: 10,
        }}
        textColor={cor}
        value={paciente.cpf}
        labelColor={cor}
        onChangeText={(e) => setPaciente({ ...paciente, cpf: e })}
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
          marginBottom: 10,
        }}
        textColor={cor}
        value={paciente.telefone}
        labelColor={cor}
        onChangeText={(e) => setPaciente({ ...paciente, telefone: e })}
      />
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
          marginBottom: 10,
        }}
        textColor={cor}
        value={paciente.dataNasc}
        labelColor={cor}
        onChangeText={(e) => setPaciente({ ...paciente, dataNasc: e })}
      />
    </ScrollView>
  );
};

export default CadastroPaciente;

const styles = StyleSheet.create({
  cadastro: {
    height: 550,
    // justifyContent: 'space-around',
    // marginHorizontal: 20,
    padding: 15,
  },
});
