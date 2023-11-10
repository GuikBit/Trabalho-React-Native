import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  apiGetAuth,
  apiGetById,
  apiGetByIdAuth,
  apiLogin,
  apiPost,
} from './Api';

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

export function useGetByIdPublic(id) {
  return useQuery({
    queryKey: ['getByIdPublic', id],
    queryFn: async () => {
      return await apiGetById(id);
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

export function useLogin() {
  return useMutation({
    mutationFn: (usuario) => {
      return apiLogin('login', usuario);
    },
  });
}
