import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

//azul claro: '#24AAE3'
//azul escuro: '#2070B4'
//Cor de Fundo: '#16181b'

export default StyleSheet.create({
  navigation: {
    headerMode: '',
  },
  width: {
    width: width,
  },
  height: {
    height: height,
  },
  btn: {
    backgroundColor: '#24AAE3', //Cor de Fundo
    borderColor: '#24AAE3', //Azul Claro
    borderWidth: 1,
    width: 155,
    height: 45,
    paddingTop: 5,
    borderRadius: 50,
  },
  input: {
    height: 50,
    fontSize: 22,
    backgroundColor: 'white', //Cor de Fundo 16181b
    color: '#24AAE3', //Azul Claro
  },
  label: {
    fontSize: 20,
  },
  container: {
    backgroundColor: '#e6eef2', //Cor de Fundo 16181b
    height: height,
  },
  inputRadius: {
    borderRadius: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#24AAE3',
    marginVertical: 15,
  },
  subTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 15,
  },
});
