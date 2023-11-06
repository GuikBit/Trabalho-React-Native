import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button, Switch } from 'react-native-paper';

const CadastroAnamnese = ({ subTitulo }) => {
  const cor = '#2070B4';
  const [anamnese, setAnam] = useState({
    doenca: null,
    tratamento: null,
    medicacao: null,
    alergico: null,
    hipertenso: false,
    gravida: false,
    excesso: false,
    trauma: false,
  });

  return (
    <View style={styles.cadastro}>
      <Text>{subTitulo}</Text>
      <TextInput
        mode="outlined"
        label="Portador(a) de alguma doença?"
        placeholder="Qual?"
        left={
          <TextInput.Icon
            icon={require('../../../assets/img/medication.png')}
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={styles.input}
        textColor={cor}
        value={anamnese.doenca}
        labelColor={cor}
        onChangeText={(e) => setAnam({ ...anamnese, cep: e })}
      />
      <TextInput
        mode="outlined"
        label="Em tratamento médico?"
        placeholder="Qual?"
        left={
          <TextInput.Icon
            icon={require('../../../assets/img/medical-cotton-swab.png')}
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={styles.input}
        textColor={cor}
        value={anamnese.tratamento}
        labelColor={cor}
        onChangeText={(e) => setAnam({ ...anamnese, cep: e })}
      />
      <TextInput
        mode="outlined"
        label="Em uso de medicação?"
        placeholder="Qual?"
        left={
          <TextInput.Icon icon="pill" color={cor} style={{ paddingTop: 10 }} />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={styles.input}
        textColor={cor}
        value={anamnese.medicacao}
        labelColor={cor}
        onChangeText={(e) => setAnam({ ...anamnese, cep: e })}
      />
      <TextInput
        mode="outlined"
        label="Alérgico(a) a algum tipo de medicamento?"
        placeholder="Qual?"
        left={
          <TextInput.Icon
            icon={require('../../../assets/img/pill-off.png')}
            color={cor}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={cor}
        outlineColor={cor}
        outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
        activeOutlineColor={cor}
        style={styles.input}
        textColor={cor}
        value={anamnese.alergico}
        labelColor={cor}
        onChangeText={(e) => setAnam({ ...anamnese, cep: e })}
      />
      <View style={styles.switchs}>
        <Switch
          color="#2070B4"
          value={anamnese.hipertenso}
          onValueChange={() =>
            setAnam({ ...anamnese, hipertenso: !anamnese.hipertenso })
          }
        />
        <Text style={styles.texto}>Hipertenso?</Text>
      </View>
      <View style={styles.switchs}>
        <Switch
          color="#2070B4"
          value={anamnese.gravida}
          onValueChange={() =>
            setAnam({ ...anamnese, gravida: !anamnese.gravida })
          }
        />
        <Text style={styles.texto}>Está Gestante?</Text>
      </View>
      <View style={styles.switchs}>
        <Switch
          color="#2070B4"
          value={anamnese.trauma}
          onValueChange={() =>
            setAnam({ ...anamnese, trauma: !anamnese.trauma })
          }
        />
        <Text style={styles.texto}>Possui algum traumatismo na face?</Text>
      </View>
      <View style={styles.switchs}>
        <Switch
          color="#2070B4"
          value={anamnese.excesso}
          onValueChange={() =>
            setAnam({ ...anamnese, excesso: !anamnese.excesso })
          }
        />
        <Text style={styles.texto}>Possui sangramento excessivo?</Text>
      </View>
    </View>
  );
};

export default CadastroAnamnese;

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    marginBottom: 15,
    color: 'black',
    top: 15,
  },
  cadastro: {
    height: 600,
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  input: {
    height: 50,
    fontSize: 18,
    backgroundColor: '#FFFFFF', //Cor de Fundo
    color: '#24AAE3', //Azul Claro
  },
  switchs: {
    flexDirection: 'row',
    verticalAlign: 'auto',
  },
  switch: {
    color: '#2070B4',
  },
});
