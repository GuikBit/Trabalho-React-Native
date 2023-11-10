import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  apiGetAuth,
  apiGetById,
  apiGetByIdAuth,
  apiLogin,
  apiPost,
  apiPostAuth,
} from './Api';

export function useGetDentistasAuth() {
  return useQuery({
    queryKey: ['getDentistasAuth'],
    queryFn: async () => {
      return await apiGetAuth('dentista');
    },
  });
}

export function useGetDentistaByIdAuth(id) {
  return useQuery({
    queryKey: ['getDentistaByIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('dentista', id);
    },
  });
}

export function usePostDentistaAuth() {
  return useMutation({
    mutationFn: async (dentista) => {
      return await apiPostAuth('dentista', dentista);
    },
  });
}

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
