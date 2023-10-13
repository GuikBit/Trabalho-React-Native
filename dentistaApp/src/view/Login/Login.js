import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions} from 'react-native'
import { userAuth } from '../../components/Auth/Auth'
import globalStyle from '../../../globalStyle'
import { TextInput, Button} from "react-native-paper";
import Logo from '../../components/Util/Logo';


const width = Dimensions.get('screen').width;
const Login = ({navigation, route}) => {

    const[obj, setObj] = useState({login: 'Admin', senha: '123'});

    const {login} = userAuth();

    const[newUser, setNewuser] = useState();

    useEffect(() => {
        if (route.params?.criado) {
          setNewuser = true;
        }
    }, [route.params?.criado]);


    const callLogar = () => {
        if(login(obj.login, obj.senha)){
            navigation.navigate('Tela Inicial')
        {/* navigation.reset({ index: 0, routes: {nome: 'Tela Inicial'} })*/}
        }
    }
  return (
    <View style={globalStyle.container}>

            <Logo style={styles.topo}/>

            <View style={styles.login}>
               {newUser == true && <View style={globalStyle.successContainer}>
                    <Text style={globalStyle.success}>Usuário cadastrado com sucesso!</Text>
                </View>
                }
                {newUser == false && <View style={globalStyle.dangerContainer}>
                    <Text style={globalStyle.danger}>Não foi possivel salvar o usuário!</Text>
                </View>
                }
                <TextInput
                    mode="outlined"
                    label="Login"
                    placeholder="Digite o seu login"
                    left={<TextInput.Icon icon="account-circle" color="#0CC0DF"/>}
                    selectionColor="#0CC0DF"
                    outlineColor="#0CC0DF"
                    activeOutlineColor="#0CC0DF"
                    activeUnderlineColor="#0CC0DF"
                    style={globalStyle.input}
                    textColor="#0CC0DF"
                    value={obj.login}
                    labelColor="#ae8fba"
                    onChangeText={(e)=> setObj({...obj, login: e})}
                />

                <TextInput
                    mode="outlined"
                    label="Password"
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" color="#0CC0DF"/>}
                    left={<TextInput.Icon icon="key" color="#0CC0DF"/>}
                    selectionColor="#0CC0DF"
                    outlineColor="#0CC0DF"
                    activeOutlineColor="#0CC0DF"
                    style={globalStyle.input}
                    textColor="#0CC0DF"
                    value={obj.senha}
                    onChangeText={(e)=> setObj({...obj, senha: e})}
                    
                />    
            </View>
            
            <View style={styles.acoes}>
                
                <Button icon="account-plus" textColor="#0CC0DF" mode="contained" labelStyle={globalStyle.label} onPress={() => { navigation.navigate('Cadastro') }} style={globalStyle.btn}>
                    Cadastrar
                </Button>
                
                <Button icon="login" textColor="#0CC0DF" mode="contained" labelStyle={globalStyle.label} onPress={ callLogar } style={globalStyle.btn}>
                    Logar
                </Button>
            
            </View>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
    texto: {
        color: 'black',

    }, acoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 100,

    }, login: {
        width: width - 50,
        height: 150,
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 130
    }, label:{
        fontSize: 22
    }
})