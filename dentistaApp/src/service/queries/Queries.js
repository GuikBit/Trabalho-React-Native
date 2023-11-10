import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  apiGetAuth,
  apiGetById,
  apiGetByIdAuth,
  apiLogin,
  apiPost,
  apiPostAuth,
} from '../Api';

export function useGetByIdPublic(id) {
  return useQuery({
    queryKey: ['getByIdPublic', id],
    queryFn: async () => {
      return await apiGetById(id);
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
