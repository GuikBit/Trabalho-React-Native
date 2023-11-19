import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyle from '../../../globalStyle';
import PacienteHeader from '../../components/PacienteHeader';
import PacienteBody from '../../components/PacienteBody';

const Paciente = ({ navigation }) => {
  return (
    <View style={globalStyle.container}>
      <PacienteHeader navigation={navigation} />
      <PacienteBody navigation={navigation} />
      
    </View>
  );
};

export default Paciente;

const styles = StyleSheet.create({});
