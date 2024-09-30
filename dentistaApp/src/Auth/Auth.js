import { createContext, useState } from 'react';
import { apiLogin, apiPost } from '../service/Api';
import { getToken, setToken } from '../hooks/TokenStore';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    login: 'admin',
    password: '123',
  });


  const [userLogged, setUserLogged] = useState({
    id: null,
    nome: null,
    email: null,
    login: null,
    role: null,
    cpf: null,
    dataNascimento: null,
    dataCadastro: null,
    telefone: null,
    ativo: null,
    fotoCadastro: null,
    role: null,
    numPasta: null,
    organizacaoId: null,
    consultas: {},
    responsavelId: {},
    anamneseId: {},
    enderecoId: {},
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
