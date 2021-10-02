import http from './http-common';

class Chapters {
  /**
   * Get all Chapters by Level ID
   * @param id Level ID
   * @returns {Promise<AxiosResponse<Chapters>>}
   */
  getChapters(id) {
    return http.get(`chapters/?format=json&level=${id}`);
  }
}

export default new Chapters();