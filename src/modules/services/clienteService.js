import  axios from 'axios'
import { URL_MOCKAPI } from '../../environments/environments'

// crear un cliente en MOCKAPI
export const postCliente = async (objCliente) => {
    const rpta = await axios.post(
      `${URL_MOCKAPI}/cliente`,
      JSON.stringify(objCliente),
      {
        headers: {
          "Content-type": "application/json"
        }
      }
    );
    return rpta;
  };
// autentificacion del login BACKEND del profesor

// export const postLogin = async (objLogin) => {
//   const rpta = await axios.post(
//     `${URL_BACKEND}/login`,
//     JSON.stringify(objLogin), {
//     headers: {
//       "Content-type": "application/json"
//     }
//   });
//   console.log(rpta);
//   return rpta;
// }

export const getClientes = async () => {
  const rpta = await axios.get(`${URL_MOCKAPI}/cliente`);
  return rpta;
};

