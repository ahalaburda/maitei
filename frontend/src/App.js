import React, { Component, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Sidebar from './components/Sidebar/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './components/Home/index'
import Levels from './components/Levels/index'
import Chapters from './components/Chapters/index'
import Exercises from './components/Exercises';
import Profile from './components/Profile/index'
import Login from './components/Login';
import SignUp from './components/SignUp';

import axiosBase from "./services/http-common";
import IdleTimer from './helpers/IdleTimer';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';

/**
 * Funcion para setear el tiempo de cierre de sesion por inactividad
 */
function AutoLogout() {
  const [isTimeout, setIsTimeout] = useState(false);
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 36000, //expire after 10 hours
      onTimeout: () => {
        setIsTimeout(true);
      },
      onExpired: () => {
        setIsTimeout(true);
      }
    });
    return () => {
      //cuando se cumple el tiempo establecido de inactividad se llama a la funcion para cerrar sesion
      timer.cleanUp();
    };
  }, []);
  return <div>{isTimeout}</div>;
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      loggedIn: !!sessionStorage.getItem('access_token'),
      username: sessionStorage.getItem('username') === null ? '' : sessionStorage.getItem('username')
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.currentUser = this.currentUser.bind(this);
    // interceptor para que al momento de que el refresh token expire, borre los datos de la sesion y sea necesario
    // iniciar de nuevo sesion y asi actualizar los tokens de acceso
    axiosBase.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401 && error.response.statusText === "Unauthorized"
          && error.response.data.code === "token_not_valid") {
          const refreshToken = sessionStorage.getItem('refresh_token');
          if (refreshToken) {
            const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
            const now = Math.ceil(Date.now() / 1000);
            if (tokenParts.exp < now) {
              this.setState({ loggedIn: false });
              sessionStorage.clear();
            //   Popups.error('Debes iniciar sesión.');
              toast.error('Debes iniciar sesión.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                progress: undefined,
                });
            }
          }
        }
      }
    );
  }

  /**
   * Solicitar al api el par de tokens de acuerdo a las credenciales.
   * Si la api devuelve correctamente el par, se setea el localstorage con los tokens y
   * modifica el header por defecto de axios.
   * Si no, loggea y muestra un error.
   * @param e Evento del input
   * @param data Datos del usuario (usuario y contrasenha)
   */
  handleLogin = (e, data) => {
    e.preventDefault();
    axiosBase.post('/token/', {
      username: data.username,
      password: data.password
    }).then(response => {
      axiosBase.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
      sessionStorage.setItem('access_token', response.data.access);
      sessionStorage.setItem('refresh_token', response.data.refresh);
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('isAdmin', response.data.admin);
    //TODO: add lang token response
    //   sessionStorage.setItem('lang', response.data.lang);
      this.setState({
        loggedIn: true,
        username: data.username
      });
    }).catch(e => {
      toast.error('Usuario o contraseña incorrectas.', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
        });
      console.log(e);
    });
  }


  /**
   * Setear el campo username
   * @param e Evento del input
   */
  currentUser = e => {
    this.setState({ username: e.target.value });
  }
  /**
   * Agregar a la blacklist el token utilizado
   * Borrar el access y refresh token del local storage
   * Borrar la configuracion del anho del session storage
   * Setear el estado 'loggedIn' a false
   */
  handleLogout = () => {
    axiosBase.post('/token/blacklist/', {
      "refresh_token": sessionStorage.getItem('refresh_token')
    }).then(response => {
      if (response.status === 205) {
        sessionStorage.clear();
        axiosBase.defaults.headers['Authorization'] = null;
        this.setState({
          loggedIn: false,
          username: ''
        });
        // Popups.success('Sesion cerrada.')
        toast.success('Sesion cerrada.', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            });
            
      }
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
   
  return (
    <>
        <AutoLogout />
        <div id="page-top">
            <Router>
              {this.state.loggedIn ? <Redirect to='/' /> : <Redirect to='/login' />}
              <Switch>
                <div id="wrapper">
                  {this.state.loggedIn && <Sidebar />}
                  <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                      {this.state.loggedIn && <Header username={this.state.username} handleLogout={this.handleLogout} image='' />}
                      <div className="container-fluid">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/profile' component={Profile} />
                        <Route exact path='/levels' component={Levels} />
                        <Route exact path='/chapters' component={Chapters} />
                        <Route exact path='/exercises' component={Exercises} />
                        <Route exact path='/login'>
                          <Login handleLogin={this.handleLogin} username={this.state.username}
                            currentUser={this.currentUser} />
                        </Route>
                        <Route exact path='/signup' component={SignUp} />
                      </div>
                    </div>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />
                    <Footer />
                  </div>
                </div>
              </Switch>
            </Router>
        </div>
      </>
  );
}
}

export default App;