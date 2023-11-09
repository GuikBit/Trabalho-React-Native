import { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLogin } from '../service/Queries';
import { any } from 'prop-types';
import { apiLogin, apiPost } from '../service/Api';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    login: 'matheus@email.com',
    password: '1234567',
  });

  const login = async (login, senha) => {
    const res = await apiLogin(user);
    // console.log(res);

    const token = res.result;
    // const decodedToken = jwtDecode(token);

    console.log(token);
    // AsyncStorage.setItem();
    // if ((login == 'Admin') & (senha == '123')) {
    //   setUser({
    //     nome: 'Gui',
    //     login: 'Admin',
    //     senha: '123',
    //     token: 'hbvkaebwjdnwajiodamwd',
    //   });
    //   return true;
    // } else {
    //   return false;
    // }
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={[user, setUser, login, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

// import { jwtDecode } from 'jwt-decode';
// // import { apiPost } from '../apis';

// export const estaAutenticado = () => {
//   const token = cookies.get('jwt_auth');

//   return token !== null && token !== undefined;
// };

// export const getToken = () => {
//   const token = cookies.get('jwt_auth');
//   return token;
// };

// export const nomeUsuarioLogado = () => {
//   if (estaAutenticado()) {
//     return localStorage.getItem('usuario_nome');
//   } else {
//     return '';
//   }
// };

// export const permissoesUsuarioLogado = () => {
//   if (estaAutenticado()) {
//     return localStorage.getItem('usuario_permissao');
//   } else {
//     return '';
//   }
// };

// export const usuarioPossuiPermissao = (permissao) => {
//   const permissoes = ';' + localStorage.getItem('usuario_permissao') + ';';

//   return permissoes.includes(';' + permissao + ';');
// };

// export const registrarUsuario = (usuario, senha, admin, sucesso, erro) => {
//   apiPost(
//     'usuario/criar' + (admin ? 'admin' : ''),
//     { Email: usuario, Password: senha },
//     (result) => {
//       const token = result;
//       const decoded = jwtDecode(token);

//       const { unique_name, roles } = decoded;

//       localStorage.setItem('usuario_nome', unique_name);
//       localStorage.setItem('usuario_permissao', roles);

//       cookies.set('jwt_auth', token, {
//         expires: new Date(decoded.exp * 1000), //de segundos para milisegundos
//       });

//       sucesso(unique_name, roles);
//     },
//     erro
//   );
// };

// export const registrarUsuario = (usuario, senha, admin, sucesso, erro) => {
//   apiPost(
//     'usuario/criar' + (admin ? 'admin' : ''),
//     { Email: usuario, Password: senha },
//     (result) => {
//       const token = result;
//       const decoded = jwtDecode(token);

//       const { unique_name, roles } = decoded;

//       localStorage.setItem('usuario_nome', unique_name);
//       localStorage.setItem('usuario_permissao', roles);

//       cookies.set('jwt_auth', token, {
//         expires: new Date(decoded.exp * 1000), //de segundos para milisegundos
//       });

//       sucesso(unique_name, roles);
//     },
//     erro
//   );
// };

// export const login = (usuario, senha, sucesso, erro) => {
//   apiPost(
//     'usuario/login',
//     { Email: usuario, Password: senha },
//     (result) => {
//       const token = result;
//       const decoded = jwtDecode(token);

//       const { unique_name, roles } = decoded;

//       localStorage.setItem('usuario_nome', unique_name);
//       localStorage.setItem('usuario_permissao', roles);

//       cookies.set('jwt_auth', token, {
//         expires: new Date(decoded.exp * 1000), //de segundos para milisegundos
//       });

//       sucesso(unique_name, roles);
//     },
//     erro
//   );
// };

// export const logout = () => {
//   cookies.remove('jwt_auth');
//   localStorage.removeItem('usuario_nome');
//   localStorage.removeItem('usuario_permissao');
// };
