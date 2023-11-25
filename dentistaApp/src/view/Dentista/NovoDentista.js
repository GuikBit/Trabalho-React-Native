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
import { Colors } from '../../global/GlobalStyles';

const NovoDentista = ({ item, paramsDentista }) => {
  const cor = '#2070B4';
  const titulo = 'Novo Dentista';

  const [modalEspec, setModalEspec] = useState(false);
  const hideEspec = () => setModalEspec(false);

  const { mutate } = usePostDentistaAuth();
  const navigation = useNavigation();

  const [pesquisa, setPesquisa] = useState('');
  const { dentista, setDentista } = useContext(GlobalContext);

  useEffect(() => {
    if (item != null) {
      titulo = 'Detalhes Dentista';
    }
    if(paramsDentista !== null){
      //setDentista(...dentista, paramsDentista);
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
    height: 650,
    justifyContent: '',
  };

  return (
    <>
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
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.nome}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDentista({ ...dentista, nome: e })}
        />
        <TextInput
          mode="outlined"
          label="Login"
          left={
            <TextInput.Icon
              icon="account"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
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
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.senha}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDentista({ ...dentista, senha: e })}
        />
        <TextInput
          mode="outlined"
          label="Email"
          left={
            <TextInput.Icon
              icon="email"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.email}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDentista({ ...dentista, email: e })}
        />
        {/* SEXO */}
        <TextInput
          mode="outlined"
          label="Data Nascimento"
          left={
            <TextInput.Icon
              icon="calendar"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.dataNasc}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDentista({ ...dentista, dataNasc: e })}
        />
        <TextInput
          mode="outlined"
          label="Telefone"
          left={
            <TextInput.Icon
              icon="phone"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.telefone}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDentista({ ...dentista, telefone: e })}
        />
        <TextInput
          mode="outlined"
          label="CRO"
          left={
            <TextInput.Icon
              icon="badge-account-horizontal"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.cro}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDentista({ ...dentista, cro: e })}
        />
        <TextInput
          mode="outlined"
          label="Especialidade"
          left={
            <TextInput.Icon
              icon="account"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          right={
            <TextInput.Icon
              icon="chevron-down"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
              onPress={() => {
                setModalEspec(true);
              }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.especialidade.tipo}
          labelColor={Colors.secondary}
           editable={false}
          //onChangeText={(e) => setDentista({ ...dentista, especialidade: e })}
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

       
    </ScrollView>
     <ModalEspec
     hideEspec={hideEspec}
     pesquisa={pesquisa}
     styleModalEspec={styleModal}
     modalEspec={modalEspec}
   /> 
   </>
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
