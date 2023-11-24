import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { Button, Card, Modal, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyle from '../../../globalStyle';
import FiltroDentistas from '../Listagem/FiltroDentistas';
import { useGetDentistasAuth } from '../../service/queries/dentista';
import { useGetEspecAuth } from '../../service/queries/especialidade';
import { GlobalContext } from '../../store/Context';

const ModalEspec = ({
  modalEspec,
  styleModalEspec,
  buscaUsuario,
  hideEspec,
  pesquisa,
  filtro,
  setFiltro,
}) => {
  const { data, isLoading } = useGetEspecAuth();
  const { dentista, setDentista } = useContext(GlobalContext);

  return (
    <Modal
      visible={modalEspec}
      onDismiss={hideEspec}
      contentContainerStyle={styleModalEspec}
    >
      <FiltroDentistas
        pesquisa={pesquisa}
        buscaUsuario={buscaUsuario}
        setFiltro={setFiltro}
        data={data}
      />
      <View style={styles.modalBodyDentista}>
        {!isLoading && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card style={[styles.card]} onPress={() => {
                setDentista({...dentista, especialidade: item})
                hideEspec();
              }}>
                  <Text style={styles.nome}>{item.tipo}</Text>
              </Card>
            )}
          />
        )}
      </View>
      <View style={[globalStyle.rowBetween, styles.acao]}>
        <Button
          onPress={hideEspec}
          style={styles.btnModalVoltar}
          textColor="#FFFFFF"
          icon="arrow-left-bold"
        >
          Voltar
        </Button>
        <Button
          onPress={hideEspec}
          style={styles.btnModalbtnSelecionar}
          textColor="#FFFFFF"
          icon="check"
        >
          Selecionar
        </Button>
      </View>
    </Modal>

  );
};

export default ModalEspec;

const styles = StyleSheet.create({
  card: {
    height: 50,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 10,
    borderWidth: 0.3,
    backgroundColor: '#FFFFFF',
    //borderColor:'#db736e',
    borderLeftWidth: 5,
    padding: 8,
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  header: {
  },
  nome: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#7a7d7a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    height: 70,
  },
  dataNasc: {
    color: '#7a7d7a',
    fontSize: 18,
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  texto: {
    fontSize: 18,
    color: '#7a7d7a',
  },
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
    height: 520,
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
