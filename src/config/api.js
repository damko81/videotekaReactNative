import axios from 'axios';

const local='http://localhost:8080';
const ip='http://192.168.1.14:8080';

export const api = axios.create({
  baseURL: ip,
  headers: {
    'Content-Type': 'application/json',
    // Add any other custom headers as needed
  },
});