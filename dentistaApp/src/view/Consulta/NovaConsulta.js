import { FlatList, StyleSheet, Text, View } from 'react-native';
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

const NovaConsulta = ({ navigation }) => {
  const cor = '#2070B4';

  const { data, isLoading } = useGetDentistasAuth();

  const [modalEspec, setModalEspec] = useState(false);
  const [modalDent, setModalDent] = useState(false);

  const [pesquisa, setPesquisa] = useState('');
  const [filtro, setFiltro] = useState([]);

  const hideDen = () => setModalDent(false);
  const hideEspec = () => setModalEspec(false);

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
      <HeaderNavigate
        titulo="Nova Consulta"
        onPress={() => {
          navigation.navigate('Lista Consultas');
        }}
      />

      <View style={styles.conulta}>
        {/* <TextInput
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
        /> */}
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

      <ModalDentista
        modalDent={modalDent}
        hideDentis={hideDen}
        buscaUsuario={buscaUsuario}
        pesquisa={pesquisa}
        styleModalDent={styleModal}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      {/* <Modal
        onDismiss={hideDen}
        visible={modalDent}
        contentContainerStyle={styleModal}
      >
        <Searchbar
          style={globalStyle.search}
          placeholder="Pesquisar Dentista"
          value={pesquisa}
          onClearIconPress={() => setFiltro(lista)}
          onChangeText={(e) => buscaUsuario(e)}
        />
        <View style={styles.modalBody}>
          <FlatList
            data={listaDentista}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ModalDentista dentista={item} />}
          />
        </View>
        <View style={[globalStyle.rowBetween, styles.acao]}>
          <Button
            onPress={() => {
              setModalDent(false);
            }}
            style={styles.btnModalVoltar}
            textColor="#FFFFFF"
            icon="arrow-left-bold"
          >
            Voltar
          </Button>
          <Button
            onPress={() => {}}
            style={styles.btnModalbtnSelecionar}
            textColor="#FFFFFF"
            icon="check"
          >
            Selecionar
          </Button>
        </View>
      </Modal> */}

      <ModalEspec
        hideEspec={hideEspec}
        pesquisa={pesquisa}
        styleModalEspec={styleModal}
        modalEspec={modalEspec}
      />
      {/* <Modal
        onDismiss={hideEspec}
        visible={modalEspec}
        contentContainerStyle={styleModal}
      >
        <Searchbar
          style={globalStyle.search}
          placeholder="Pesquisar Especialidade"
          value={pesquisa}
          onClearIconPress={() => setFiltro(lista)}
          onChangeText={(e) => buscaUsuario(e)}
        /> */}
      {/* <View style={styles.modalBody}>
        <FlatList
          data={listaEspe}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ModalEspec espec={item} />}
        />
      </View>
      <View style={[globalStyle.rowBetween, styles.acao]}>
        <Button
          onPress={() => {
            setModalEspec(false);
          }}
          style={styles.btnModalVoltar}
          textColor="#FFFFFF"
          icon="arrow-left-bold"
        >
          Voltar
        </Button>
        <Button
          onPress={() => {}}
          style={styles.btnModalbtnSelecionar}
          textColor="#FFFFFF"
          icon="check"
        >
          Selecionar
        </Button>
      </View>
      </Modal> */}
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
    // marginTop: 120,
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
  },
});
