import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { GlobalContext } from '../../../store/Context';

const CadastroEndereco = ({ subTitulo }) => {
  const cor = '#2070B4';

  // const [paciente, setPaciente] = useState({
  //   cep: null,
  //   cidade: null,
  //   bairro: null,
  //   logradouro: null,
  //   n: null,
  //   complemento: null,
  // });

  const [paciente, setPaciente] = useContext(GlobalContext);

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
        value={paciente.endereco.cep}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            endereco: { ...paciente.endereco, cep: e },
          })
        }
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
        value={paciente.endereco.cidade}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            endereco: { ...paciente.endereco, cidade: e },
          })
        }
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
        value={paciente.endereco.bairro}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            endereco: { ...paciente.endereco, bairro: e },
          })
        }
      />
      <TextInput
        mode="outlined"
        label="Logradouro"
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
        value={paciente.endereco.rua}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            endereco: { ...paciente.endereco, rua: e },
          })
        }
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
        value={paciente.endereco.numero}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            endereco: { ...paciente.endereco, numero: e },
          })
        }
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
        value={paciente.endereco.complemento}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            endereco: { ...paciente.endereco, complemento: e },
          })
        }
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
