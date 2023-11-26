import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import Icon from '@expo/vector-icons/FontAwesome';
import { GlobalContext } from '../../../store/Context';

const CadastroResponsavel = ({ subTitulo }) => {
  const cor = '#2070B4';
  const tam = 315;

  const { paciente, setPaciente } = useContext(GlobalContext);

  const ajustaTelefone = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 11);
    const telFormatado = limite.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    setPaciente({ ...paciente, responsavel: {...paciente.responsavel, telefone: telFormatado }})
  } 
  // ...paciente,
  //           responsavel: { ...paciente.responsavel, nome: e },
  const ajustaCPF = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 11);
    const cpfFormatado = limite.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setPaciente({ ...paciente, responsavel: {...paciente.responsavel, cpf: cpfFormatado }})
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
        value={paciente.responsavel.nome}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            responsavel: { ...paciente.responsavel, nome: e },
          })
        }
      />
      <TextInput
        mode="outlined"
        label="CPF"
        left={
          <TextInput.Icon
            icon="badge-account-horizontal"
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
        value={paciente.responsavel.cpf}
        labelColor={cor}
        onChangeText={ajustaCPF}
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
        value={paciente.responsavel.telefone}
        labelColor={cor}
        onChangeText={ajustaTelefone}
      />
    </View>
  );
};

export default CadastroResponsavel;

const styles = StyleSheet.create({
  cadastro: {
    height: 315,
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  add: {
    width: 80,
    paddingLeft: 5,
    fontWeight: '500',
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
});
