import React, {Component} from "react";
import SimpleReactValidator from "simple-react-validator";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    }
    this.checkValid = this.checkValid.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator({
      className: 'text-danger',
      messages: {
        alpha_num_dash: 'Caracter no permitido.',
        required: 'Este campo no puede estar vacío.'}
    })
  }

  /**
   * Show error message if some input are wrong
   * @returns {boolean}
   */
  checkValid = () => {
    if (this.validator.allValid()) return true;
    this.validator.showMessages();
    return false;
  }

  /**
   * set password value on input change
   * @param e Evento del input
   */
  handlePassChange = e => {
    this.setState({password: e.target.value});
  }

  /**
   * Check if data is not null and try login
   * @param e
   */
  handleSubmit = e => {
    if (this.checkValid()) {
      this.props.handleLogin(e, {
        username: this.props.username,
        password: this.state.password
      });
    }
  }
  render() {
    return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div className="flex-grow-1 bg-login-image"/>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-6">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Maitei, bievenido!</h4>
                      </div>
                      <form onSubmit={e => this.handleSubmit(e)} className="user">
                        <div className="form-group">
                        <input
                            name="userInput"
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Usuario."
                            value={this.props.username}
                            onChange={this.props.currentUser}
                          />
                          {this.validator.message('userInput', this.props.username, 'required|alpha_num_dash')}
                        </div>
                        <div className="form-group">
                          <input
                            name="passwordInput"
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Contraseña"
                            value={this.state.password}
                            onChange={this.handlePassChange}
                          />
                          {this.validator.message('passwordInput', this.state.password, 'required')}
                        </div>
                        <button onClick={e => this.handleSubmit(e)} type="submit" className="btn btn-primary btn-user btn-block"> Iniciar Sesi&oacute;n</button>
                        <hr />
                      </form>
                      <div className="text-center">
                        {/* <a className="small" href="forgot-password.html"> Recuperar Contraseña </a> */}
                      </div>
                      <div className="text-center">
                      <Link className="small" to="/signup">Registrarse</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}
}

export default Login;
