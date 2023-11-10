import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput, Button, IconButton } from 'react-native-paper';

const ButtonIcon = ({ icone, tam, cor, texto, acao }) => {
  const [prim, seg] = texto.split(' ');
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.acao} onPress={acao}>
        <TextInput.Icon
          icon={icone}
          iconColor={cor}
          size={tam}
          style={styles.img}
          onPress={acao}
        />
      </TouchableOpacity>
      <Text style={styles.texto}>{prim}</Text>
      {seg && <Text style={styles.texto}>{seg}</Text>}
    </View>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 12,
  },
  acao: {
    width: 57,
    height: 57,
    margin: 10,
    elevation: 5,
    borderRadius: 50,
    backgroundColor: '#24AAE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#24AAE3',
    fontSize: 18,
    fontWeight: '500',
  },
  img: {
    backgroundColor: '#FFFFFF',
  },
});
