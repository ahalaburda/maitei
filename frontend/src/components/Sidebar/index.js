import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUser, faTable, faHandsHelping, faGreaterThan, faLessThan, faEnvelope, faTimesCircle, faInfo } from '@fortawesome/free-solid-svg-icons'
import Logo from "./components/Logo";
import './Sidebar.css'
import $ from "jquery";
import axiosBase from "../../services/http-common"
import i18n from '../../i18n/index'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            showChapter: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.getLevelId = this.getLevelId.bind(this);
    }

    toggleMenu = () => {
        $('#sidebar').toggleClass('active');
        this.setState({ toggle: !this.state.toggle });
    }

    getLevelId = () =>{
      var level = sessionStorage.getItem('matei_level_id');
      console.log(level);
      if(level !=null){
        this.setState({ showChapter: true });
      }
    }

    logout = () =>{
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
              window.location.href='/login';
              
        }
      }).catch(e => {
        console.log(e);
      })
    }
    componentDidMount(){
      if ($(window).width() < 768) {
        $(".sidebar").hide();
      };
      $(window).resize(function() {
        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480) {
          
          $(".sidebar").hide();
        };
      });
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
                    <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faInfo} /><span style={{paddingLeft: '1em'}}>{i18n.t('about_us')}</span></Link>
                  </li>
                  <li className="nav-item">
                    <a href="mailto:pinv18-1284@humanidades.uni.edu.py" className="nav-link"><FontAwesomeIcon icon={faEnvelope} /><span style={{paddingLeft: '1em'}}>{i18n.t('contact_us')}</span></a> 
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout" onClick={this.logout} ><FontAwesomeIcon icon={faTimesCircle} /><span style={{paddingLeft: '1em'}}>{i18n.t('logout')}</span></Link>
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