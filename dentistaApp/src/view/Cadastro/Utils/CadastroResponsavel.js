import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import Icon from '@expo/vector-icons/FontAwesome';
import { GlobalContext } from '../../../store/Context';

const CadastroResponsavel = ({ subTitulo }) => {
  const cor = '#2070B4';
  const tam = 315;

  const [paciente, setPaciente] = useContext(GlobalContext);

  // const [addPacipaciente, setAddPacipaciente] = useState(false);

  // const [paciente, setPaciente] = useState({
  //   nome: null,
  //   cpf: null,
  //   telefone: null,
  // });

  // function adicionarPacipaciente() {
  //   setAddPacipaciente(true);
  // }

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
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            responsavel: { ...paciente.responsavel, cpf: e },
          })
        }
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
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            responsavel: { ...paciente.responsavel, telefone: e },
          })
        }
      />
      {/* {addPacipaciente && 
          <View>
          <TextInput
          mode="outlined"
          label="Nome"                    
          left={<TextInput.Icon icon="lead-pencil" color={cor} style={{paddingTop: 10}}/>}
          selectionColor={cor}
          outlineColor={cor} 
          outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
          activeOutlineColor={cor}                 
          style={globalStyle.input}
          textColor={cor}
          value={paciente.nome}
          labelColor={cor}
          onChangeText={(e)=> setPaciente({...paciente, nome: e})}
                    
        />
        <TextInput
          mode="outlined"
          label="CPF"                    
          left={<TextInput.Icon icon="lead-pencil" color={cor} style={{paddingTop: 10}}/>}
          selectionColor={cor}
          outlineColor={cor} 
          outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
          activeOutlineColor={cor}                 
          style={globalStyle.input}
          textColor={cor}
          value={paciente.cpf}
          labelColor={cor}
          onChangeText={(e)=> setPaciente({...paciente, cpf: e})}
                    
        />
        <TextInput
          mode="outlined"
          label="Telefone"                    
          left={<TextInput.Icon icon="phone" color={cor} style={{paddingTop: 10}}/>}
          selectionColor={cor}
          outlineColor={cor} 
          outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
          activeOutlineColor={cor}                 
          style={globalStyle.input}
          textColor={cor}
          value={paciente.telefone}
          labelColor={cor}
          onChangeText={(e)=> setPaciente({...paciente, telefone: e})}
                    
        />
        </View>} */}
      {/* <Text style={styles.add} onPress={adicionarPacipaciente}>
        <Icon name="plus" size={15} color="#2070B4" /> Adicionar
      </Text> */}
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
