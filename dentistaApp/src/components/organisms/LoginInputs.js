import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Colors } from '../../global/GlobalStyles';

const LoginInputs = ({ newUser, setObj, obj }) => {
  return (
    <View style={styles.login}>
      {newUser == true && (
        <Mensagens>Usuario cadastrado com sucesso!</Mensagens>
      )}
      {newUser == false && (
        <Mensagens>Não foi possivel cadastrar o usuario</Mensagens>
      )}
      <TextInput
        mode="outlined"
        label="Login"
        left={
          <TextInput.Icon
            icon="account"
            color={Colors.secondary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.secondary}
        outlineColor={Colors.secondary}
        outlineStyle={globalStyle.inputRadius}
        activeOutlineColor={Colors.secondary}
        style={globalStyle.input}
        textColor={Colors.secondary}
        value={obj.login}
        labelColor={Colors.secondary}
        onChangeText={(e) => setObj({ ...obj, login: e })}
      />

      <TextInput
        mode="outlined"
        label="Senha"
        secureTextEntry
        right={
          <TextInput.Icon
            icon="eye"
            color={Colors.secondary}
            style={{ paddingTop: 10 }}
          />
        }
        left={
          <TextInput.Icon
            icon="key"
            color={Colors.secondary}
            style={{ paddingTop: 10 }}
          />
        }
        selectionColor={Colors.secondary}
        outlineColor={Colors.secondary}
        outlineStyle={globalStyle.inputRadius}
        activeOutlineColor={Colors.secondary}
        style={globalStyle.input}
        textColor={Colors.secondary}
        value={obj.senha}
        onChangeText={(e) => setObj({ ...obj, senha: e })}
      />
    </View>
  );
};

export default LoginInputs;

const styles = StyleSheet.create({
  login: {
    marginHorizontal: 20,
    height: 150,
    justifyContent: 'space-around',
    marginTop: 130,
  },
});
