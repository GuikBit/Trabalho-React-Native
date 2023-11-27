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
    backgroundColor: '#2070B4', //Cor de Fundo
    borderWidth: 1,
    width: 155,
    borderRadius: 50,
    justifyContent: 'center'
  },
  btnList: {
    backgroundColor: '#2070B4', //Cor de Fundo
    width: 10,
    height: 30,
    borderRadius: 50,
  },
  input: {
    height: 50,
    fontSize: 22,
    backgroundColor: '#FFFFFF', //Cor de Fundo
    color: '#24AAE3', //Azul Claro
  },
  inputData: {
    width: 160,
    height: 45,
    fontSize: 22,
    backgroundColor: '#FFFFFF', //Cor de Fundo
  },
  label: {
    fontSize: 20,
  },
  labelList: {
    fontSize: 16,
  },
  container: {
    backgroundColor: '#f2f8fd', //Cor de Fundo
    //height: height - 36,
    flex: 1
  },
  inputRadius: {
    borderRadius: 8,
    borderWidth: 0.5,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2070B4',
    marginVertical: 15,
  },
  headerPesq: {
    width: width,
    padding: 15,
    elevation: 15,
    backgroundColor: '#f2f8fd',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  icon: {
    marginLeft: 10,
  },
  flatList: {
    marginTop: 15
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  search: {
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#2070B4',
    marginTop: 15,
  },
  headerNovoUsuario: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: 'black',
  },

});
