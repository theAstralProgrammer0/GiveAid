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

export const initializeUserDonation = async (values) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/user-donation/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('Error initializing user donation:', error);
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
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('Error fetching causes:', error);
    return [];
  }
};


export const fetchSuccessStories = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/success-stories/', {
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
    console.error('Error fetching success stories:', error);
    return [];
  }
};



export const forgotPassword = async (values) => {
  const response = await fetch('http://127.0.0.1:8000/api/user/forgot-password/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const data = await response.json();
  return data;
};

export const resetPassword = async (values) => {
  const response = await fetch('http://127.0.0.1:8000/api/user/reset-password/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  const data = await response.json();
  return data;
};

export const loginUser = async (values) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
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
    console.error('Error logging in:', error);
    return { status: false, message: error.message };
  }
};

export const signupUser = async (values) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      body: values,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    return { status: false, message: error.message };
  }
};

