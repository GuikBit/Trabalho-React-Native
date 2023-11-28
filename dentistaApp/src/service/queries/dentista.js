import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGetAuth, apiGetByIdAuth, apiPostAuth, apiPutAuth } from '../Api';

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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (dentista) => {
      
      const novoDentista =  await apiPostAuth('dentista', dentista);
      queryClient.invalidateQueries('getDentistasAuth');

      return novoDentista;
    },
  });
}

export function usePutDentistaAuth() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (dentista) => {
      
      const novoDentista =  await apiPutAuth('dentista', dentista);
      queryClient.invalidateQueries('getDentistasAuth');

      return novoDentista;
    },
  });
}

