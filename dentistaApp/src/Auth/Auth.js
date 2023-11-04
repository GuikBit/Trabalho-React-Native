import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const userAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) =>{

    const [user, setUser] = useState(null);

    const login = (login, senha)=>{
        if(login == 'Admin' & senha == '123'){
            setUser({nome: 'Gui',
                     login: 'Admin',
                     senha: '123',
                     token: 'hbvkaebwjdnwajiodamwd' 
            })
            return true;
        }else{
            return false;
        }
    }
    const logout = ()=>{
        setUser(null)
    }
    

    return (
        <AuthContext.Provider value={{user, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}