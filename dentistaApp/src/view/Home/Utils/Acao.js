import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {TextInput} from 'react-native-paper'
import { TouchableOpacity } from 'react-native';

const Acao = ({ icone, tam, cor, texto, acao }) => {
    
  return (
    <TouchableOpacity style={styles.view} onPress={acao}>
      <TouchableOpacity style={styles.acao} >
        <TextInput.Icon
          icon={icone}
          iconColor={cor}
          size={tam}
          //style={styles.img}
          onPress={acao}
        />

      </TouchableOpacity>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default Acao;

const styles = StyleSheet.create({
  view: {
    width: 70,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 12,
  },
  acao: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15
  },
  img: {
    backgroundColor: '#FFFFFF',
  },
});
