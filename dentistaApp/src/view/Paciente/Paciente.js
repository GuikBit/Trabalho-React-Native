import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyle from '../../../globalStyle';
import PacienteHeader from '../../components/PacienteHeader';
import PacienteBody from '../../components/PacienteBody';

const Paciente = ({ navigation }) => {
  return (
    <View style={globalStyle.container}>
      <PacienteBody navigation={navigation} />
      <PacienteHeader navigation={navigation} />
    </View>
  );
};

export default Paciente;

const styles = StyleSheet.create({});
