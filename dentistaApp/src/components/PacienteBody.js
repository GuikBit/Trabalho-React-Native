import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import globalStyle from '../../globalStyle';
import { Searchbar, TextInput, FAB, Button, Chip  } from 'react-native-paper';
import lista from '../Mock/lista';
import CardConsulta from './Cards/CardConsulta';
import { useGetConsultaByPacienteIdAuth, useGetPacienteByIdAuth, useGetPacientesAuth } from '../service/queries/paciente';
import { AuthContext } from '../Auth/Auth';
import { Colors } from '../global/GlobalStyles';
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { useGetDentistaByIdAuth } from '../service/queries/dentista';
import { useGetConsultaByIdAuth } from '../service/queries/consulta';

const UserBody = ({ navigation, paciente }) => {

  const [filtro, setFiltro] = useState([]);
  const [dataCons, setDataCons] = useState("");
  const {data, isLoading } = useGetConsultaByPacienteIdAuth(paciente.id)

  const ajustaData = (num) => {    
    const textoLimpo = num.replace(/\D/g, '');
    const limite = textoLimpo.substring(0, 8);
    const dataFormatada = limite.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    setDataCons(dataFormatada)
  }
  function verificaFiltro() {
    if (data) { 
      const consultas = data.filter((c) => {
        if (c.dataConsulta === dataCons) return c;
      });
      setFiltro(consultas.length > 0 ? consultas : []);
    }
  }

  useEffect(()=>{
    
    verificaFiltro()
  }, [])


  return (
 
    <View style={styles.body}>
      {isLoading &&  <LoadingOverlay/> }      
      
      {!isLoading && (
        data === undefined || data.length === 0? 
          <View style={styles.cont}>
            <Text style={styles.novo}>Nem uma consulta cadastrada</Text>
            <Button
            icon="plus-thick"
            textColor="#FFFFFF"
            mode="contained"
            labelStyle={globalStyle.label}
            style={styles.btnConsulta}
            onPress={()=>{navigation.navigate("Nova Consulta")}}
          >
            Nova Consulta
          </Button>
          </View>
          :
          <>
          <View style={styles.boxTitulo}>
            <Text style={styles.titulo}>Histórico de Consultas</Text>

            <TextInput
              mode="outlined"
              left={<TextInput.Icon icon="calendar-today" color={Colors.secondary} size={18} />}
              selectionColor={Colors.secondary}
              outlineColor={Colors.secondary}
              outlineStyle={{ borderRadius: 50 }}
              activeOutlineColor={Colors.secondary}
              labelStyle={globalStyle.label}
              style={styles.search}
              textColor={Colors.secondary}
              labelColor={Colors.secondary}
              value={dataCons}
              
              onChangeText={ajustaData}
              keyboardType='numeric'
            />
          </View>
          <FlatList
          style={styles.flatList}
          data={filtro.length == 0 ? data : filtro}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardConsulta
              consulta={item}
              onPress={() => {
                navigation.navigate('Consulta Details', { id: item.id });
              }}
            />
          )}
          />
          {paciente.ativo? 
          <FAB
            icon="plus-thick"
            color="#FFFFFF"
            style={styles.fabConsulta}
            onPress={() => {
              navigation.navigate('Nova Consulta');
            }}
          />
          :
          <FAB
            icon="account-off"
            color="#FFFFFF"
            style={styles.fabInativo}
            
          />
          }
        </>
        
      )}
      
      <FAB
        icon="account-details"
        color="#FFFFFF"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('Cadastro', { pacienteId: paciente.id });
        }}
      />
      
    </View>
  );
};

export default UserBody;

const styles = StyleSheet.create({
  body: {
    top: -80,
    height: 657,
  },
  titulo: {
    color: '#2070B4',
    fontSize: 22,
    fontWeight: 'bold',
  },
  boxTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    alignItems: 'center',
  },
  search: {
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 35,
    fontSize: 18,
   
  },  fabInativo: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: +70,
    backgroundColor: '#EF4444',
    color: '#EF4444',
  },
  fabConsulta: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: +70,
    backgroundColor: '#2D8ACD',
    color: '#FFFFFF',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#2D8ACD',
    color: '#FFFFFF',
  },
  cont:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: -100

    
  }, novo :{
    color: '#7a7d7a',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30

  }, btnConsulta: {
    margin: 20,
    backgroundColor: '#2D8ACD',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
