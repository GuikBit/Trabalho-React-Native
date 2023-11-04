import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginButtons = ({ callLogar }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.acoes}>
      <Button
        icon="account-plus"
        textColor="white"
        mode="contained"
        onPress={() => {
          navigation.navigate('Cadastro');
        }}
      >
        Cadastrar
      </Button>

      <Button
        icon="login"
        textColor="white"
        mode="contained"
        onPress={callLogar}
      >
        Logar
      </Button>
    </View>
  );
};

export default LoginButtons;

const styles = StyleSheet.create({
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 100,
  },
});
