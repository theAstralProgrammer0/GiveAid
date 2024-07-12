/* src/services/donations.js */
import api from './api';

export const getDonations = async () => {
  try {
    const response = await api.get('/donations');
    return response.data;
  } catch (error) {
    console.error('Error fetching donations', error);
    throw error;
  }
};

// Define more API service functions as needed

