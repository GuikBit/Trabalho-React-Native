import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/Auth';
import { useGetPacienteByIdAuth } from '../../service/Queries';

const Perfil = () => {
  const { userLogged } = useContext(AuthContext);

  const id = userLogged.id;

  const { data, isLoading } = useGetPacienteByIdAuth(id);

  if (isLoading) {
    return <Text>Carregando</Text>;
  } else {
    return (
      <View>
        <Text>{data.endereco.rua}</Text>
      </View>
    );
  }
};

export default Perfil;

const styles = StyleSheet.create({});
