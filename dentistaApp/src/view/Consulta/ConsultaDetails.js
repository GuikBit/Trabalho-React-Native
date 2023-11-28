import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../../globalStyle';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderNavigate from '../../components/HeaderNavigate';
import { useGetConsultaByIdAuth } from '../../service/queries/consulta';
import { Colors, Dimension } from '../../global/GlobalStyles';
import { TextInput, Button } from 'react-native-paper';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import Icon from 'react-native-vector-icons/FontAwesome';


const ConsultaDetails = ({route}) => {

  const navigation = useNavigation();  
  const  { data, isLoading } = useGetConsultaByIdAuth(route.params?.id)

  return (
    <View style={globalStyle.container}>
      <LinearGradient
        colors={['#2e86c9', '#24aae3']}
        style={globalStyle.headerPesq}
        start={{ x: 0.3, y: 0.1 }}
      >
        <HeaderNavigate titulo="Consulta" onPress={()=>{navigation.goBack()}}/>
        
      </LinearGradient>

      <View style={styles.container}>
        {isLoading? 
          <LoadingOverlay/>
        :
<>
          <View style={styles.row}>
            <View style={styles.widthLabel}>
              <Text style={styles.label}>
                <Icon name="user-md" size={25} color={Colors.secondary}/> {' '}
                Dentista
              </Text>
            </View>
            <View style={styles.widthInput}>
            <Text style={styles.label}>{data.dentista.nome}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.widthLabel}>
              <Text style={styles.label}>
                <Icon name="user" size={25} color={Colors.secondary}/> {' '}
                Paciente
              </Text>
            </View>
            <View style={styles.widthInput}>
              <Text style={styles.label}>{data.paciente.nome}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.widthLabel}>
              <Text style={styles.label}>
                <Icon name="calendar" size={25} color={Colors.secondary}/> {' '}
                Data
              </Text>
            </View>
            <View style={styles.widthInput}>
              <Text style={styles.label}>{data.dataConsulta}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.widthLabel}>
              <Text style={styles.label}>
                <Icon name="clock-o" size={25} color={Colors.secondary}/> {' '}
                Hora
              </Text>
            </View>
            <View style={styles.widthInput}>
            <Text style={styles.label}>{data.horaConsulta}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.widthLabel}>
              <Text style={styles.label}>
                <Icon name="money" size={25} color={Colors.secondary}/> {' '}
                Valor
              </Text>
            </View>
            <View style={styles.widthInput}>
            <Text style={styles.label}>R$ {Math.floor(Math.random() * (300 - 89 + 1)) + 89},00</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={{marginLeft: 15 }}>
            <Text style={styles.label}>
                <Icon name="file-text" size={25} color={Colors.secondary}/> {' '}
                Procedimentos da consulta
              </Text>
            </View>
            <View style={{marginHorizontal: 15, marginTop: 15 }}>
              <TextInput
                mode="outlined"
                selectionColor={Colors.secondary}
                outlineColor={Colors.secondary}
                outlineStyle={{ borderRadius: 8, borderWidth: 0.5 }}
                activeOutlineColor={Colors.secondary}
                style={styles.input}
                textColor={Colors.secondary}
                value={data.procedimentoConsulta}
                labelColor={Colors.secondary}                
                multiline={true}
                onChangeText={(e) => setConsulta({ ...paciente, nome: e })}
              />
            </View>
          </View>
          </>
        }
        
      </View>
      
    </View>
  );
};

export default ConsultaDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#2070B4',
    borderWidth: 0.3,
    height: 500,
    margin: 15,
    paddingVertical: 30,
    marginTop: 90,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between'

  }, row:{
    flexDirection: 'row', 
    margin: 10,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCED2'
   
   
  },
  row2:{    
    margin: 10,
    paddingBottom: 8,
  },

  widthLabel:{
    width: 130,  
    marginLeft: 15  
  },
  widthInput:{
    width: 220
  
  }, label:{
    fontSize: 22,

    justifyContent:'center',

  }, input:{
    height: 40,
    fontSize: 20,
    backgroundColor: '#FFFFFF',

  }
});
