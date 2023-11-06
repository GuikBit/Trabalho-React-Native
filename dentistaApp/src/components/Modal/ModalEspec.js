import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Card } from 'react-native-paper';

const ModalEspec = ({ espec }) => {
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
      <Text style={styles.espec}>{espec.espec}</Text>
    </Card>
  );
};

export default ModalEspec;

const styles = StyleSheet.create({
  card: {
    height: 50,
    width: 'auto',
    marginHorizontal: 50,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 5,
    backgroundColor: '#FFFFFF',
  },
  view: {
    height: 50,
    width: 'auto',
  },
  espec: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: '#7a7d7a',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
