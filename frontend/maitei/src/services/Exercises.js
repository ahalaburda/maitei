import http from './http-common';

class Exercise{
  /**
   * Get all exercises details by exercise_id ID
   * @param id exercise_id ID
   * @returns {Promise<AxiosResponse<Chapr>>}
   */
  getExerciseDetails(id) {
    return http.get(`exercise_details/?format=json&exercise_id=${id}`);
  }
  /**
   * Get all exerciseID by chapter
   * @param id chapter_id ID
   * @returns {Promise<AxiosResponse<Chapr>>}
   */
  getExercises(id){
    return http.get(`exercises/?format=json&chapter=${id}`);
  }
}

export default new Exercise();