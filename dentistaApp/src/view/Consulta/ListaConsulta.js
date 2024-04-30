import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Listagem from '../../components/Listagem/Listagem';
import globalStyle from '../../../globalStyle';
import lista from '../../Mock/lista';
import { Button, Modal, PaperProvider, FAB, SegmentedButtons  } from 'react-native-paper';
import FiltroConsultas from '../../components/Listagem/FiltroConsultas';
import FiltroPacientes from '../../components/Listagem/FiltroPacientes';
import HeaderGeral from '../../components/Listagem/HeaderGeral';
import ModalDentista from '../../components/Modal/ModalDentista';
import ModalEspec from '../../components/Modal/ModalEspec';
import CardConsulta from '../../components/Cards/CardConsulta';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import { useGetPacientesAuth } from '../../service/queries/paciente';
import { LinearGradient } from 'expo-linear-gradient';
import { useGetConsultasAuth } from '../../service/queries/consulta';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import SuccessResponse from '../../components/response/SuccessResponse';
import { useContext } from 'react';
import { GlobalContext } from '../../store/Context';
import { AuthContext } from '../../Auth/Auth';

const ListaConsulta = ({ navigation, route }) => {

  const { data, isLoading } = useGetConsultasAuth();
  const { dentista, setDentista, limpaDentista } = useContext(GlobalContext);
  const { userLogged } = useContext(AuthContext);
  const [filtro, setFiltro] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [novo, setNovo] = useState(false);
  const [modalDent, setModalDent] = useState(false);

  const showDentis = () => setModalDent(true);
  const hideDentis = () => setModalDent(false);

  function filtrarConsulta() {
    var filtro ;
    if (pesquisa === '') {      
      setFiltro(data)
      if(dentista.nome != '' && dataInicio != ''){
        filtro = data.filter((consulta) => {    
          if((dentista.nome == consulta.dentista.nome && consulta.dataConsulta === dataInicio)){
            return consulta
          }
        })
        setFiltro(filtro.length > 0 ? filtro : []);
      }
      else if(dentista.nome != '' || dataInicio != ''){
        filtro = data.filter((consulta) => {      
          return (
            dentista.nome === consulta.dentista.nome ||
            consulta.dataConsulta === dataInicio
          );
        })
        setFiltro(filtro.length > 0 ? filtro : []);
      }     
    } else {
      const pesquisaLowerCase = pesquisa.toLowerCase();
      const filtro = data.filter((user) => {
        const nomeDentista = user.dentista.nome.toLowerCase();
        const nomePaciente = user.paciente.nome.toLowerCase();
        const item = (nomeDentista.includes(pesquisaLowerCase) ||  
                       nomePaciente.includes(pesquisaLowerCase)  
                      );
       
        return item;
      });
      setFiltro(filtro.length > 0 ? filtro : []);
    }
  }
  
  useFocusEffect(
    useCallback(() => {

      const novo = route.params?.novo || false;
      filtrarConsulta()
      if(novo === true){
        route.params=null; 
        setNovo(true)
      }
      //console.log(userLogged)
      if(userLogged.role === "Dentista"){
        setDentista(userLogged)
      }
      return() =>{
         //limpaDentista()
      }
    }, [ dentista, pesquisa, dataInicio]));

  return (
    <PaperProvider>
      <View style={globalStyle.container}>
        <LinearGradient
          colors={["#2070b4", "#1e7bbd", "#1c85c7", "#1c90cf", "#1e9bd8", "#309ed9", "#3ea1d9", "#49a4da", "#599fd3", "#669bcc", "#6f96c4", "#7692bc"]}
          style={globalStyle.headerPesq}
          start={{ x: 0.3, y: 0.1 }}
        >
          <HeaderGeral titulo="Consultas" />
          <FiltroConsultas
            data={data}
            setDataInicio={setDataInicio}
            setFiltro={setFiltro}
            showDentis={showDentis}
            filtrarConsulta={filtrarConsulta}
            dataInicio={dataInicio}
            pesquisa={pesquisa}
            setPesquisa={setPesquisa}
            nomeDentista={dentista.nome}
          />
        </LinearGradient>

        {isLoading ? (
          <LoadingOverlay />
        ) : (
          <>
            {novo &&
            <View style={{marginHorizontal: 20, height: 40, margin: 5, marginTop: 10 }}>
              <SuccessResponse titulo="Consulta salva com sucesso" onPress={()=>{setNovo(false)}} cor="#529558" />
            </View>
            
            }
            <FlatList
              style={globalStyle.flatList}
              data={(!filtro || filtro.length === 0) ? data : filtro}
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
            {userLogged.role === "Admin" &&(
              <FAB
              icon="plus-thick"
              color="#FFFFFF"
              style={styles.fab}
              onPress={() => {
                navigation.navigate('Nova Consulta');
              }}
            />
            )}
            
          </>
        )}
      </View>

      <ModalDentista
        modalDent={modalDent}
        styleModalDent={styles.styleModalDent}
        pesquisa={pesquisa}
        setFiltro={setFiltro}
        hideDentis={hideDentis}
        tela="Consulta"
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
    height: 550,
    justifyContent: '',
  },
});
