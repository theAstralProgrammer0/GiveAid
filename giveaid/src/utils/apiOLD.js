// src/utils/api.js

export const initializeDonation = async (values) => {
  let token = localStorage.getItem('access_token');

  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch('http://127.0.0.1:8000/api/donation/create/', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(values),
  });

  const data = await response.json();
  return data;
};

