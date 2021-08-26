import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUser, faTable, faHandsHelping, faUserCircle, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import Logo from "./components/Logo";
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
        return (
            <>
            <nav className="navbar-nav bg-gradient-success sidebar active sidebar-dark" id="sidebar">
              <div className="container-fluid d-flex flex-column p-0">
                <Logo toggleIcon={this.state.toggle}/>
                <hr className="sidebar-divider my-0" />
                <ul className="nav navbar-nav text-light" id="accordionSidebar">
                  <li className="nav-item">
                    <Link className="nav-link" to="/"><FontAwesomeIcon icon={faTachometerAlt} /><span style={{paddingLeft: '1em'}}> Inicio</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/levels"><FontAwesomeIcon icon={faTable} /><span style={{paddingLeft: '1em'}}> Niveles</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chapters"><FontAwesomeIcon icon={faHandsHelping} /><span style={{paddingLeft: '1em'}}> Capitulos</span></Link>
                  </li>
                  <hr/>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faUserCircle} /><span style={{paddingLeft: '1em'}}> Iniciar Sesion</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup"><FontAwesomeIcon icon={faUser} /><span style={{paddingLeft: '1em'}}> Registro</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile"><FontAwesomeIcon icon={faUser} /><span style={{paddingLeft: '1em'}}> Perfil</span></Link>
                  </li> */}
                </ul>
                <div className="text-center">
                  <button className="btn rounded-circle border-0" id="sidebarToggle" type="button" onClick={this.toggleMenu}>
                    {this.state.toggle ? 
                      <FontAwesomeIcon icon={faLessThan} className="text-white"/> :
                      <FontAwesomeIcon icon={faGreaterThan} className="text-white"/>
                    }
                  </button>
                </div>
              </div>
            </nav>
          </>
        );
    }
}

export default Sidebar;