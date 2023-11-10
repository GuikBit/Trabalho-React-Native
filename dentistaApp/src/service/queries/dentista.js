import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGetAuth, apiGetByIdAuth, apiPostAuth } from '../Api';

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
