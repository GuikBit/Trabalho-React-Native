import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import globalStyle from '../../globalStyle';
import { Searchbar, TextInput, FAB } from 'react-native-paper';
import lista from '../Mock/lista';
import CardConsulta from './Cards/CardConsulta';
import { useGetConsultaByPacienteIdAuth, useGetPacienteByIdAuth, useGetPacientesAuth } from '../service/queries/paciente';
import { AuthContext } from '../Auth/Auth';
import { Colors } from '../global/GlobalStyles';
import LoadingOverlay from './LoadingOverlay/LoadingOverlay';
import { useGetDentistaByIdAuth } from '../service/queries/dentista';
import { useGetConsultaByIdAuth } from '../service/queries/consulta';

const UserBody = ({ navigation, paciente }) => {

  // const [pesquisa, setPesquisa] = useState('');
  const [filtro, setFiltro] = useState([]);
  const { userLogged } = useContext(AuthContext);
  const { data, isLoading } =  useGetConsultaByIdAuth( 7 );

console.log(data)
  // function buscaUsuario(e) {
  //   setPesquisa(e);

  //   if (e === '') {
  //     setFiltro(data);
  //   } else {
  //     const pesquisa = e.toLowerCase();
  //     const filtro = data.filter((user) => {
  //       const dataConsulta = user.dataNasc.toLowerCase();
  //       return dataConsulta.includes(pesquisa);
  //     });
  //     setFiltro(filtro);
  //   }
  // }
  return (
    <View style={styles.body}>
      <View style={styles.boxTitulo}>
        <Text style={styles.titulo}>Histórico de Consultas</Text>

        <TextInput
          mode="outlined"
          left={<TextInput.Icon icon="calendar-today" color={Colors.secondary} />}
          selectionColor={Colors.secondary}
          outlineColor={Colors.secondary}
          outlineStyle={{ borderRadius: 50 }}
          activeOutlineColor={Colors.secondary}
          style={styles.search}
          textColor={Colors.secondary}
          labelColor={Colors.secondary}
          onChangeText={(e) => setDataInicio(e)}
        />
      </View>
      {isLoading &&  <LoadingOverlay/>}
      {!isLoading && (
        data === undefined? 
          <Text>Nem uma consulta entrada</Text>
          :
          <FlatList
          style={styles.flatList}
          data={filtro.length == 0 ? data : filtro}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardConsulta
              consulta={item}
              onPress={() => {
                navigation.navigate('Consulta', { id: item.id });
              }}
            />
          )}
        />
        
        
      )}
      <FAB
        icon="account-details"
        color="#FFFFFF"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('Cadastro', { id: user.id });
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
    fontSize: 26,
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
    width: 140,
    height: 40,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#2D8ACD',
    color: '#FFFFFF',
  },
});
