// src/utils/api.js

export const initializeDonation = async (values) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/donation/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('Error initializing donation:', error);
    return { status: false, message: error.message };
  }
};

export const fetchCauses = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/causes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('Error fetching causes:', error);
    return [];
  }
};

