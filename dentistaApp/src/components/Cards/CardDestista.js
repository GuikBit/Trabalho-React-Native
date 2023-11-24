import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardDentista = ({ usuario, onPress }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.nome}>{usuario.nome}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.infoRow}>
          <Text style={styles.texto}>
            <Icon name="calendar" size={16} cor="#d1d1d1" /> {usuario.dataNasc}
          </Text>
          <Text style={styles.texto}>
            <Icon name="address-card-o" size={16} cor="#d1d1d1" /> {usuario.cpf}
          </Text>
          <Text style={styles.texto}>
            <Icon name="paste" size={16} cor="#d1d1d1" /> {usuario.especialidade.tipo}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default CardDentista;

const styles = StyleSheet.create({
  card: {
    height: 110,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    borderWidth: 0.3,
    borderColor: '#2070B4',
    borderLeftColor: '#2070B4',
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
    color: '#7a7d7a',
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
});
