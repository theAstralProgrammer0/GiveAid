// src/utils/auth.js

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  if (!refreshToken) {
    alert('Session expired. Please log in again.');
    // Redirect to login page or take appropriate action
    return null;
  }

  const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    return data.access_token;
  } else {
    alert('Session expired. Please log in again.');
    // Redirect to login page or take appropriate action
    return null;
  }
};

