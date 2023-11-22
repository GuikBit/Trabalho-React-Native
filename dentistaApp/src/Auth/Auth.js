import { createContext, useState } from 'react';
import { apiLogin, apiPost } from '../service/Api';
import { getToken, setToken } from '../hooks/TokenStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    login: 'testeAdmin',
    password: '123',
  });

  const [userLogged, setUserLogged] = useState({
    id: '',
    nome: '',
    email: '',
    login: '',
    role: '',
    cpf: '',
    dataNasc: '',
    telefone: '',
    ativo: '',
  });

  const login = async () => {
    const res = await apiLogin(user);

    const token = res.result;
    setToken(token);

    setUserLogged({
      ...userLogged,
      id: res.usuario.id,
      nome: res.usuario.nome,
      email: res.usuario.email,
      login: res.usuario.login,
      role: res.usuario.role,
      cpf: res.usuario.cpf,
      dataNasc: res.usuario.dataNasc,
      telefone: res.usuario.telefone,
      ativo: res.usuario.ativo,
    });
  };

  //   const logout = () => {
  //     setUser(null);
  //   };

  return (
    <AuthContext.Provider value={{ user, setUser, login, userLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
