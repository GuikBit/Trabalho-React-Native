import axios from 'axios';
// import { estaAutenticado, getToken } from '../auth';

const urlBase = 'https://999a-2804-14c-fc81-9a1f-a4f7-35db-554d-1664.ngrok.io';

// const checarAutenticacao = (navigate, locationUrl) => {
//   if (!estaAutenticado()) {
//     navigate('/login?redirect=' + locationUrl);
//   }
// };

// export const apiAuthGet = (url) => {
//   //   checarAutenticacao(navigate, locationUrl);

//   const instance = axios.create({
//     baseURL: `${urlBase}`,
//     timeout: 1000,
//     headers: { Authorization: 'Bearer ' + getToken() },
//   });

//   instance
//     .get(`/${url}`)
//     .then((res) => {
//       //   sucesso(result.data);
//       return res.data;
//     })
//     .catch((error) => {
//       //   erro(error);
//     });
// };

export async function apiGetAuth(id) {
  const instance = axios.create({
    baseURL: `${urlBase}`,
    timeout: 1000,
    headers: { Authorization: 'Bearer ' + getToken() },
  });

  try {
    const response = await axios.get(`${urlBase}/v1/home/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// export const apiAuthGetPorId = (
//   url,
//   id,
//   sucesso,
//   erro,
//   navigate,
//   locationUrl
// ) => {
//   checarAutenticacao(navigate, locationUrl);

//   const instance = axios.create({
//     baseURL: `${urlBase}`,
//     timeout: 1000,
//     headers: { Authorization: 'Bearer ' + getToken() },
//   });

//   instance
//     .get(`/${url}/${id}`)
//     .then((result) => {
//       sucesso(result.data);
//     })
//     .catch((error) => {
//       console.log(erro);
//       erro(error);
//     });
// };

// export const apiAuthPost = (url, objeto, sucesso, erro) => {
//   checarAutenticacao();

//   const instance = axios.create({
//     baseURL: `${urlBase}`,
//     timeout: 1000,
//     headers: { Authorization: 'Bearer ' + getToken() },
//   });

//   instance
//     .post(`/${url}`, objeto)
//     .then((result) => {
//       sucesso(result.data);
//     })
//     .catch((error) => {
//       erro(error);
//     });
// };

// export const apiAuthPut = (url, id, objeto, sucesso, erro) => {
//   checarAutenticacao();

//   const instance = axios.create({
//     baseURL: `${urlBase}`,
//     timeout: 1000,
//     headers: { Authorization: 'Bearer ' + getToken() },
//   });

//   instance
//     .put(`/${url}/${id}`, objeto)
//     .then(() => {
//       sucesso();
//     })
//     .catch((error) => {
//       erro(error);
//     });
// };

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

export async function apiGetPorId(id) {
  try {
    const response = await axios.get(`${urlBase}/v1/home/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function apiPost(url, obj) {
  try {
    const response = await axios.get(`${urlBase}/v1/home/${url}`, obj);
    // return response.data;
  } catch (error) {
    console.error(error);
  }
}

// export const apiGet = (url, sucesso, erro) => {
//   axios
//     .get(`${urlBase}/${url}`)
//     .then((result) => {
//       sucesso(result.data);
//     })
//     .catch((error) => {
//       erro(error);
//     });
// };

// export const apiPut = (url, id, objeto, sucesso, erro) => {
//   axios
//     .put(`${urlBase}/${url}/${id}`, objeto)
//     .then(() => {
//       sucesso();
//     })
//     .catch((error) => {
//       erro(error);
//     });
// };

// export const apiDelete = (url, id, sucesso, erro) => {
//   axios
//     .delete(`${urlBase}/${url}/${id}`)
//     .then(() => {
//       sucesso();
//     })
//     .catch((error) => {
//       erro(error);
//     });
// };
