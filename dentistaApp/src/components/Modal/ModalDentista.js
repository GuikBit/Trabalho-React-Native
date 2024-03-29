import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { Button, Card, Modal, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyle from '../../../globalStyle';
import { useGetDentistasAuth } from '../../service/queries/dentista';
import FiltroDentistas from '../Listagem/FiltroDentistas';
import { GlobalContext } from '../../store/Context';

const ModalDentista = ({
  modalDent,
  styleModalDent,
  buscarDentista,
  hideDentis,
  pesquisa,
  filtro,
  setFiltro,
  tela
}) => {

  const { data, isLoading } = useGetDentistasAuth();
  const { consulta, setConsulta , dentista, setDentista} = useContext(GlobalContext);

  function buscarDentista(e) {
    if (e === '') {
      setFiltro(data);
    } else {
      const pesquisaLowerCase = e.toLowerCase();
      const filtro = data.filter((d) => {
        const nomeDentista = d.nome.toLowerCase();
        return (nomeDentista.includes(pesquisaLowerCase) );
      });
      setFiltro(filtro);
    }
  }
  return (
    <Modal
      visible={modalDent}
      onDismiss={hideDentis}
      contentContainerStyle={styleModalDent}
    >
      <FiltroDentistas
        pesquisa={pesquisa}
        buscarDentista={buscarDentista}
        setFiltro={setFiltro}
        data={data}       
      />
      <View style={styles.modalBodyDentista}>
        {!isLoading && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                style={[styles.card]}
                onPress={() => {
                  if(tela == "Consulta"){
                    
                    setDentista({...item})
                    
                    hideDentis();
                  }
                  if(tela == "NovaConsulta"){
                    setConsulta({ ...consulta, dentista: item });
                    hideDentis();
                  }
                }}
              >
                <View style={styles.header}>
                  <Text style={styles.nome}>{item.nome}</Text>
                </View>

                <View style={styles.body}>
                  <View style={styles.infoRow}>
                    <Text style={styles.texto}>
                      <Icon name="calendar" size={16} cor="#d1d1d1" />{' '}
                      {item.especialidade.tipo}
                    </Text>
                    <Text style={styles.texto}>
                      <Icon name="address-card-o" size={16} cor="#d1d1d1" />{' '}
                      {item.cro}
                    </Text>
                  </View>
                </View>
              </Card>
            )}
          />
        )}
      </View>
      {/* <View style={[globalStyle.rowBetween, styles.acao]}>
        <Button
          onPress={hideDentis}
          style={styles.btnModalVoltar}
          textColor="#FFFFFF"
          icon="arrow-left-bold"
        >
          Voltar
        </Button>
        <Button
          onPress={hideDentis}
          style={styles.btnModalbtnSelecionar}
          textColor="#FFFFFF"
          icon="check"
        >
          Selecionar
        </Button>
      </View> */}
    </Modal>

    
  );
};

export default ModalDentista;

const styles = StyleSheet.create({
  card: {
    height: 80,
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
  },
  header: {
    borderBottomColor: '#CCCED2',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  nome: {
    flexDirection: 'row',
    alignSelf: 'center',
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
    height: 460,
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
