import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '../../../globalStyle';
import { Button, Modal, Searchbar, TextInput } from 'react-native-paper';
import ModalDentista from '../../components/Modal/ModalDentista';
import ModalEspec from '../../components/Modal/ModalEspec';
import lista from '../../Mock/lista';
import listaEspe from '../../Mock/listaEspe';
import HeaderNavigate from '../../components/HeaderNavigate';
import listaDentista from '../../Mock/listaDentista';
import ModalPaciente from '../../components/Modal/ModalPaciente';
import { useGetDentistasAuth } from '../../service/queries/dentista';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/FontAwesome';

const NovaConsulta = ({ navigation }) => {
  const cor = '#2070B4';

  const { data, isLoading } = useGetDentistasAuth();

  const [modalEspec, setModalEspec] = useState(false);
  const [modalDent, setModalDent] = useState(false);
  const [modalPac, setModalPac] = useState(false);
  const [pesquisa, setPesquisa] = useState('');
  const [filtro, setFiltro] = useState([]);

  const hideDen = () => setModalDent(false);
  const hideEspec = () => setModalEspec(false);
  const hidePac = () => setModalPac(false);

  const [consulta, setConsulta] = useState({
    paciente: null,
    dentista: null,
    dataConsulta: null,
    horaConsulta: null,
    pagamento: null,
    tempoEstimado: false,
    descrição: null,
    pagamento: null,
  });

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

  const styleModal = {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    height: 650,
    justifyContent: '',
  };

  return (
    <View style={globalStyle.container}>

      <LinearGradient   
        colors={["#2e86c9", "#24aae3"]}
        style={globalStyle.headerPesq}
        start={ {x: 0.3, y: 0.1} } 
        >
          
        <View style={{ flexDirection: 'row'}}>
          <Icon
              name="chevron-left"
              size={30}
              color="#ECECEC"
              style={{ padding: 8 }}
              onPress={()=> {navigation.navigate("Lista Consultas")}}
          />
          <View style={styles.titulo}>
            <Text style={[globalStyle.titulo]}>
             Nova Consulta
            </Text>
          </View>
        </View>
      </LinearGradient>
      
      <ScrollView>
      <View style={styles.conulta}>
      <TextInput
          mode="outlined"
          label="Paciente"
          left={
            <TextInput.Icon
              icon="account"
              color={cor}
              style={{ paddingTop: 10 }}
            />
          }
          right={
            <TextInput.Icon
              icon="chevron-down"
              color={cor}
              style={{ paddingTop: 10 }}
              onPress={() => {
                setModalPac(true);
              }}
            />
          }
          selectionColor={cor}
          outlineColor={cor}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={cor}
          style={globalStyle.input}
          textColor={cor}
          value={consulta.dentista}
          labelColor={cor}
          editable={false}
        />
        <TextInput
          mode="outlined"
          label="Especialidade"
          left={
            <TextInput.Icon
              icon="account"
              color={cor}
              style={{ paddingTop: 10 }}
            />
          }
          right={
            <TextInput.Icon
              icon="chevron-down"
              color={cor}
              style={{ paddingTop: 10 }}
              onPress={() => {
                setModalEspec(true);
              }}
            />
          }
          selectionColor={cor}
          outlineColor={cor}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={cor}
          style={globalStyle.input}
          textColor={cor}
          value={consulta.dentista}
          labelColor={cor}
          editable={false}
        />
        <TextInput
          mode="outlined"
          label="Dentista"
          left={
            <TextInput.Icon
              icon="account"
              color={cor}
              style={{ paddingTop: 10 }}
            />
          }
          right={
            <TextInput.Icon
              icon="chevron-down"
              color={cor}
              style={{ paddingTop: 10 }}
              onPress={() => {
                setModalDent(true);
              }}
            />
          }
          selectionColor={cor}
          outlineColor={cor}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={cor}
          style={globalStyle.input}
          textColor={cor}
          value={consulta.dentista}
          labelColor={cor}
          editable={false}
        />
        <TextInput
          mode="outlined"
          label="Data"
          left={
            <TextInput.Icon
              icon="calendar"
              color={cor}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={cor}
          outlineColor={cor}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={cor}
          style={globalStyle.input}
          textColor={cor}
          value={consulta.dataConsulta}
          labelColor={cor}
          onChangeText={(e) => setConsulta({ ...consulta, dataConsulta: e })}
        />
        <TextInput
          mode="outlined"
          label="Hora"
          left={
            <TextInput.Icon
              icon="clock-time-eight-outline"
              color={cor}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={cor}
          outlineColor={cor}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={cor}
          style={globalStyle.input}
          textColor={cor}
          value={consulta.horaConsulta}
          labelColor={cor}
          onChangeText={(e) => setConsulta({ ...consulta, horaConsulta: e })}
        />
        <Button
          icon="content-save"
          textColor="#FFFFFF"
          mode="contained"
          labelStyle={globalStyle.label}
          style={styles.btnConsulta}
        >
          Agendar Consulta
        </Button>
      </View>
      </ScrollView>
   

      <ModalDentista
        modalDent={modalDent}
        hideDentis={hideDen}
        buscaUsuario={buscaUsuario}
        pesquisa={pesquisa}
        styleModalDent={styleModal}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      <ModalEspec
        hideEspec={hideEspec}
        pesquisa={pesquisa}
        styleModalEspec={styleModal}
        modalEspec={modalEspec}
      />

      <ModalPaciente 
        hidePac={hidePac}
        pesquisa={pesquisa}
        styleModalPac={styleModal}
        modalPac={modalPac}
      />
      
    </View>
  );
};

export default NovaConsulta;

const styles = StyleSheet.create({
  conulta: {
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderColor: '#2070B4',
    borderWidth: 0.3,
    height: 500,
    margin: 15,
    marginTop: 120,
    padding: 15,
    borderRadius: 15,
  },
  btnConsulta: {
    margin: 20,
    backgroundColor: '#2070B4',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    fontSize: 22,
    backgroundColor: '#FFFFFF',
  },
  btnModalbtnSelecionar: {
    backgroundColor: '#2070B4',
  },
  btnModalVoltar: {
    backgroundColor: 'grey',
  },
  modalBody: {
    height: 510,
    padding: 10,
  },titulo: {
    width: "80%",
    alignItems: 'center',
  }
});
