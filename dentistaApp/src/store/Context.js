import { createContext, useState } from 'react';
import { cepApi } from '../service/ViaCepApi';

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
      cep: '',
      numero: '',
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

  const [dentista, setDentista] = useState({
    nome: '',
      email: '',
      login: '',
      senha: '',
      telefone: '',
      cpf: '',
      dataNasc: '',
      cro: '',
      especialidade: {},
      ativo: '',
      dataCadastro:'',
      id: '',
      role: ''
  });

  const [especialidade, setEspecialidade] = useState({
    tipo: "",
    valor: ""
  })

  const [consulta, setConsulta] = useState({
    paciente: {
      nome: '',
      email: '',
      login: '',
      senha: '',
      telefone: '',
      cpf: '',
      dataNasc: '',
    },
    dentista: {
      nome: '',
      email: '',
      login: '',
      senha: '',
      telefone: '',
      cpf: '',
      dataNasc: '',
      cro: '',
      especialidade: ''
    },
    dataConsulta: '',
    horaConsulta: '',
    pagamento: null,
    procedimentoConsulta: '',
    tempoPrevisto: ''
  });

  const limpaPaciente = () => {
    setPaciente({
      ...paciente,
      nome: '',
      email: '',
      login: '',
      senha: '',
      telefone: '',
      cpf: '',
      dataNasc: '',
      responsavel: { nome: '', cpf: '', telefone: '' },
      endereco: {
        rua: '',
        bairro: '',
        cidade: '',
        cep: '',
        numero: '',
        complemento: '',
      },
      anamnese: {
        problemaSaude: '',
        tratamento: '',
        remedio: '',
        alergia: '',
        sangramentoExcessivo: false,
        hipertensao: false,
        gravida: false,
        traumatismoFace: false,
      },
    });
  };


  const  limpaDentista = () => {
    setDentista({...dentista,
      nome: '',
      email: '',
      login: '',
      senha: '',
      telefone: '',
      cpf: '',
      dataNasc: '',
      cro: '',
      especialidade: {},
      ativo: '',
      dataCadastro:'',
      id: '',
      role: ''

    })
  }

  const limpaConsulta = () => {
    setConsulta({...consulta, 
      paciente: {
        nome: '',
        email: '',
        login: '',
        senha: '',
        telefone: '',
        cpf: '',
        dataNasc: '',
      },
      dentista: {
        nome: '',
        email: '',
        login: '',
        senha: '',
        telefone: '',
        cpf: '',
        dataNasc: '',
        cro: '',
        especialidade: ''
      },
      dataConsulta: '',
      horaConsulta: '',
      pagamento: null,
      procedimentoConsulta: '',
      tempoPrevisto: ''})
  }

  const buscaCep = async (cep) => {
    const data = await cepApi(cep);
    setPaciente((current) => {
      const endereco = { ...current.endereco };

      endereco.bairro = data.bairro;
      endereco.cep = data.cep;
      endereco.cidade = data.localidade;
      endereco.complemento = data.complemento;
      endereco.rua = data.logradouro;

      return { ...current, endereco };
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        paciente,
        setPaciente,       
        dentista,
        setDentista,
        buscaCep,
        consulta,
        especialidade, 
        setEspecialidade,
        setConsulta,
        limpaDentista,
        limpaPaciente,
        limpaConsulta
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
