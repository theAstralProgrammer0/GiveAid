// src/utils/api.js

import { refreshAccessToken } from './auth';

export const initializeDonation = async (values) => {
  let token = localStorage.getItem('access_token');

  if (!token) {
    token = await refreshAccessToken();
  }

  const response = await fetch('http://127.0.0.1:8000/api/donation/create/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  });

  if (response.status === 401) {
    token = await refreshAccessToken();
    if (!token) {
      return await initializeDonation(values);
    }
  }

  const data = await response.json();
  return data;
};


/* src/services/api.js */
/*
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.giveaid.com', // Update with actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
*/