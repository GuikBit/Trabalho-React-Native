import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '../../../globalStyle';
import FiltroDentistas from '../../components/Listagem/FiltroDentistas';
import { PaperProvider } from 'react-native-paper';
import HeaderGeral from '../../components/Listagem/HeaderGeral';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import CardPaciente from '../../components/Cards/CardPaciente';
import { useGetDentistasAuth } from '../../service/queries/dentista';

const ListaDentista = ({ navigation }) => {
  const { data, isLoading } = useGetDentistasAuth();

  const [filtro, setFiltro] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  function buscaUsuario(e) {
    setPesquisa(e);

    if (e === '') {
      setFiltro(data);
    } else {
      const pesquisaLowerCase = e.toLowerCase();
      const res = data.filter((user) => {
        const nomeLowerCase = user.nome.toLowerCase();
        // const pastaNuString = user.pastaNu.toString();
        return nomeLowerCase.includes(pesquisaLowerCase);
        // pastaNuString.includes(pesquisaLowerCase)
      });
      setFiltro(res);
    }
  }

  return (
    <PaperProvider>
      <View style={globalStyle.container}>
        <View style={globalStyle.headerPesq}>
          <HeaderGeral titulo="Dentistas" />
          <FiltroDentistas
            pesquisa={pesquisa}
            buscaUsuario={buscaUsuario}
            setFiltro={setFiltro}
            data={data}
          />
        </View>
        {isLoading ? (
          <LoadingOverlay />
        ) : (
          <FlatList
            style={globalStyle.flatList}
            data={pesquisa.length == 0 ? data : filtro}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardPaciente
                usuario={item}
                onPress={() => {
                  navigation.navigate('Dentista', { id: item.id });
                }}
              />
            )}
          />
        )}
      </View>
    </PaperProvider>
  );
};

export default ListaDentista;

const styles = StyleSheet.create({
  search: {
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#2070B4',
    marginTop: 15,
  },
  searchModal: {
    marginHorizontal: 5,
    backgroundColor: '#cfe7fc',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputConsulta: {
    width: 150,
    fontSize: 18,
    height: 40,
  },
  acao: {},
  modalBodyDentista: {
    height: 340,
    padding: 10,
  },
  modalBodyEspec: {
    height: 225,
    padding: 10,
  },
  modalTexto: {
    fontSize: 22,
    marginHorizontal: 25,
    marginTop: 5,
  },
  btnModalbtnSelecionar: {
    backgroundColor: '#2070B4',
  },
  btnModalVoltar: {
    backgroundColor: 'grey',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#2070B4',
    color: '#FFFFFF',
  },
});
