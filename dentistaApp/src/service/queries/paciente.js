import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGetAuth, apiGetByIdAuth, apiPost } from '../Api';

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
    mutationFn: (paciente) => {
      return apiPost('paciente', paciente);
    },
  });
}

export function useGetConsultaByPacienteIdAuth(id) {
  return useQuery({
    queryKey: ['getConsultaByPacienteIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('paciente/consultas', id);
    },
  });
}
