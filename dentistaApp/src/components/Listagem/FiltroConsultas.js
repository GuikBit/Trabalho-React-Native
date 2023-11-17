import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Searchbar, TextInput } from 'react-native-paper';
import globalStyle from '../../../globalStyle';
import { Colors } from '../../global/GlobalStyles';

const FiltroConsultas = ({
  setFiltro,
  buscaUsuario,
  setDataInicio,
  setDataFim,
  dataInicio,
  dataFim,
  showEspec,
  showDentis,
  pesquisa,
}) => {
  return (
    <>
      <Searchbar
        style={styles.search}
        placeholder="Pesquisar"
        value={pesquisa}
        onClearIconPress={() => setFiltro(lista)}
        onChangeText={(e) => buscaUsuario(e)}
      />

      <View style={[globalStyle.rowAround, { marginTop: 5 }]}>
        <TextInput
          mode="outlined"
          label="Data Inicio"
          placeholder="De"
          left={
            <TextInput.Icon
              icon="calendar-today"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={[globalStyle.input, styles.inputConsulta]}
          textColor={Colors.secondary}
          value={dataInicio}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDataInicio(e)}
        />
        <TextInput
          mode="outlined"
          label="Data Fim"
          placeholder="Até"
          left={
            <TextInput.Icon
              icon="calendar"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={[globalStyle.input, styles.inputConsulta]}
          textColor={Colors.secondary}
          value={dataFim}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDataFim(e)}
        />
      </View>
      <View style={[globalStyle.rowAround, { marginTop: 5 }]}>
        <TextInput
          mode="outlined"
          label="Dentista"
          right={
            <TextInput.Icon
              icon="chevron-down"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
              onPress={showDentis}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={[globalStyle.input, styles.inputConsulta]}
          textColor={Colors.secondary}
          value={dataFim}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDataFim(e)}
          editable={false}
        />
        <TextInput
          mode="outlined"
          label="Especialidade"
          right={
            <TextInput.Icon
              icon="chevron-down"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
              onPress={showEspec}
            />
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={globalStyle.inputRadius}
          activeOutlineColor={Colors.secondary}
          style={[globalStyle.input, styles.inputConsulta]}
          textColor={Colors.secondary}
          value={dataFim}
          labelColor={Colors.secondary}
          editable={false}
        />
      </View>
    </>
  );
};

export default FiltroConsultas;

const styles = StyleSheet.create({
  inputConsulta: {
    width: 150,
    fontSize: 18,
    height: 35,
  },
  search: {
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#2070B4',
    marginTop: 15,
  },
});
