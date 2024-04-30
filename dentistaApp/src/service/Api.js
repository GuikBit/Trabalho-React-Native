import axios from 'axios';
import { getToken } from '../hooks/TokenStore';

// export const apiAuthDelete = (url, id, sucesso, erro) => {
//   checarAutenticacao();

//   const instance = axios.create({
//     baseURL: `${urlBase}`,
//     timeout: 1000,
//     headers: { Authorization: 'Bearer ' + getToken() },
//   });

//   instance
//     .delete(`/${url}/${id}`)
//     .then(() => {
//       sucesso();
//     })
//     .catch((error) => {
//       erro(error);
//     });
// };

const urlBase =
  'https://0cd3-186-233-43-9.ngrok-free.app';

export async function apiGetAuth(url) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + (await getToken()) },
  });

  try {
    const response = await instance.get(`/v1/${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function apiGetByIdAuth(url, id) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + (await getToken()) },
  });
  try {
    const response = await instance.get(`/v1/${url}/${id}`);
    // console.log(response.status)
    if(response.status === 404){
      return {};
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function apiGetConsultasByPacienteIdAuth(url, id) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + (await getToken()) },
  });

  try {   
    const response = await instance.get(`/v1/${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function apiPostAuth(url, objeto) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + (await getToken()) },
  });

  try {
   const response = await instance.post(`/v1/${url}`, objeto);
    return response.status;
  } catch (error) {
    console.error(error);
  }
}

export async function apiPutAuth(url, id, objeto) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + (await getToken()) },
  });

  try {
    instance.put(`/v1/${url}/${id}`, objeto);
  } catch (error) {
    console.error(error);
  }
}
export async function apiGetDashBords(url) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + (await getToken()) },
  });

  try {
    const response = await instance.get(`/v1/${url}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function apiGetDashBordsDentista(url, id) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + (await getToken()) },
  });

  try {
    const response = await instance.get(`/v1/${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function apiGetById(id) {
  try {
    const response = await axios.get(`${urlBase}/v1/home/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export function apiPost(url, obj) {
  try {
    axios.post(`${urlBase}/v1/home/${url}`, obj);
  } catch (error) {
    console.error(error);
  }
}

export async function apiLogin(obj) {
  var response;
  try {
    response = await axios.post(`${urlBase}/v1/home/login`, obj).catch(response=>{return response});
    return response.data;
  } catch (error) {
    
  }
}
