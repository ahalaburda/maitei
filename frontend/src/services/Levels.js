import http from './http-common';

class Levels {
  /**
   * Get all Levels
   * @returns {Promise<AxiosResponse<Levels>>}
   */
  getLevels() {
    return http.get('/levels/?format=json');
  }

  /**
   * Get all Levels without pagination
   */
  getAllLevels() {
    return http.get('/levels_all/?format=json');
  }
}

export default new Levels();