import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';

const FiltroPacientes = ({ setFiltro, buscaPaciente, pesquisa }) => {
  return (
    <Searchbar
      style={styles.search}
      placeholder="Pesquisar"
      value={pesquisa}
      onClearIconPress={() => setFiltro(lista)}
      onChangeText={(e) => buscaPaciente(e)}
      iconColor="#2070B4"
      rippleColor="#2070B4"
    />
  );
};

export default FiltroPacientes;

const styles = StyleSheet.create({
  search: {
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#2070B4',
    marginTop: 15,
  },
});
