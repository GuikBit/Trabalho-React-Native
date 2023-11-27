import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Searchbar, TextInput } from 'react-native-paper';
import globalStyle from '../../../globalStyle';
import { Colors } from '../../global/GlobalStyles';
import { GlobalContext } from '../../store/Context';

const FiltroConsultas = ({
  data,
  setFiltro,
  buscaUsuario,
  setDataInicio,
  setDataFim,
  dataInicio,
  dataFim,
  showEspec,
  showDentis,
  pesquisa,
  setPesquisa,
  nomeDentista,
}) => {

  const { consulta, setConsulta, limpaConsulta, especialidade, setEspecialidade, dentista, setDentista, limpaDentista } = useContext(GlobalContext);
  return (
    <>
      <Searchbar
        style={styles.search}
        placeholder="Pesquisar"
        value={pesquisa}
        onClearIconPress={() => setFiltro(data)}
        onChangeText={(e) => setPesquisa(e)}
        iconColor={Colors.secondary}
      />

      <View style={[globalStyle.rowAround, {marginTop: 10}]}>
      <TextInput
          mode="outlined"
          label="Dentista"
          right={
            (nomeDentista === "" ? 
            <TextInput.Icon
              icon="chevron-down"
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
              onPress={showDentis}
            />
            :
            <TextInput.Icon
              icon="close-thick"
              size={19}
              color={Colors.secondary}
              style={{ paddingTop: 10 }}
              onPress={()=>{limpaDentista()}}
            />)
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={{ borderRadius: 50 }}
          activeOutlineColor={Colors.secondary}
          style={ styles.inputConsulta }
          textColor={Colors.secondary}
          labelColor={Colors.secondary}
          value={nomeDentista}
          editable={false}
        />
         <TextInput
          mode="outlined"
          placeholder='Data'
          left={<TextInput.Icon icon="calendar-today" color={Colors.secondary} />}
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={{ borderRadius: 50 }}
          activeOutlineColor={Colors.secondary}
          style={styles.searchData}
          textColor={Colors.secondary}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDataInicio(e)}
        />
      </View>
    </>
  );
};

export default FiltroConsultas;

const styles = StyleSheet.create({
  inputConsulta: {
    width: 190,
    fontSize: 18,
    height: 40,
    backgroundColor: '#FFFFFF',
  },
  search: {
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#2070B4',
    marginTop: 15,
    
  },
  searchData: {
    backgroundColor: '#FFFFFF',
    width: 140,
    height: 40,
    fontSize: 18,
    marginTop: 6,
  },
});
