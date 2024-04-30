import { StyleSheet, View, Text } from 'react-native';
import { Card, IconButton, Chip, Icon} from 'react-native-paper';
import React, { useContext } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../global/GlobalStyles';
import { AuthContext } from '../../Auth/Auth';

const CardConsulta = ({ consulta, onPress }) => {
  const { userLogged } = useContext(AuthContext);


  const dataAtual = new Date();
  const dataConsulta = new Date(consulta.dataConsulta)

  formataData = () =>{
    const date = new Date(consulta.dataConsulta);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;    

    return formattedDate;
  }

  formataHora = () => {
    const date = new Date(consulta.dataConsulta);
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const formattedHour = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${formattedHour}:${formattedMinutes}`;
  }

  borda = () => {
    if(!consulta.dataHoraInicioAtendimento && !consulta.dataHoraFimAtendimento &&  !consulta.ausente){
      return styles.agendada;
    }      
    else if (consulta.dataHoraInicioAtendimento && !consulta.dataHoraFimAtendimento){
      return styles.atendendo;
    }
    else if (consulta.dataHoraInicioAtendimento && consulta.dataHoraFimAtendimento){
      return styles.atendida;
    }
    else {
      return styles.ausente
    }
  }
//check-circle-outline clock-outline progress-clock account-off
  return (
    <Card style={[styles.card, borda()]} onPress={onPress}>
      <View style={styles.header}>
        {!consulta.dataHoraInicioAtendimento && !consulta.dataHoraFimAtendimento &&  !consulta.ausente &&
          <Chip 
            icon={() => <Icon source="clock-outline" size={18} color="#f98216" />} 
            mode='outlined' 
            style={[styles.agendada, {backgroundColor: '#fff8ed'}]} 
            textStyle={styles.textAgendada}
            >Agendada</Chip> 
        }
        {consulta.dataHoraInicioAtendimento && !consulta.dataHoraFimAtendimento &&
          <Chip 
            icon={() => <Icon source="progress-clock" size={18} color="#3B82F6" />} 
            mode='outlined'
            style={[styles.atendendo, {backgroundColor: '#eff5ff'}]} 
            textStyle={styles.textAtendendo}
            >Atendendo</Chip> 
        }
        {consulta.dataHoraInicioAtendimento && consulta.dataHoraFimAtendimento &&
          <Chip 
            icon={() => <Icon source="check-circle-outline" size={18} color="#16a34a" />} 
            mode='outlined' 
            style={[styles.atendida, {backgroundColor: '#f0fdf5'}]}  
            textStyle={styles.textAtendida}
            >Atendida</Chip>
        }
        {!consulta.dataHoraInicioAtendimento && !consulta.dataHoraFimAtendimento && consulta.ausente &&
          <Chip
            icon={() => <Icon source="account-off" size={18} color="#dc2626" />}
            mode='outlined' 
            style={[styles.ausente, {backgroundColor: '#fef2f2'}]} 
            textStyle={styles.textAusente}
            >Ausente</Chip>
        }
        
        <Text style={[styles.nome, {color: dataConsulta >= dataAtual? '#529558': '#7a7d7a'}]}>
          <Icon source="calendar" size={20} /> {' '}
          {formataData()}
          {'      '}
          <Icon source="clock-outline" size={20} /> {' '}
          {formataHora()}
        </Text>
       
      </View>

      <View style={styles.body}>
        <View style={styles.infoRow}>
          {userLogged.role !== 'Dentista' && (
            
              <Text style={styles.texto}>
                <Icon source="account" size={20} /> {' '}
                {consulta.dentista.nome}
              </Text>
            
          )}
          <Text style={styles.texto}>
              <Icon source="account" size={20} /> {consulta.paciente.nome}
            </Text> 
        </View>
      </View>
    </Card>
  );
};

export default CardConsulta;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 10,
    borderLeftWidth: 5,
    padding: 8,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#CCCED2',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    marginVertical: 5
  },
  nome: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    height: 50,
  },
  dataNasc: {
    color: '#7a7d7a',
    fontSize: 18,
    marginTop: 5,
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  texto: {
    fontSize: 19,
    color: '#7a7d7a',
  },
  dent: {
    color: '#7a7d7a',
    marginTop: 3,
    fontSize: 18,
  },
  agendada: {    
    borderColor: '#f98216', 
    borderWidth: 0.3,
  },
  textAgendada: {
    color: '#ea640c',    
  },
  atendida: {    
    borderColor: '#16a34a', 
    borderWidth: 1,
  },
  textAtendida: {
    color: '#16a34a',    
  },
  atendendo: {    
    borderColor: '#3B82F6', 
    borderWidth: 1,
  },
  textAtendendo: {
    color: '#3B82F6',    
  },
  ausente: {    
    borderColor: '#dc2626', 
    borderWidth: 1,
  },
  textAusente: {
    color: '#dc2626',    
  },
});
