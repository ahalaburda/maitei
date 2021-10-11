/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import UserInfo from "./components/UserInfo";
import Avatar from './components/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTable } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";

function toggleMenu () {
	if (!$(".sidebar").hasClass("sidebar-show")) {
		$(".sidebar").addClass('sidebar-show');
		$(".sidebar").show();
	  }else{
		$(".sidebar").removeClass('sidebar-show');
		$(".sidebar").hide();
	  }
}

function Header(props) {
    return (
    	      <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
    	        <div className="container-fluid">
					
    	          <button className="btn mr-3 rounded-header" id="sidebarToggle" type="button" onClick={() => toggleMenu()}><FontAwesomeIcon icon={faBars} /></button>
    	          <ul className="nav navbar-nav flex-nowrap ml-auto">
    	            <div className="d-none d-sm-block topbar-divider" />
    	            <li className="nav-item dropdown no-arrow" role="presentation">
    	              <div className="nav-item dropdown no-arrow">
    	                <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">
						  <UserInfo username={props.username} logout={props.handleLogout} />
						  <Avatar image={props.image} />
						  </a>
    	                <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu">
							<a className="dropdown-item" role="presentation" href="#"><FontAwesomeIcon icon={faTable} /><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Profile</a>
							<a className="dropdown-item" role="presentation" href="#"><FontAwesomeIcon icon={faTable} /><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Settings</a>
							<a className="dropdown-item" role="presentation" href="#"><FontAwesomeIcon icon={faTable} /><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Activity log</a>
    	                  <div className="dropdown-divider" />
							<a className="dropdown-item" role="presentation" href="#"><FontAwesomeIcon icon={faTable} /><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Logout</a>
    	                </div>
    	              </div>
    	            </li>
    	          </ul>
    	        </div>
    	      </nav>

    );
}

export default Header;