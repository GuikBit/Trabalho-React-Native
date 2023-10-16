import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Text } from 'react-native';
import {
  TextInput,
  Button,
  HelperText,
  ActivityIndicator,
  MD2Colors,
} from 'react-native-paper';
import CadastroUser from './Utils/CadastroUser';
import { Dimension, Colors } from '../../global/GlobalStyles';

const Cadastro = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Novo Usuário</Text>
      <View>
        <CadastroUser />
      </View>
    </ScrollView>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6eef2', //Cor de Fundo 16181b
    height: Dimension.height,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
    marginVertical: 15,
  },
});
