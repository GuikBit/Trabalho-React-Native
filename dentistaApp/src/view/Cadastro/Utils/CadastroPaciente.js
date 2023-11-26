import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { GlobalContext } from '../../../store/Context';
import { Colors } from '../../../global/GlobalStyles';

const CadastroPaciente = ({ subTitulo }) => {

  const { paciente, setPaciente } = useContext(GlobalContext);

  const ajustaData = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 8);
    const dataFormatada = limite.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    setPaciente({ ...paciente, dataNasc: dataFormatada })
  }
  const ajustaTelefone = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 11);
    const telFormatado = limite.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    setPaciente({ ...paciente, telefone: telFormatado })
  }
  const ajustaCPF = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 11);
    const cpfFormatado = limite.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setPaciente({ ...paciente, cpf: cpfFormatado })
  }
  return (
    <View style={styles.cadastro}>
      <Text>{subTitulo}</Text>
      <TextInput
        mode="outlined"
        label="Nome"
        left={
          <TextInput.Icon
            icon="lead-pencil"
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
          marginBottom: 10,
        }}
        textColor={Colors.secondary}
        value={paciente.nome}
        labelColor={Colors.secondary}
        onChangeText={(e) => setPaciente({ ...paciente, nome: e })}
      />
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
        selectionColor={Colors.secondary}
        outlineColor={Colors.secondary}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={Colors.secondary}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
          marginBottom: 10,
        }}
        textColor={Colors.secondary}
        value={paciente.senha}
        labelColor={Colors.secondary}
        onChangeText={(e) => setPaciente({ ...paciente, senha: e })}
      />
      <TextInput
        mode="outlined"
        label="Email"
        left={
          <TextInput.Icon icon="email" color={Colors.secondary} style={{ paddingTop: 10 }} />
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
          marginBottom: 10,
        }}
        textColor={Colors.secondary}
        value={paciente.email}
        labelColor={Colors.secondary}
        onChangeText={(e) => setPaciente({ ...paciente, email: e })}
      />
      {/* SEXO */}

      <TextInput
        mode="outlined"
        label="CPF"
        left={
          <TextInput.Icon
            icon="calendar"
            color={Colors.secondary}
            style={{ paddingTop: 10 }}
          />
        }
        keyboardType='numeric'
        selectionColor={Colors.secondary}
        outlineColor={Colors.secondary}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={Colors.secondary}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
          marginBottom: 10,
        }}
        textColor={Colors.secondary}
        value={paciente.cpf}
        labelColor={Colors.secondary}
        onChangeText={ajustaCPF}
      />
      <TextInput
        mode="outlined"
        label="Telefone"
        left={
          <TextInput.Icon icon="phone" color={Colors.secondary} style={{ paddingTop: 10 }} />
        }
        keyboardType='numeric'
        selectionColor={Colors.secondary}
        outlineColor={Colors.secondary}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={Colors.secondary}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
          marginBottom: 10,
        }}
        textColor={Colors.secondary}
        value={paciente.telefone}
        labelColor={Colors.secondary}
        onChangeText={ajustaTelefone}
      />
      <TextInput
        mode="outlined"
        label="Data de Nascimento"
        left={
          <TextInput.Icon
            icon="calendar"
            color={Colors.secondary}
            style={{ paddingTop: 10 }}
          />
        }
        keyboardType='numeric'
        selectionColor={Colors.secondary}
        outlineColor={Colors.secondary}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={Colors.secondary}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
          marginBottom: 10,
        }}
        textColor={Colors.secondary}
        value={paciente.dataNasc}
        labelColor={Colors.secondary}
        onChangeText={ajustaData}
      />
    </View>
  );
};

export default CadastroPaciente;

const styles = StyleSheet.create({
  cadastro: {
    height: 600,
    justifyContent: 'space-around',
    
    padding: 15,
  },
});
