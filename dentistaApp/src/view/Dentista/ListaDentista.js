import { FlatList, StyleSheet, View } from 'react-native';
import React, { useCallback, useContext, useState } from 'react';
import globalStyle from '../../../globalStyle';
import FiltroDentistas from '../../components/Listagem/FiltroDentistas';
import { PaperProvider, FAB } from 'react-native-paper';
import HeaderGeral from '../../components/Listagem/HeaderGeral';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import CardPaciente from '../../components/Cards/CardPaciente';
import { useGetDentistasAuth } from '../../service/queries/dentista';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../Auth/Auth';
import CardDentista from '../../components/Cards/CardDestista';
import { useFocusEffect } from '@react-navigation/native';

const ListaDentista = ({ navigation }) => {
  const { data, isLoading } = useGetDentistasAuth();
  const [reload, setReload] = useState();
  const { userLogged } = useContext(AuthContext);

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
        const especLowerCase = user.especialidade.tipo.toLowerCase();
        return (nomeLowerCase.includes(pesquisaLowerCase) || especLowerCase.includes(pesquisaLowerCase));
        
      });
      setFiltro(res);
    }
  }
  useFocusEffect(
    useCallback(() => {
      
      

    }, [])
    );

  return (
    <PaperProvider>
      <View style={globalStyle.container}>
        <LinearGradient
          colors={['#2e86c9', '#24aae3']}
          style={globalStyle.headerPesq}
          start={{ x: 0.3, y: 0.1 }}
        >
          <HeaderGeral titulo="Dentistas" />
          <FiltroDentistas
            pesquisa={pesquisa}
            buscaUsuario={buscaUsuario}
            setFiltro={setFiltro}
            data={data}
          />
        </LinearGradient>

        {isLoading ? (
          <LoadingOverlay />
        ) : (
          <>
            <FlatList
              style={globalStyle.flatList}
              data={pesquisa.length == 0 ? data : filtro}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CardDentista
                  usuario={item}
                  onPress={() => {
                    // if (userLogged.role == 'Dentista')
                    //   navigation.navigate('Dentista Details', {
                    //     dentista: item.id,
                    //   });
                    navigation.navigate('Dentista Details', {item})
                  }}
                />
              )}
            />
            <FAB
              icon="plus"
              color="#FFFFFF"
              style={styles.fab}
              onPress={() => navigation.navigate('Novo Dentista')}
            />
          </>
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
    backgroundColor: '#2D8ACD',
    color: '#FFFFFF',
  },
});
