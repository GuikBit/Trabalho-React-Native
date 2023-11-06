import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Login from './src/view/Login/Login.js';
import Cadastro from './src/view/Cadastro/Cadastro.js';
import Dashboard from './src/view/Dashboard/Dashboard.js';
import Pagamento from './src/view/Pagamento/Pagamento.js';
import NovoPaciente from './src/view/Paciente/NovoPaciente.js';
import NovaConsulta from './src/view/Consulta/NovaConsulta.js';
import NovoDentista from './src/view/Dentista/NovoDentista.js';
import Home from './src/view/Home/Home.js';
import { Colors } from './src/global/GlobalStyles';
import Agendamento from './src/view/Agendamento/Agendamento';
import UserProfile from './src/view/UserProfile/UserProfile';
import { AuthProvider } from './src/Auth/Auth.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <StatusBar />
        <StackNavigator />
      </AuthProvider>
    </View>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Perfil" component={UserProfile} />
        <Stack.Screen name="Agenda" component={Agendamento} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="Novo Paciente" component={NovoPaciente} />
        <Stack.Screen name="Nova Consulta" component={NovaConsulta} />
        <Stack.Screen name="Novo Dentista" component={NovoDentista} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
