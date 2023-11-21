import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../global/GlobalStyles';
import { AuthContext } from '../../Auth/Auth';

const CardConsulta = ({ consulta, onPress }) => {
  const { userLogged } = useContext(AuthContext);

  return (
    <Card style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.nome}>{consulta.dataConsulta}</Text>
        <Text style={styles.nome}>{consulta.horaConsulta}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.infoRow}>
          {userLogged.role == 'Paciente' && (
            <Text style={styles.texto}>
              <Icon name="user-md" size={18} /> {consulta.dentista.nome}
            </Text>
          )}
          {userLogged == 'Dentista' && (
            <Text style={styles.texto}>
              <Icon name="user-md" size={18} /> {consulta.paciente.nome}
            </Text>
          )}
          {userLogged.role == 'Admin' && (
            <>
              <Text style={styles.texto}>
                <Icon name="user-md" size={18} /> {consulta.dentista.nome}
              </Text>
              <Text style={styles.texto}>
                <Icon name="user-md" size={18} /> {consulta.paciente.nome}
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
    marginVertical: 8,
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
    borderBottomColor: '#CCCED2',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  nome: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: Colors.secondary,
    // color: '#7a7d7a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    height: 70,
  },
  dataNasc: {
    color: '#7a7d7a',
    fontSize: 18,
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-around',
  },
  texto: {
    fontSize: 18,
    color: '#7a7d7a',
  },
  dent: {
    color: '#7a7d7a',
    marginTop: 3,
    fontSize: 18,
  },
});
