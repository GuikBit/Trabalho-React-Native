import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Login from './src/view/Login/Login.js';
import Cadastro from './src/view/Cadastro/Cadastro.js';
import Dashboard from './src/view/Dashboard/Dashboard.js';
import Pagamento from './src/view/Pagamento/Pagamento.js';
import NovaConsulta from './src/view/Consulta/NovaConsulta.js';
import NovoDentista from './src/view/Dentista/NovoDentista.js';
import Home from './src/view/Home/Home.js';
import { AuthProvider } from './src/Auth/Auth.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ListaPaciente from './src/view/Paciente/ListaPaciente.js';
import Paciente from './src/view/Paciente/Paciente.js';
import ListaConsulta from './src/view/Consulta/ListaConsulta.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ListaDentista from './src/view/Dentista/ListaDentista.js';
import ContextProvider from './src/store/Context.js';
import ConsultaDetails from './src/view/Consulta/ConsultaDetails.js';
import CadastroDentista from './src/view/Cadastro/Utils/CadastroDentista.js';
import DentistaDetails from './src/view/Dentista/DentistaDetails.js';
import PacienteDetails from './src/view/Paciente/PacienteDetails.js';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <View style={styles.container}>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <StatusBar />
            <StackNavigator />
          </AuthProvider>
        </QueryClientProvider>
      </ContextProvider>
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />

        <Stack.Screen name="Paciente" component={Paciente} />
        <Stack.Screen name="Lista Pacientes" component={ListaPaciente} />
        <Stack.Screen name="Paciente Details" component={PacienteDetails} />

        <Stack.Screen name="Consulta Details" component={ConsultaDetails} />
        <Stack.Screen name="Nova Consulta" component={NovaConsulta} />
        <Stack.Screen name="Lista Consultas" component={ListaConsulta} />
        <Stack.Screen name="Pagamento" component={Pagamento} />

        <Stack.Screen name="Cadastro Dentista" component={CadastroDentista} />
        <Stack.Screen name="Novo Dentista" component={NovoDentista} />
        <Stack.Screen name="Lista Dentista" component={ListaDentista} />
        <Stack.Screen name="Dentista Details" component={DentistaDetails} />
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
