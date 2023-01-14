import axios from 'axios';
import https from 'https';

/* MAGIC para solucionar: UNABLE_TO_GET_ISSUER_CERT_LOCALLY */
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  httpsAgent,
});

export default pokeApi;
