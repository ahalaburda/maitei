import axios from 'axios';
import authHeader from './auth-service';

const API_URL = 'http://localhost:3000/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'local');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();