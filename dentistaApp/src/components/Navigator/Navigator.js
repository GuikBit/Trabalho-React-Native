import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../view/Login/Login.js';
import Cadastro from '../../view/Cadastro/Cadastro.js';
import NovaConsulta from '../../view/Consulta/NovaConsulta.js';
import Dashboard from '../../view/Dashboard/Dashboard.js';
import NovoDentista from '../../view/Dentista/NovoDentista.js';
import Home from '../../view/Home/Home.js';
import NovoPaciente from '../../view/Paciente/NovoPaciente.js';
import Pagamento from '../../view/Pagamento/Pagamento.js';

const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="Novo Paciente" component={NovoPaciente} />
        <Stack.Screen name="Nova Consulta" component={NovaConsulta} />
        <Stack.Screen name="Novo Dentista" component={NovoDentista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
