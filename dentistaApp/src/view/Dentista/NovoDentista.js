import React, { useContext, useState } from 'react';
import globalStyle from '../../../globalStyle';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import ModalEspec from '../../components/Modal/ModalEspec';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import { usePostDentistaAuth, usePutDentistaAuth } from '../../service/queries/dentista';
import { GlobalContext } from '../../store/Context';
import { Colors } from '../../global/GlobalStyles';
import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ErrorResponse from '../../components/response/ErrorResponse';

const NovoDentista = ({ item, paramsDentista }) => {

  const [modalEspec, setModalEspec] = useState(false);
  const hideEspec = () => setModalEspec(false);

  const { mutate } = usePostDentistaAuth();
  const navigation = useNavigation();

  const [pesquisa, setPesquisa] = useState('');
  const { dentista, setDentista, limpaDentista } = useContext(GlobalContext);
  const [editavel, setEditavel] = useState(true);
  const [teste, setTeste] = useState(true);
  const [error, setError] = useState(false);

 useFocusEffect(
   useCallback(() => {
    console.log(paramsDentista)
    if (paramsDentista !== undefined) {
      
      setDentista({...dentista, 
        id: paramsDentista.id,
        nome: paramsDentista.nome,
        email: paramsDentista.email,
        login: paramsDentista.login,
        senha: paramsDentista.senha,
        telefone: paramsDentista.telefone,
        cpf: paramsDentista.cpf,
        dataNasc: paramsDentista.dataNasc,
       // cro: paramsDentista.cro,
        especialidade: paramsDentista.especialidade
      });
      setEditavel(false)
    }

    return () => {        
      limpaDentista()

    };
    }, [])

  );
  function dadosTeste(){
    setDentista({...dentista,
      nome: 'Dr Matheus',
      email: 'matheus@email.com',
      login: 'dentista@email.com',
      senha: '123',
      telefone: '(32) 98877-6655',
      cpf: '111.222.333-00',
      dataNasc: '12/04/1996',
      cro: '432143',
      especialidade: {},
    })
    setTeste(!teste)
  }
  function validaDados(){
    setError(false)
    if(dentista.nome == '' || dentista.login == '' || dentista.senha == '' || dentista.cpf == '' ){
      setError(true)
      return false
    }else{
      return true
    }
    
  }

  const handleCadastro = async () => {
    try{
     
      if(validaDados()){
        console.log("entrei")
        mutate(dentista)  
        navigation.navigate('Lista Dentista', {novo: true});
      }
    
    }catch(error){
      console.log(error)
    }    
  };
  const ajustaData = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 8);
    const dataFormatada = limite.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    setDentista({ ...dentista, dataNasc: dataFormatada })
  }

  const ajustaTelefone = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 11);
    const telFormatado = limite.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    setDentista({ ...dentista, telefone: telFormatado })
  }
  const ajustaCPF = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 11);
    const cpfFormatado = limite.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    setDentista({ ...dentista, cpf: cpfFormatado })
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
            <Text style={[globalStyle.titulo]}>{editavel? "Novo Dentista": "Detalhes Dentista" }</Text>
          </View>
        </View>
        
      </LinearGradient>
      
   
      <View style={{margin: 10, height: 40, marginHorizontal: 20}}>
            
          {error && 
            <ErrorResponse titulo="Campos vazios foram identificados" onPress={()=> {setError(false)}} cor="#f44336"/> 
          }
        </View>
      <View style={styles.cadastro}>
        
      {/* {teste? 
        <IconButton
          icon="account-cog"
          iconColor={Colors.secondary}
          size={20}
          onPress={dadosTeste}          
        />
        :
        <IconButton
          icon="delete-empty"
          iconColor={Colors.secondary}
          size={20}
          onPress={()=>{limpaDentista(); setTeste(!teste)}}          
        />
        } */}
        
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
          editable={editavel}
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
          editable={editavel}
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
        <TextInput
          mode="outlined"
          label="CPF"
          left={
            <TextInput.Icon
              icon="badge-account-horizontal"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          keyboardType='numeric'
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.cpf}
          labelColor={Colors.secondary}
          onChangeText={ajustaCPF}
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
          keyboardType='numeric'
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.dataNasc}
          labelColor={Colors.secondary}
          onChangeText={ajustaData}
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
          keyboardType='numeric'
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={globalStyle.input}
          textColor={Colors.secondary}
          value={dentista.telefone}
          labelColor={Colors.secondary}
          onChangeText={ajustaTelefone}
        />
        {/* <TextInput
          mode="outlined"
          label="CRO"
          left={
            <TextInput.Icon
              icon="badge-account"
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
        /> */}
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
    height: 800,
    margin: 15,
    marginTop: 0,
    padding: 15,
    borderRadius: 15,
    marginBottom: 50
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
