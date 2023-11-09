import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiAuthGet, apiGet, apiGetPorId, apiPost } from './Api';
import axios from 'axios';

// export const useGetPacienteAuth = () => {
//   useQuery({
//     queryKey: ['getPacientesAuth'],
//     queryFn: () => apiAuthGet('paciente'),
//   });
// };

// export const useGetPacienteByIdAuth = (pacienteId) => {
//   useQuery({
//     queryKey: ['getPacienteByIdAuth', pacienteId],
//     queryFn: () => apiAuthGet(`paciente/${pacienteId}`),
//   });
// };

// export const useGetById = (id) => {
//   useQuery({
//     queryKey: ['getByIdPublic', id],
//     queryFn: () => apiGetPorId(`home/${id}`),
//   });
// };

export function useGetById(id) {
  return useQuery({
    queryKey: ['getByIdPublic', id],
    queryFn: async () => {
      return await apiGetPorId(id);
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
