import { StyleSheet, View, Text } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../global/GlobalStyles';
import { AuthContext } from '../../Auth/Auth';

const CardConsulta = ({ consulta, onPress }) => {
  const { userLogged } = useContext(AuthContext);

  return (
    <Card style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.nome}>
          <Icon name="calendar" size={20} /> {' '}
          {consulta.dataConsulta}
          {'      '}
          <Icon name="clock-o" size={22} /> {' '}
          {consulta.horaConsulta}
        </Text>

      </View>

      <View style={styles.body}>
        <View style={styles.infoRow}>
          {/* {userLogged.role == 'Paciente' && (
            <Text style={styles.texto}>
              <Icon name="user-md" size={18} /> {consulta.dentista.nome}
            </Text>
          )}
          {userLogged == 'Dentista' && (
            <Text style={styles.texto}>
              <Icon name="user-md" size={18} /> {consulta.paciente.nome}
            </Text>
          )} */}
          {userLogged.role == 'Admin' && (
            <>
              <Text style={styles.texto}>
                <Icon name="user-md" size={20} /> {' '}
                {consulta.dentista.nome}
              </Text>
              <Text style={styles.texto}>
                <Icon name="user" size={20} /> {' '}
                {consulta.paciente.nome}
              </Text>
            </>
          )}
          {/* <Text style={styles.texto}>
            <Icon name="calendar" size={16} /> {consulta.dataNasc}
          </Text> */}
          {/* <Text style={styles.texto}>
            <Icon name="clock-o" size={16} /> 15:00
          </Text> */}
        </View>
      </View>
    </Card>
  );
};

export default CardConsulta;

const styles = StyleSheet.create({
  card: {
    // height: 110,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    borderWidth: 0.3,
    borderColor: '#2070B4',
    borderLeftWidth: 5,
    padding: 8,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#CCCED2',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    marginVertical: 5
  },
  nome: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: '#529558',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    height: 50,
  },
  dataNasc: {
    color: '#7a7d7a',
    fontSize: 18,
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  texto: {
    fontSize: 19,
    color: '#7a7d7a',
  },
  dent: {
    color: '#7a7d7a',
    marginTop: 3,
    fontSize: 18,
  },
});
