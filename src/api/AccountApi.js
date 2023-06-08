import axios from 'axios';

const BASE_URL = '/api';

const AccountApi = {
  login: async (userName, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/account/login`, {
        userName,
        password
      });

      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }
};

export default AccountApi;
