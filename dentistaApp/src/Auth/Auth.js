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
