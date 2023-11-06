import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';

const CadastroEndereco = ({ subTitulo }) => {
  const cor = '#2070B4';

  const [end, setEnd] = useState({
    cep: null,
    cidade: null,
    bairro: null,
    logradouro: null,
    n: null,
    complemento: null,
  });

  return (
    <View style={styles.cadastro}>
      <Text>{subTitulo}</Text>
      <TextInput
        mode="outlined"
        label="CEP"
        left={
          <TextInput.Icon
            icon="map-marker-radius"
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={end.cep}
        labelColor={cor}
        onChangeText={(e) => setEnd({ ...end, cep: e })}
      />
      <TextInput
        mode="outlined"
        label="Cidade"
        left={
          <TextInput.Icon icon="city" color={cor} style={{ paddingTop: 10 }} />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={end.cidade}
        labelColor={cor}
        onChangeText={(e) => setEnd({ ...end, cidade: e })}
      />
      <TextInput
        mode="outlined"
        label="Bairro"
        left={
          <TextInput.Icon icon="map" color={cor} style={{ paddingTop: 10 }} />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={end.bairro}
        labelColor={cor}
        onChangeText={(e) => setEnd({ ...end, bairro: e })}
      />
      <TextInput
        mode="outlined"
        label="Logradouro"
        left={
          <TextInput.Icon
            icon="map-legend"
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={end.logradouro}
        labelColor={cor}
        onChangeText={(e) => setEnd({ ...end, logradouro: e })}
      />
      <TextInput
        mode="outlined"
        label="Numero"
        left={
          <TextInput.Icon
            icon="home-map-marker"
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={end.n}
        labelColor={cor}
        onChangeText={(e) => setEnd({ ...end, n: e })}
      />
      <TextInput
        mode="outlined"
        label="Complemento"
        left={
          <TextInput.Icon
            icon="map-plus"
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={{
          height: 50,
          fontSize: 22,
          backgroundColor: '#FFFFFF',
          color: '#24AAE3',
        }}
        textColor={cor}
        value={end.complemento}
        labelColor={cor}
        onChangeText={(e) => setEnd({ ...end, complemento: e })}
      />
    </View>
  );
};

export default CadastroEndereco;

const styles = StyleSheet.create({
  cadastro: {
    height: 550,
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
});
