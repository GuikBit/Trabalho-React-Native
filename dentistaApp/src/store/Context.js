import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

function ContextProvider({ children }) {
  const [paciente, setPaciente] = useState({
    nome: 'Paciente Completo',
    email: 'matheus@email.com',
    login: 'matheus2@email.com',
    senha: '1234567',
    telefone: '543243534',
    cpf: '2134326546',
    dataNasc: '12/04/1996',
    responsavel: { nome: 'teste', cpf: '42345235', telefone: '5245345' },
    endereco: {
      rua: 'teste',
      bairro: 'teste',
      cidade: 'teste',
      cep: '43534645',
      numero: 'teste',
      complemento: 'teste',
    },
    anamnese: {
      problemaSaude: 'teste',
      tratamento: 'teste',
      remedio: 'teste',
      alergia: 'teste',
      sangramentoExcessivo: true,
      hipertensao: true,
      gravida: true,
      traumatismoFace: true,
    },
  });

  const limpaPaciente = () => {
    setPaciente((paciente) => ({
      ...paciente,
      nome: '',
      senha: '',
      email: '',
      login: '',
      telefone: '',
      cpf: '',
      dataNasc: '',
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
