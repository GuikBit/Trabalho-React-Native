import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Card, Modal, Searchbar } from 'react-native-paper';
import globalStyle from '../../../globalStyle';
import listaEspe from '../../Mock/listaEspe';

const ModalEspec = ({
  hideEspec,
  pesquisa,
  modalEspec,
  styleModalEspec,
  setFiltro,
  buscaUsuario,
}) => {
  const [clicou, setClicou] = useState(false);

  return (
    <Modal visible={modalEspec} contentContainerStyle={styleModalEspec}>
      <Searchbar
        style={styles.searchModal}
        placeholder="Pesquisar Especialidade"
        value={pesquisa}
        onClearIconPress={() => setFiltro(lista)}
        onChangeText={(e) => buscaUsuario(e)}
        iconColor="#2070B4"
        rippleColor="#2070B4"
      />

      <View style={styles.modalBodyEspec}>
        <FlatList
          data={listaEspe}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            <Card
              style={[
                styles.card,
                {
                  borderColor: clicou ? '#1d9c06' : 'grey',
                  borderWidth: clicou ? 1 : 0.3,
                },
              ]}
              onPress={() => {
                setClicou(!clicou);
              }}
            >
              <View style={styles.header}>
                <Text style={styles.espec}>{item.espec}</Text>
              </View>
            </Card>;
          }}
        />
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

    // <Card
    //   style={[
    //     styles.card,
    //     {
    //       borderColor: clicou ? '#1d9c06' : 'grey',
    //       borderWidth: clicou ? 1 : 0.3,
    //     },
    //   ]}
    //   onPress={() => {
    //     setClicou(!clicou);
    //   }}
    // >
    //   <Text style={styles.espec}>{espec.espec}</Text>
    // </Card>
  );
};

export default ModalEspec;

const styles = StyleSheet.create({
  card: {
    height: 50,
    width: 'auto',
    marginHorizontal: 50,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 5,
    backgroundColor: '#FFFFFF',
  },
  view: {
    height: 50,
    width: 'auto',
  },
  espec: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: '#7a7d7a',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
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
