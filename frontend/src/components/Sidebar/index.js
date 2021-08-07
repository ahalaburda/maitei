import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUser, faTable, faHandsHelping, faUserCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

import $ from "jquery";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        $('#sidebar').toggleClass('active');
        this.setState({ toggle: !this.state.toggle });
    }

    render() {
        /**Si el usuario es admin, se muestra las opciones de tipo de expediente y objeto de gastos en el sidebar
         * y si no es admin se ocultan
         */
        return (
            <>
            <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" >
              <div className="container-fluid d-flex flex-column p-0">
                <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                  <div className="sidebar-brand-icon rotate-n-15"><i className="far fa-comments"></i></div>
                  <div className="sidebar-brand-text mx-3"><span>Maitei Guarani</span></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <ul className="nav navbar-nav text-light" id="accordionSidebar">
                  <li className="nav-item">
                    <Link className="nav-link" to="/"><FontAwesomeIcon icon={faTachometerAlt} /><span> Incio</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile"><FontAwesomeIcon icon={faUser} /><span> Profile</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/levels"><FontAwesomeIcon icon={faTable} /><span> Niveles</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chapters"><FontAwesomeIcon icon={faHandsHelping} /><span> Capitulos</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/exercises"><FontAwesomeIcon icon={faHandsHelping} /><span> Ejercicios</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faUserCircle} /><span> Iniciar Sesion</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup"><FontAwesomeIcon icon={faUser} /><span> Registro</span></Link>
                  </li>
                </ul>
                <div className="text-center d-none d-md-inline">
                  <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"><FontAwesomeIcon icon={faChevronLeft} /></button>
                </div>
              </div>
            </nav>
          </>
        );
    }
}

export default Sidebar;