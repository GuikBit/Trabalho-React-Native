import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardPaciente = ({ usuario, onPress, dynamicStyle }) => {

  formataData = () =>{
    const date = new Date(usuario.dataNascimento);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;    

    return formattedDate;
  }

  

  return (
    <Card style={[styles.card, usuario.ativo? styles.borderAtivo : styles.borderInativo]} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.nome}>{usuario.nome}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.infoRow}>
          <Text style={styles.texto}>
            <Icon name="calendar" size={16} cor="#d1d1d1" /> {formataData()}
          </Text>
          <Text style={styles.texto}>
            <Icon name="address-card-o" size={16} cor="#d1d1d1" /> {usuario.cpf}
          </Text>
          <Text style={styles.texto}>
            <Icon name="paste" size={16} cor="#d1d1d1" /> {usuario.numPasta}
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default CardPaciente;

const styles = StyleSheet.create({
  card: {
    height: 110,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    borderWidth: 0.3,
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
  borderAtivo: {
    borderLeftColor: '#2070B4',
    borderLeftWidth: 5,
  },
  borderInativo: {
    borderLeftColor: '#EF4444',
    borderLeftWidth: 5,
  },
});
