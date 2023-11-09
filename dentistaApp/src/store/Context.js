import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

function ContextProvider({ children }) {
  const [paciente, setPaciente] = useState({
    nome: null,
    email: null,
    login: null,
    senha: null,
    telefone: null,
    cpf: null,
  });
  // dataNasc: null,
  // responsavel: { nome: null, cpf: null, telefone: null },
  // endereco: {
  //   rua: null,
  //   bairro: null,
  //   cidade: null,
  //   cep: null,
  //   numero: null,
  //   complemento: null,
  // },
  // anamnese: {
  //   problemaSaude: null,
  //   tratamento: null,
  //   remedio: null,
  //   alergia: null,
  //   sangramentoExcessivo: true,
  //   hipertensao: true,
  //   gravida: true,
  //   traumatismoFace: true,
  // },

  const limpaPaciente = () => {
    setPaciente((paciente) => ({
      ...paciente,
      nome: '',
      senha: '',
      email: '',
      login: '',
      telefone: '',
      cpf: '',
    }));
  };

  //   const cadastraPaciente = (obj) => {
  //     const paciente = {
  //       setNome: setPaciente({ ...paciente, nome: obj.nome }),
  //     };

  //     setPaciente({ ...paciente, login: obj.login });
  //     setPaciente({ ...paciente, senha: obj.senha });
  //     setPaciente({ ...paciente, email: obj.email });
  //     setPaciente({ ...paciente, sexo: obj.sexo });
  //     setPaciente({ ...paciente, dataNasc: obj.dataNasc });
  //     setPaciente({ ...paciente, tel: obj.tel });
  //     setPaciente({ ...paciente, responsavel: obj.responsavel.nome });
  //   };

  return (
    <GlobalContext.Provider value={[paciente, setPaciente, limpaPaciente]}>
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
