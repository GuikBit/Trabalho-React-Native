import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import { Button, Modal, TextInput } from 'react-native-paper';
import globalStyle from '../../../globalStyle';
import { useGetDentistasAuth } from '../../service/queries/dentista';
import { Colors } from '../../global/GlobalStyles';
import { usePostEspecAuth } from '../../service/queries/especialidade';
import SuccessResponse from '../response/SuccessResponse';
import ErrorResponse from '../response/ErrorResponse';

const ModalNovaEspec = ({
  modalEspec,
  styleModalEspec,
  buscaUsuario,
  hideEspec,
  pesquisa,
  filtro,
  setFiltro,
}) => {

    const { mutate } = usePostEspecAuth();

    const [espec, setEspec] = useState({
        tipo: "",
        valorBase: ""
    })

    function handlePostEspec()  {
        
        mutate(espec);   
        setEspec({...espec, tipo:"", valorBase:""})



    }
  return (
    <Modal
      visible={modalEspec}
      onDismiss={hideEspec}
      contentContainerStyle={styleModalEspec}
    >
      <View style={styles.modalBodyDentista}>
{/* 
        {sucesso == "vazio" &&(<></>)}
        {sucesso ? <SuccessResponse /> : <ErrorResponse /> } */}

        <Text style={[globalStyle.subTitulo, {alignSelf: 'center'}]}>Nova Especialidade</Text>
      <TextInput
        mode="outlined"
        label="Especialidade"
        left={
          <TextInput.Icon
            icon="lead-pencil"
            color={Colors.secondary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.secondary}
        outlineColor={Colors.secondary}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={Colors.secondary}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
          marginBottom: 10,
        }}
        textColor={Colors.secondary}
        value={espec.tipo}
        labelColor={Colors.secondary}
        onChangeText={(e) => setEspec({ ...espec, tipo: e })}
      />
      <TextInput
        mode="outlined"
        label="Valor"
        left={
          <TextInput.Icon
            icon="lead-pencil"
            color={Colors.secondary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.secondary}
        outlineColor={Colors.secondary}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={Colors.secondary}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
          marginBottom: 10,
        }}
        textColor={Colors.secondary}
        value={espec.valorBase}
        labelColor={Colors.secondary}
        onChangeText={(e) =>setEspec({ ...espec, valorBase: e })}
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
          onPress={handlePostEspec}
          style={styles.btnModalbtnSelecionar}
          textColor="#FFFFFF"
          icon="check"
          
        >
          Salvar
        </Button>
      </View>
    </Modal>

  );
};

export default ModalNovaEspec;

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
  acao: {marginHorizontal: 20},
  modalBodyDentista: {
    height: 240,
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
