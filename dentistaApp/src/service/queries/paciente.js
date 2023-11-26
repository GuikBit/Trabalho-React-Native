import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGetAuth, apiGetByIdAuth, apiPost, apiGetConsultasByPacienteIdAuth } from '../Api';

export function useGetPacientesAuth() {
  return useQuery({
    queryKey: ['getPacientesAuth'],
    queryFn: async () => {
      return await apiGetAuth('paciente');
    },
  });
}

export function useGetPacienteByIdAuth(id) {
  return useQuery({
    queryKey: ['getPacienteByIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('paciente', id);
    },
    
  });
}


export function usePostPaciente() {
  return useMutation({
    mutationFn: async (paciente) => {
      return apiPost('paciente', paciente);
    },
  });
}

export function useGetConsultaByPacienteIdAuth(id) {
  console.log("Cheguei aqui")
  return useQuery({
    queryKey: ['getConsultaByPacienteIdAuth', id],
    queryFn: async () => {
      return await apiGetConsultasByPacienteIdAuth('paciente/consultas', id);
    },
  });
}
// export function useGetConsultaByPacienteIdAuth(pacienteId) {
//   return useQuery({
//     queryKey: ['getConsultaByPacienteIdAuth', pacienteId],
//     queryFn: async () => {
//       try {
//         const data = await apiGetConsultasByPacienteIdAuth('paciente/consultas', pacienteId);
//         console.log(data) 
//         return data;
//       } catch (error) {
//         return { error: 'Erro ao obter dados da consulta' };
//       }
//     },
//   });
// }


