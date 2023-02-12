import axios from "axios";
const baseURL = 'https://63e22e07ad0093bf29c9980e.mockapi.io/teststore/plp';
// ** Using Axio for Service Call
export const getAllProducts = () => {
  return axios.get(baseURL);
}
