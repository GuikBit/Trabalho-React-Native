import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet, View } from 'react-native';
import { AuthProvider } from './src/components/Auth/Auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/view/Login/Login.js';
import Cadastro from './src/view/Cadastro/Cadastro.js';
import Dashboard from './src/view/Dashboard/Dashboard.js';
import Pagamento from './src/view/Pagamento/Pagamento.js';
import NovoPaciente from './src/view/Paciente/NovoPaciente.js';
import NovaConsulta from './src/view/Consulta/NovaConsulta.js';
import NovoDentista from './src/view/Dentista/NovoDentista.js';
import Home from './src/view/Home/Home.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Pagamento" component={Pagamento} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="BottomTab" component={TabNavigator} />
        <Stack.Screen name="Novo Paciente" component={NovoPaciente} />
        <Stack.Screen name="Nova Consulta" component={NovaConsulta} />
        <Stack.Screen name="Novo Dentista" component={NovoDentista} />
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
