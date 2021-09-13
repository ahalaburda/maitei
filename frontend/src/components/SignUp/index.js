import React from "react";
import {Link} from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-flex">
              <div className="flex-grow-1 bg-register-image" />
            </div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h4 className="text-dark mb-4">Registrarse</h4>
                </div>
                <form className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Nombre" name="first_name" />
                    </div>
                    <div className="col-sm-6">
                      <input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Apellido" name="last_name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email" name="email" />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Contraseña" name="password" />
                    </div>
                    <div className="col-sm-6">
                      <input className="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repetir Contraseña" name="password_repeat" />
                    </div>
                  </div>
                  <button className="btn btn-primary btn-block text-white btn-user" type="submit" > Crear cuenta </button>
                  <hr />
                </form>
                <div className="text-center">
                  {/* <a className="small" href="forgot-password.html"> Olvido su contraseña? </a> */}
                </div>
                <div className="text-center">
                  <Link className="small" to="/login">Ya tienes una cuenta? Inicia Sesion! </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
