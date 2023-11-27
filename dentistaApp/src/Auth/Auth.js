import { createContext, useState } from 'react';
import { apiLogin, apiPost } from '../service/Api';
import { getToken, setToken } from '../hooks/TokenStore';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    login: 'testeAdmin',
    password: '123',
  });

  const [msg, setMsg] = useState('');

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
      if( res !== undefined){
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
       
      }
      else{
        setMsg("Login ou senha invalida.")
        return false;
      }
      
      return true;

    
  };

    const logout = async () => {
      
      setUserLogged({
        ...userLogged,
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

      setUser({...user, login:'', password:''})

      if(userLogged.id === ''){
        return true;
      }else{
        return false;
      }
      
    };

  return (
    <AuthContext.Provider value={{ user, setUser, login, userLogged, msg, setMsg, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
