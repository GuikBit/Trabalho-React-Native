import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGetDashBords, apiGetDashBordsDentista } from '../Api';

export function useGetAllDashbords() {
    return useQuery({
      queryKey: ['apiGetDashBords'],
      queryFn: async () => {
        return await apiGetDashBords('dashbord');
      },
      refetchInterval: 10000
    });
  }

export function useGetDashBordsDentista(id) {
    return useQuery({
      queryKey: ['apiGetDashBordsDentista', id],
      queryFn: async () => {
        return await apiGetDashBordsDentista('dashbord', id);
      },
    });
  }