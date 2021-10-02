import http from './http-common';

class Users {
  /**
   * Get User by ID
   * @param id User ID
   * @returns {Promise<AxiosResponse<Users>>}
   */
  getUserById(id) {
    return http.get(`users/${id}`);
  }
}

export default new Users();