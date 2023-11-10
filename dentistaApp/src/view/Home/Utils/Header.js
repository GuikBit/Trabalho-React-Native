import React, { useContext } from 'react';
import img from '../../../../assets/img/odontoWhite.png';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import globalStyle from '../../../../globalStyle';
import { AuthContext } from '../../../Auth/Auth';

const width = Dimensions.get('screen').width;

const Header = () => {
  const { userLogged } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.top}>
          <Image source={img} style={styles.img} />

          <Icon
            name="cog"
            size={30}
            color="#ECECEC"
            style={styles.conf}
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.menu}>
        <Text style={styles.nome}>{userLogged.nome}</Text>
        <View style={globalStyle.rowAround}>
          <Text>Próxima Consulta</Text>
          <Text>Consultas em Aberto</Text>
          <Text>Teste</Text>
        </View>
        <View style={globalStyle.rowAround}>
          <Text>Teste</Text>
          <Text>Teste</Text>
          <Text>Teste</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: '#2070B4',
  },
  container: {
    backgroundColor: '#f2f8fd',
    height: 'auto',
  },
  menu: {
    backgroundColor: '#FFFFFF',
    height: 180,
    top: -100,
    marginHorizontal: 15,
    borderRadius: 8,
    elevation: 5,
  },
  top: {
    width: 'auto',
    paddingTop: 3,
    height: ((475 / 950) * width) / 4,
    backgroundColor: '#2070B4',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: width / 5,
    height: ((475 / 950) * width) / 5,
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  conf: {
    margin: 8,
  },
  nome: {
    color: '#2070B4',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10,
  },
});
