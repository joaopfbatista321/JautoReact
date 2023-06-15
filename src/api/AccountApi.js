import axios from 'axios';
import { useHistory } from 'react-router-dom';

const BASE_URL = '/api/AccountApi';

const AccountApi = {
  login: async (Email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        Email,
        password
      });
     

      return response.data;
    } catch (error) {
      //trocar isto
      console.error('Error logging in:', error);
      throw error;
    }
  },
  

  register: async (Email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        Email,
        password
      });

      return response.data;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  }
};


export default AccountApi;
