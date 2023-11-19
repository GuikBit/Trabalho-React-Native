import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Listagem from '../../components/Listagem/Listagem';
import globalStyle from '../../../globalStyle';
import lista from '../../Mock/lista';
import { Button, Modal, PaperProvider, FAB } from 'react-native-paper';
import FiltroConsultas from '../../components/Listagem/FiltroConsultas';
import FiltroPacientes from '../../components/Listagem/FiltroPacientes';
import HeaderGeral from '../../components/Listagem/HeaderGeral';
import ModalDentista from '../../components/Modal/ModalDentista';
import ModalEspec from '../../components/Modal/ModalEspec';
import CardConsulta from '../../components/Cards/CardConsulta';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import { useGetPacientesAuth } from '../../service/queries/paciente';
import { LinearGradient } from 'expo-linear-gradient';

const ListaConsulta = ({ navigation }) => {
  const { data, isLoading } = useGetPacientesAuth();

  const [filtro, setFiltro] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(null);
  const [dentista, setDentista] = useState(null);
  const [espec, setEspec] = useState(null);

  const [modalDent, setModalDent] = useState(false);
  const [modalEspec, setModalEspec] = useState(false);

  const showDentis = () => setModalDent(true);
  const hideDentis = () => setModalDent(false);

  const showEspec = () => setModalEspec(true);
  const hideEspec = () => setModalEspec(false);

  function buscaUsuario(e) {
    setPesquisa(e);

    if (e === '') {
      setFiltro(lista);
    } else {
      const pesquisaLowerCase = e.toLowerCase();
      const filtro = lista.filter((user) => {
        const nomeLowerCase = user.nome.toLowerCase();
        const pastaNuString = user.pastaNu.toString();
        return (
          nomeLowerCase.includes(pesquisaLowerCase) ||
          pastaNuString.includes(pesquisaLowerCase)
        );
      });
      setFiltro(filtro);
    }
  }

  return (
    <PaperProvider>
      <View style={globalStyle.container}>
      <LinearGradient        
        colors={["#2e86c9", "#24aae3"]}
        style={globalStyle.headerPesq}
        start={ {x: 0.3, y: 0.1} } 
        >
          <HeaderGeral titulo="Consultas" />
          <FiltroConsultas
            setDataFim={setDataFim}
            setDataInicio={setDataInicio}
            setFiltro={setFiltro}
            showDentis={showDentis}
            showEspec={showEspec}
            buscaUsuario={buscaUsuario}
            dataFim={dataFim}
            dataInicio={dataInicio}
            pesquisa={pesquisa}
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
              <CardConsulta
                consulta={item}
                onPress={() => {
                  navigation.navigate('Consulta Details', { id: item.id });
                }}
              />
            )}
          />
          <FAB
              icon="plus"
              color='#FFFFFF'
              style={styles.fab}
              onPress={() => {navigation.navigate('Nova Consulta')}}
          />
          </>
          
        )}
      </View>

      <ModalDentista
        modalDent={modalDent}
        styleModalDent={styles.styleModalDent}
        pesquisa={pesquisa}
        setFiltro={setFiltro}
        buscaUsuario={buscaUsuario}
        hideDentis={hideDentis}
      />

      <ModalEspec
        pesquisa={pesquisa}
        setFiltro={setFiltro}
        buscaUsuario={buscaUsuario}
        modalEspec={modalEspec}
        styleModalEspec={styles.styleModalEspec}
        hideEspec={hideEspec}
      />
    </PaperProvider>
  );
};

export default ListaConsulta;

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
  styleModalEspec: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 15,
    height: 350,
    justifyContent: '',
  },
  styleModalDent: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    height: 450,
    justifyContent: '',
  },
});
