import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import globalStyle from '../../../globalStyle';
import PacienteHeader from '../../components/PacienteHeader';
import PacienteBody from '../../components/PacienteBody';
import { useEffect } from 'react';
import { useGetPacienteByIdAuth } from '../../service/queries/paciente';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

const PacienteDetails = ({navigation, route}) => {
  const paciente = route.params?.item || {};

  // const { data, isLoading } = useGetPacienteByIdAuth(route.params.id);

  return (
    <View style={globalStyle.container}>
     
       <>
        <PacienteHeader navigation={navigation} paciente={paciente}/>
        <PacienteBody navigation={navigation} paciente={paciente} />
       </>

    </View>
  );
};

export default PacienteDetails;

const styles = StyleSheet.create({});
