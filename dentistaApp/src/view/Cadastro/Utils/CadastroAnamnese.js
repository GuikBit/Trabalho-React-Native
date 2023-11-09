import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput, Button, Switch } from 'react-native-paper';
import { GlobalContext } from '../../../store/Context';

const CadastroPaciente = ({ subTitulo }) => {
  const cor = '#2070B4';
  // const [paciente, setPaciente] = useState({
  //   problemaSaude: null,
  //   tratamento: null,
  //   medicacao: null,
  //   alergico: null,
  //   hipertenso: false,
  //   gravida: false,
  //   excesso: false,
  //   trauma: false,
  // });

  const [paciente, setPaciente] = useContext(GlobalContext);

  return (
    <View style={styles.cadastro}>
      <Text>{subTitulo}</Text>
      <TextInput
        mode="outlined"
        label="Portador(a) de alguma doença?"
        placeholder="Qual?"
        left={
          <TextInput.Icon
            icon={require('../../../../assets/img/medication.png')}
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
        value={paciente.anamnese.problemaSaude}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            anamnese: { ...paciente.anamnese, problemaSaude: e },
          })
        }
      />
      <TextInput
        mode="outlined"
        label="Em tratamento médico?"
        placeholder="Qual?"
        left={
          <TextInput.Icon
            icon={require('../../../../assets/img/medical-cotton-swab.png')}
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
        value={paciente.anamnese.tratamento}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            anamnese: { ...paciente.anamnese, tratamento: e },
          })
        }
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
        value={paciente.anamnese.remedio}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            anamnese: { ...paciente.anamnese, remedio: e },
          })
        }
      />
      <TextInput
        mode="outlined"
        label="Alérgico(a) a algum tipo de medicamento?"
        placeholder="Qual?"
        left={
          <TextInput.Icon
            icon={require('../../../../assets/img/pill-off.png')}
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
        value={paciente.anamnese.alergia}
        labelColor={cor}
        onChangeText={(e) =>
          setPaciente({
            ...paciente,
            anamnese: { ...paciente.anamnese, alergia: e },
          })
        }
      />
      <View style={styles.switchs}>
        <Switch
          color="#2070B4"
          value={paciente.anamnese.hipertenso}
          onValueChange={() =>
            setPaciente({
              ...paciente,
              anamnese: {
                ...paciente.anamnese,
                hipertenso: !paciente.anamnese.hipertenso,
              },
            })
          }
        />
        <Text style={styles.texto}>Hipertenso?</Text>
      </View>
      <View style={styles.switchs}>
        <Switch
          color="#2070B4"
          value={paciente.anamnese.gravida}
          onValueChange={() =>
            setPaciente({
              ...paciente,
              anamnese: {
                ...paciente.anamnese,
                gravida: !paciente.anamnese.gravida,
              },
            })
          }
        />
        <Text style={styles.texto}>Está Gestante?</Text>
      </View>
      <View style={styles.switchs}>
        <Switch
          color="#2070B4"
          value={paciente.anamnese.traumatismoFace}
          onValueChange={() =>
            setPaciente({
              ...paciente,
              anamnese: {
                ...paciente.anamnese,
                traumatismoFace: !paciente.anamnese.traumatismoFace,
              },
            })
          }
        />
        <Text style={styles.texto}>Possui algum traumatismo na face?</Text>
      </View>
      <View style={styles.switchs}>
        <Switch
          color="#2070B4"
          value={paciente.anamnese.sangramentoExcessivo}
          onValueChange={() =>
            setPaciente({
              ...paciente,
              anamnese: {
                ...paciente.anamnese,
                sangramentoExcessivo: !paciente.anamnese.sangramentoExcessivo,
              },
            })
          }
        />
        <Text style={styles.texto}>Possui sangramento excessivo?</Text>
      </View>
    </View>
  );
};

export default CadastroPaciente;

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
