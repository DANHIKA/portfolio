// services/locationService.js
import axios from 'axios';

const API_URL = 'https://ipapi.co/json/';

export const fetchUserLocation = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    return null;
  }
};
