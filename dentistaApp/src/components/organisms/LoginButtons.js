import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../global/GlobalStyles';

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
        style={styles.buttons}
        labelStyle={{ fontSize: 20 }}
      >
        Cadastrar
      </Button>

      <Button
        icon="login"
        textColor="white"
        mode="contained"
        onPress={callLogar}
        style={styles.buttons}
        labelStyle={{ fontSize: 20 }}
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
  buttons: {
    backgroundColor: Colors.secondary,
    width: 155,
    // height: 45,
    padding: 5,
    borderRadius: 50,
  },
});
