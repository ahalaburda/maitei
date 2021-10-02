import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUser, faTable, faHandsHelping, faUserCircle, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import Logo from "./components/Logo";
import './Sidebar.css'
import $ from "jquery";

import i18n from '../../i18n/index'


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
            <nav className="navbar navbar-light align-items-start sidebar active accordion shadow-lg p-2" id="sidebar">
              <div className="container-fluid d-flex flex-column p-0">
                <Logo toggleIcon={this.state.toggle}/>
                <hr/>
                <ul className="nav navbar-nav text-light" id="accordionSidebar">
                  <li className="nav-item">
                    <Link className="nav-link" to="/"><FontAwesomeIcon icon={faTachometerAlt} /><span style={{paddingLeft: '1em'}}>{i18n.t('home')}</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/levels"><FontAwesomeIcon icon={faTable} /><span style={{paddingLeft: '1em'}}>{i18n.t('levels')}</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chapters"><FontAwesomeIcon icon={faHandsHelping} /><span style={{paddingLeft: '1em'}}>{i18n.t('chapters')}</span></Link>
                  </li>
                  <hr/>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile"><FontAwesomeIcon icon={faUser} /><span style={{paddingLeft: '1em'}}>{i18n.t('profile')}</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout"><span style={{paddingLeft: '1em'}}>{i18n.t('logout')}</span></Link>
                  </li>
                </ul>
                <div className="text-center">
                  <button className="btn rounded-circle" id="sidebarToggle" type="button" onClick={this.toggleMenu}>
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