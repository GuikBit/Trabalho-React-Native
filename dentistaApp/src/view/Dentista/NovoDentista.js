import React, { useContext, useEffect, useState } from 'react';
import globalStyle from '../../../globalStyle';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import { TextInput, Button, Modal, Searchbar } from 'react-native-paper';
import ModalEspec from '../../components/Modal/ModalEspec';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import { usePostDentistaAuth } from '../../service/queries/dentista';
import { GlobalContext } from '../../store/Context';

const NovoDentista = ({ item }) => {
  const cor = '#2070B4';
  const titulo = 'Novo Dentista';
  const [modalEspec, setModalEspec] = useState(false);
  const { mutate } = usePostDentistaAuth();
  const navigation = useNavigation();
  const [pesquisa, setPesquisa] = useState('');
  const { dentista, setDentista } = useContext(GlobalContext);

  useEffect(() => {
    if (item != null) {
      titulo = 'Detalhes Dentista';
    }
  }, []);

  const handleCadastro = () => {
    mutate(dentista);
    navigation.navigate('Lista Dentista');
  };

  const styleModal = {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 15,
    height: 450,
    justifyContent: '',
  };

  return (
    <ScrollView style={globalStyle.container}>
      <LinearGradient
        colors={['#2e86c9', '#24aae3']}
        style={globalStyle.headerPesq}
        start={{ x: 0.3, y: 0.1 }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="chevron-left"
            size={30}
            color="#ECECEC"
            style={{ padding: 8 }}
            onPress={() => {
              navigation.navigate('Lista Dentista');
            }}
          />
          <View style={styles.titulo}>
            <Text style={[globalStyle.titulo]}>{titulo}</Text>
          </View>
        </View>
      </LinearGradient>

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
          value={dentista.telefone}
          labelColor={cor}
          onChangeText={(e) => setDentista({ ...dentista, telefone: e })}
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
          value={dentista.especialidade.tipo}
          labelColor={cor}
          // editable={false}
          onChangeText={(e) => setDentista({ ...dentista, especialidade: e })}
        />
        <LinearGradient
          colors={['#2e86c9', '#24aae3']}
          style={styles.btn}
          start={{ x: 0.3, y: 0.1 }}
        >
          <Button
            icon="content-save"
            textColor="white"
            mode="contained"
            onPress={handleCadastro}
            style={styles.btn}
            labelStyle={{ fontSize: 20 }}
          >
            Salvar Dentista
          </Button>
        </LinearGradient>
      </View>

      {/* <ModalEspec modalEspec={modalEspec} styleModalEspec={styleModal} pesquisa={pesquisa} /> */}
      {/* <Modal visible={modalEspec} contentContainerStyle={styleModal}>
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
      </Modal> */}
    </ScrollView>
  );
};

export default NovoDentista;

const styles = StyleSheet.create({
  cadastro: {
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderColor: '#2070B4',
    borderWidth: 0.3,
    height: 700,
    margin: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
  },
  btn: {
    backgroundColor: 'transparent',
    // backgroundColor: '#2070B4',
    // marginTop: 20,
    borderRadius: 15,
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
  titulo: {
    width: '80%',
    alignItems: 'center',
  },
});
