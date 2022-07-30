import axios from 'axios';
const BASE_URL = 'http://localhost:3500';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

// interceptors - that will attach jwt tokens and event retry when get a faliure the first time
//interceptors work with jwt tokens to refresh the token if initial request is denied - it work in background
