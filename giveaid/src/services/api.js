/* src/services/api.js */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.giveaid.com', // Update with actual base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

