import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';

const FiltroDentistas = ({ setFiltro, buscaUsuario, pesquisa, data }) => {
  return (
    <Searchbar
      style={styles.search}
      placeholder="Pesquisar"
      value={pesquisa}
      onClearIconPress={() => setFiltro(data)}
      onChangeText={(e) => buscaUsuario(e)}
      iconColor="#2070B4"
      rippleColor="#2070B4"
    />
  );
};

export default FiltroDentistas;

const styles = StyleSheet.create({});
