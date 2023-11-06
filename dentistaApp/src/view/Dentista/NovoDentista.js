import React, { useState } from 'react';
import globalStyle from '../../../globalStyle';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import { TextInput, Button, Modal, Searchbar } from 'react-native-paper';
import ModalEspec from '../../components/Modal/ModalEspec';

const NovoDentista = ({ navigation }) => {
  const cor = '#2070B4';

  const [modalEspec, setModalEspec] = useState(false);

  const [pesquisa, setPesquisa] = useState('');

  const [dentista, setDentista] = useState({
    nome: null,
    login: null,
    senha: null,
    email: null,
    sexo: null,
    dataNasc: null,
    tel: null,
    cro: null,
    espec: null,
  });

  const styleModal = {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    height: 450,
    justifyContent: '',
  };

  return (
    <View style={globalStyle.container}>
      <HeaderNavigate
        titulo="Novo Dentista"
        onPress={() => {
          navigation.navigate('Lista Dentista');
        }}
      />
      <View style={styles.cadastro}>
        <TextInput
          mode="outlined"
          label="Nome"
          left={
            <TextInput.Icon
              icon="lead-pencil"
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
          value={dentista.nome}
          labelColor={cor}
          onChangeText={(e) => setDentista({ ...dentista, nome: e })}
        />
        <TextInput
          mode="outlined"
          label="Login"
          left={
            <TextInput.Icon
              icon="account"
              color={cor}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={cor}
          outlineColor={cor}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={cor}
          style={globalStyle.input}
          textColor="#2070B4"
          value={dentista.login}
          labelColor="#2070B4"
          onChangeText={(e) => setDentista({ ...dentista, login: e })}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          secureTextEntry
          right={
            <TextInput.Icon
              icon="eye"
              color="#2070B4"
              style={{ paddingTop: 10 }}
            />
          }
          left={
            <TextInput.Icon
              icon="key"
              color="#2070B4"
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={cor}
          outlineColor={cor}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={cor}
          style={globalStyle.input}
          textColor={cor}
          value={dentista.senha}
          labelColor={cor}
          onChangeText={(e) => setDentista({ ...dentista, senha: e })}
        />
        <TextInput
          mode="outlined"
          label="Email"
          left={
            <TextInput.Icon
              icon="email"
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
          value={dentista.email}
          labelColor={cor}
          onChangeText={(e) => setDentista({ ...dentista, email: e })}
        />
        {/* SEXO */}
        <TextInput
          mode="outlined"
          label="Data Nascimento"
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
          value={dentista.dataNasc}
          labelColor={cor}
          onChangeText={(e) => setDentista({ ...dentista, dataNasc: e })}
        />
        <TextInput
          mode="outlined"
          label="Telefone"
          left={
            <TextInput.Icon
              icon="phone"
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
          value={dentista.tel}
          labelColor={cor}
          onChangeText={(e) => setDentista({ ...dentista, tel: e })}
        />
        <TextInput
          mode="outlined"
          label="CRO"
          left={
            <TextInput.Icon
              icon="badge-account-horizontal"
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
          value={dentista.cro}
          labelColor={cor}
          onChangeText={(e) => setDentista({ ...dentista, cro: e })}
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
          value={dentista.espec}
          labelColor={cor}
          editable={false}
        />

        <Button
          icon="content-save"
          textColor="#FFFFFF"
          mode="contained"
          labelStyle={globalStyle.label}
          style={styles.btn}
          onPress={() => {}}
        >
          Salvar Dentista
        </Button>
      </View>

      <Modal visible={modalEspec} contentContainerStyle={styleModal}>
        <Searchbar
          style={globalStyle.search}
          placeholder="Pesquisar Especialidade"
          value={pesquisa}
          onClearIconPress={() => setFiltro(lista)}
          onChangeText={(e) => buscaUsuario(e)}
        />
        <View style={styles.modalBody}>
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
      </Modal>
    </View>
  );
};

export default NovoDentista;

const styles = StyleSheet.create({
  cadastro: {
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderColor: '#2070B4',
    borderWidth: 0.3,
    height: 650,
    margin: 15,
    marginTop: 60,
    padding: 15,
    borderRadius: 15,
  },
  btn: {
    backgroundColor: '#2070B4',
    marginTop: 20,
  },
  modalBody: {
    height: 320,
    padding: 10,
  },
  btnModalbtnSelecionar: {
    backgroundColor: '#2070B4',
  },
  btnModalVoltar: {
    backgroundColor: 'grey',
  },
});
