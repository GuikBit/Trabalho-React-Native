import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';
import { TextInput, Button, Modal, Searchbar } from 'react-native-paper';
import globalStyle from '../../../../globalStyle';
import { GlobalContext } from '../../../store/Context';
import { useNavigation } from '@react-navigation/core';
import { usePostDentistaAuth } from '../../../service/queries/dentista';

const CadastroDentista = ({ subTitulo }) => {
  const cor = '#2070B4';

  const { mutate } = usePostDentistaAuth();
  const navigation = useNavigation();

  const handleCadastro = () => {
    mutate(dentista);
    navigation.navigate('Home');
  };

  const { dentista, setDentista } = useContext(GlobalContext);

  return (
    <ScrollView style={[globalStyle.container, styles.cadastro]}>
      <Text style={globalStyle.subTitulo}>{subTitulo}</Text>
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
          <TextInput.Icon icon="email" color={cor} style={{ paddingTop: 10 }} />
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
        label="CPF"
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
        value={dentista.cpf}
        labelColor={cor}
        onChangeText={(e) => setDentista({ ...dentista, cpf: e })}
      />
      <TextInput
        mode="outlined"
        label="Telefone"
        left={
          <TextInput.Icon icon="phone" color={cor} style={{ paddingTop: 10 }} />
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
        label="Data de Nascimento"
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
        value={dentista.dataNasc}
        labelColor={cor}
        onChangeText={(e) => setDentista({ ...dentista, dataNasc: e })}
      />

      <TextInput
        mode="outlined"
        label="Especialidade"
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
        value={dentista.especialidade.tipo}
        labelColor={cor}
        onChangeText={(e) =>
          setDentista({
            ...dentista,
            especialidade: { ...dentista.especialidade, tipo: e },
          })
        }
      />
      <Button
        icon="content-save"
        textColor="#FFFFFF"
        mode="contained"
        labelStyle={globalStyle.label}
        style={styles.btn}
        onPress={handleCadastro}
      >
        Salvar Dentista
      </Button>
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
        value={dentista.espec}
        labelColor={cor}
        editable={false}
      /> */}

      {/* <Modal visible={modalEspec} contentContainerStyle={styleModal}>
        <Searchbar
          style={globalStyle.search}
          placeholder="Pesquisar Dentista"
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

export default CadastroDentista;

const styles = StyleSheet.create({
  cadastro: {
    // justifyContent: 'space-around',
    padding: 15,
  },
  btn: {
    backgroundColor: '#2070B4',
    marginTop: 20,
  },
  modalBody: {
    height: 510,
    padding: 10,
  },
});
