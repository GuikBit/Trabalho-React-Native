import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalDentista = ({ dentista }) => {
  const [clicou, setClicou] = useState(false);

  return (
    <Card
      style={[
        styles.card,
        {
          borderColor: clicou ? '#1d9c06' : 'grey',
          borderWidth: clicou ? 1 : 0.3,
        },
      ]}
      onPress={() => {
        setClicou(!clicou);
      }}
    >
      <View style={styles.header}>
        <Text style={styles.nome}>{dentista.nome}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.infoRow}>
          <Text style={styles.texto}>
            <Icon name="calendar" size={16} cor="#d1d1d1" /> {dentista.CRO}
          </Text>
          <Text style={styles.texto}>
            <Icon name="address-card-o" size={16} cor="#d1d1d1" />{' '}
            {dentista.dataNasc}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default ModalDentista;

const styles = StyleSheet.create({
  card: {
    height: 80,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 10,
    borderWidth: 0.3,
    backgroundColor: '#FFFFFF',
    //borderColor:'#db736e',
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
    marginTop: 10,
    justifyContent: 'space-around',
  },
  texto: {
    fontSize: 18,
    color: '#7a7d7a',
  },
});
