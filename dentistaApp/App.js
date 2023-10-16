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

const isLogged = true; //booleano que retorna se existe um usuário logado ou n

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
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="NovoPaciente" component={NovoPaciente} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (
          <>
            <Stack.Screen
              name="BottomTab"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Pagamento" component={Pagamento} />
            <Stack.Screen name="Nova Consulta" component={NovaConsulta} />
            <Stack.Screen name="Novo Dentista" component={NovoDentista} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        )}
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
