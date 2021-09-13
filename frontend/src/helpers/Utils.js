class Utils {

  /**
   * Determinar si existe o no el token en el local storage.
   * @returns {boolean}
   */
  existToken() {
    return !!sessionStorage.getItem('access_token');
  }

  /**
   * Determinar si existe la configuracion de anho en el session storage.
   * @returns {boolean}
   */
  existYearSetting() {
    return !!sessionStorage.getItem('year_setting')
  }

  /**
   * Obtener el ID del usuario logeado actualmente.
   * @returns {number}
   */
  getCurrentUserId() {
    const token_parts = this.existToken() &&
      JSON.parse(atob(sessionStorage.getItem('access_token').split('.')[1]));
    return token_parts.user_id;
  }

  getCurrentUser() {
    return !!sessionStorage.getItem('username');
  }
 
  selectColor = (estado) => {
    switch (estado) {
      case 1:
        return '#f6c23e';
      case 2:
        return '#1cc88a';
      case 3:
        return '#36b9cc';
      case 4:
        return '#e74a3b';
      case 5:
        return '#858796';
      case 8:
        return '#AF7AC5';
      default:
        return '#5a5c69';
    }
  }
 
  getTheme() {
    return localStorage.getItem('theme')
  }
}

export default new Utils();