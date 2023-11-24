import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGetAuth, apiGetByIdAuth, apiPostAuth } from '../Api';

export function useGetEspecAuth() {
  return useQuery({
    queryKey: ['getEspecAuth'],
    queryFn: async () => {
      return await apiGetAuth('especialidade');
    },
  });
}

export function useGetEspecByIdAuth(id) {
  return useQuery({
    queryKey: ['getEspecByIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('especialidade', id);
    },
  });
}

export function usePostEspecAuth() {
  return useMutation({
    mutationFn: async (especialidade) => {
      return await apiPostAuth('especialidade', especialidade);
    },
    
  }, );
}
