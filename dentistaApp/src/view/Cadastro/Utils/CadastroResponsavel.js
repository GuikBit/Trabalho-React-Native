import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import Icon from '@expo/vector-icons/FontAwesome';

const CadastroResponsavel = ({ subTitulo }) => {
  const cor = '#2070B4';
  const tam = 315;

  const [addResp, setAddResp] = useState(false);

  const [resp, setResp] = useState({
    nome: null,
    cpf: null,
    telefone: null,
  });

  function adicionarResp() {
    setAddResp(true);
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
        value={resp.nome}
        labelColor={cor}
        onChangeText={(e) => setResp({ ...resp, nome: e })}
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
        value={resp.cpf}
        labelColor={cor}
        onChangeText={(e) => setResp({ ...resp, cpf: e })}
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
        value={resp.telefone}
        labelColor={cor}
        onChangeText={(e) => setResp({ ...resp, telefone: e })}
      />
      {/* {addResp && 
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
          value={resp.nome}
          labelColor={cor}
          onChangeText={(e)=> setResp({...resp, nome: e})}
                    
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
          value={resp.cpf}
          labelColor={cor}
          onChangeText={(e)=> setResp({...resp, cpf: e})}
                    
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
          value={resp.telefone}
          labelColor={cor}
          onChangeText={(e)=> setResp({...resp, telefone: e})}
                    
        />
        </View>} */}
      <Text style={styles.add} onPress={adicionarResp}>
        <Icon name="plus" size={15} color="#2070B4" /> Adicionar
      </Text>
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
