import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '../../globalStyle';
import { Searchbar, TextInput } from 'react-native-paper';
import lista from '../Mock/lista';
import CardConsulta from './Cards/CardConsulta';

const UserBody = () => {
  const [titulo, setTitulo] = useState('Histórico de Consultas');
  const [pesquisa, setPesquisa] = useState('');
  const [filtro, setFiltro] = useState([]);
  const cor = '#2070B4';
  function buscaUsuario(e) {
    setPesquisa(e);

    if (e === '') {
      setFiltro(lista);
    } else {
      const pesquisa = e.toLowerCase();
      const filtro = lista.filter((user) => {
        const dataConsulta = user.dataNasc.toLowerCase();
        return dataConsulta.includes(pesquisa);
      });
      setFiltro(filtro);
    }
  }
  return (
    <View style={[styles.body, globalStyle.container]}>
      <View style={styles.boxTitulo}>
        <Text style={styles.titulo}>{titulo}</Text>

        <TextInput
          mode="outlined"
          left={<TextInput.Icon icon="calendar-today" color={cor} />}
          selectionColor={cor}
          outlineColor={cor}
          outlineStyle={{ borderRadius: 50 }}
          activeOutlineColor={cor}
          style={styles.search}
          textColor={cor}
          labelColor={cor}
          onChangeText={(e) => setDataInicio(e)}
        />
      </View>

      <FlatList
        style={styles.flatList}
        data={filtro.length == 0 ? lista : filtro}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardConsulta
            consulta={item}
            onPress={() => {
              navigation.navigate('Consulta', { id: item.id });
            }}
          />
        )}
      />
    </View>
  );
};

export default UserBody;

const styles = StyleSheet.create({
  body: {
    top: -80,
  },
  titulo: {
    color: '#2070B4',
    fontSize: 26,
    fontWeight: 'bold',
  },
  boxTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    alignItems: 'center',
  },
  search: {
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    width: 140,
    height: 40,
  },
});
