import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '../../../globalStyle';
import listUser from '../../Mock/lista';
import Listagem from '../../components/Listagem/Listagem';
import { PaperProvider, FAB } from 'react-native-paper';
import HeaderGeral from '../../components/Listagem/HeaderGeral';
import FiltroPacientes from '../../components/Listagem/FiltroPacientes';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import CardPaciente from '../../components/Cards/CardPaciente';
import { useGetPacientesAuth } from '../../service/queries/paciente';
import { LinearGradient } from 'expo-linear-gradient';

const ListaPaciente = ({ navigation }) => {
  const { data, isLoading } = useGetPacientesAuth();

  const [filtro, setFiltro] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  function buscaUsuario(e) {
    setPesquisa(e);

    if (e === '') {
      setFiltro(data);
    } else {
      const pesquisaLowerCase = e.toLowerCase();
      const filtro = data.filter((user) => {
        const nomeLowerCase = user.nome.toLowerCase();
        // const pastaNuString = user.pastaNu.toString();
        return nomeLowerCase.includes(pesquisaLowerCase);
        // pastaNuString.includes(pesquisaLowerCase)
      });
      setFiltro(filtro);
    }
  }

  return (
    <PaperProvider>
      <View style={globalStyle.container}>
        <LinearGradient
          colors={['#2e86c9', '#24aae3']}
          style={globalStyle.headerPesq}
          start={{ x: 0.3, y: 0.1 }}
        >
          <HeaderGeral titulo="Pacientes" />
          <FiltroPacientes
            pesquisa={pesquisa}
            buscaUsuario={buscaUsuario}
            setFiltro={setFiltro}
          />
        </LinearGradient>

        {isLoading ? (
          <LoadingOverlay />
        ) : (
          <>
            <FlatList
              style={globalStyle.flatList}
              data={filtro.length == 0 ? data : filtro}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CardPaciente
                  usuario={item}
                  onPress={() => {
                    navigation.navigate('Paciente Details', { id: item.id });
                  }}
                />
              )}
            />

            <FAB
              icon="plus"
              color="#FFFFFF"
              style={styles.fab}
              onPress={() => {
                navigation.navigate('Cadastro', { interno: true });
              }}
            />
          </>
        )}
      </View>
    </PaperProvider>
  );
};

export default ListaPaciente;

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
    backgroundColor: '#2D8ACD',
    color: '#FFFFFF',
  },
});
