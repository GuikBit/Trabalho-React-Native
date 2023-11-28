import { createContext, useState } from 'react';
import { cepApi } from '../service/ViaCepApi';

export const GlobalContext = createContext({});

function ContextProvider({ children }) {
  const [paciente, setPaciente] = useState({
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
  const [pacienteConsulta, setPacienteConsulta] = useState({
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
      // ativo: '',
      // dataCadastro:'',
      // id: '',
      // role: ''
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
      especialidade: {},

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
        limpaConsulta,
        pacienteConsulta,
        setPacienteConsulta
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
