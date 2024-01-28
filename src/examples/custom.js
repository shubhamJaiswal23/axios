import axios from 'axios';

const authFecth = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json'
  }
});

export default authFecth;
