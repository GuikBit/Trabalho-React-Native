import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Searchbar, TextInput, SegmentedButtons } from 'react-native-paper';
import globalStyle from '../../../globalStyle';
import { Colors } from '../../global/GlobalStyles';
import { GlobalContext } from '../../store/Context';

const FiltroConsultas = ({
  data,
  setFiltro,
  filtrarConsulta,
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

  const { limpaDentista } = useContext(GlobalContext);
  const [value, setValue] = React.useState('');
  const ajustaData = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 8);
    const dataFormatada = limite.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    setDataInicio(dataFormatada)
    
  }

  function limpaData(){
    setDataInicio("")
  }
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
          left={<TextInput.Icon
                  icon="account-tie"
                  color={Colors.secondary}
                  style={{ paddingTop: 10 }}
                  size={19}
                />
              }
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
          left={ dataInicio === "" ?
          <TextInput.Icon icon="calendar-today" color={Colors.secondary} size={19}/>
          :
          <TextInput.Icon icon="close-thick" color={Colors.secondary} size={19} onPress={limpaData}/>
          }
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={{ borderRadius: 50 }}
          activeOutlineColor={Colors.secondary}
          style={styles.searchData}
          textColor={Colors.secondary}
          labelColor={Colors.secondary}
          onChangeText={ajustaData}
          value={dataInicio}
          keyboardType='numeric'
        />
      </View>

      <View style={{marginTop: 10}}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        density= 'small'     
        theme={{ colors: { primary: '#2070B4' } }}
        buttons={[
          {
            value: 'mes',
            label: 'Mes',
            icon: 'calendar-month-outline',
            uncheckedColor: '#193C47',
            checkedColor: '#2070B4',
            style:{
              backgroundColor: '#FFF',
              borderColor: '#FFF',
            },
            showSelectedCheck: true,
          },
          {
            value: 'semana',
            label: 'Semana',
            icon: 'calendar-month-outline',
            uncheckedColor: '#193C47',
            checkedColor: '#2070B4',
            style:{
              backgroundColor: '#FFF',
              borderColor: '#FFF',
            },
            showSelectedCheck: true
          },
          { 
            value: 'dia',
            label: 'Dia',
            icon:'calendar-month-outline',
            uncheckedColor: '#193C47',
            checkedColor:'#2070B4',
            style:{
              backgroundColor: '#FFF',
              borderColor: '#FFF',
            }, 
            showSelectedCheck: true,
          },
        ]}
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
    width: 150,
    height: 40,
    fontSize: 18,
    marginTop: 8,
  },
  botaoGroup: {

  }

});
