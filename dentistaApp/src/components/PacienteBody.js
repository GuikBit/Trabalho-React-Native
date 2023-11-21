import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import globalStyle from '../../globalStyle';
import { Searchbar, TextInput, FAB } from 'react-native-paper';
import lista from '../Mock/lista';
import CardConsulta from './Cards/CardConsulta';
import { useGetConsultaByPacienteIdAuth } from '../service/queries/paciente';
import { AuthContext } from '../Auth/Auth';

const UserBody = ({ navigation }) => {
  const [titulo, setTitulo] = useState('Histórico de Consultas');
  const [pesquisa, setPesquisa] = useState('');
  const [filtro, setFiltro] = useState([]);
  const cor = '#2070B4';

  const { userLogged } = useContext(AuthContext);
  // const id = userLogged.id;
  const { data, isLoading } = useGetConsultaByPacienteIdAuth(userLogged.id);

  function buscaUsuario(e) {
    setPesquisa(e);

    if (e === '') {
      setFiltro(data);
    } else {
      const pesquisa = e.toLowerCase();
      const filtro = data.filter((user) => {
        const dataConsulta = user.dataNasc.toLowerCase();
        return dataConsulta.includes(pesquisa);
      });
      setFiltro(filtro);
    }
  }
  return (
    <View style={styles.body}>
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

      {!isLoading && (
        <FlatList
          style={styles.flatList}
          data={filtro.length == 0 ? data : filtro}
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
      )}
      <FAB
        icon="account-details"
        color="#FFFFFF"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('Cadastro', { id: user.id });
        }}
      />
    </View>
  );
};

export default UserBody;

const styles = StyleSheet.create({
  body: {
    top: -80,
    height: 657,
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
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#2D8ACD',
    color: '#FFFFFF',
  },
});
