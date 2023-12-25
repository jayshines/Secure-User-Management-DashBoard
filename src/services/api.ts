import axios from 'axios';
import { ApiResponse } from '../types/apiTypes';

const BASE_URL = 'https://reqres.in/api';

export const signIn = async (credentials: { email: string; password: string }): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      console.log('Full response:', response);
      return response.data.token; // Access the nested user data
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error; // Rethrow the error after logging
    }
  };
  

  export const signUp = async (userData: { email: string; password: string }): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      console.log('Sign-up successful. User Data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Sign-up error:', error);
      throw error;
    }
  };

export const fetchData = async (): Promise<ApiResponse> => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};
