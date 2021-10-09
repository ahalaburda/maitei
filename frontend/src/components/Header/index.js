/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
import UserInfo from "./components/UserInfo";
import Avatar from './components/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTable } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";

function toggleMenu () {
	if ($(window).width() < 768 && !$(".sidebar").hasClass("sidebar-show")) {
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


// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import UserInfo from "./components/UserInfo";
// import Utils from '../../helpers/Utils'
// import SeleccionarTema from './components/SeleccionarTema';

// function setTheme() {
// 	let theme = Utils.getTheme() === 'dark' ? "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow bg-black " :
// 	"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow";
// 	return theme
// }

// function Header(props) {
// 	return (
// 		<nav className={setTheme()}>
// 			{/* Sidebar Toggle (Topbar) */}
// 			<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
// 				<FontAwesomeIcon icon="bars" />
// 			</button>

// 			{/* Topbar Navbar */}
// 			<ul className="navbar-nav ">
// 				{/* Nav Item - SeleccionarTema */}
// 				<SeleccionarTema />
// 				{/* Nav Divider */}
// 				<div className="topbar-divider d-none d-sm-block" />
// 				{/* Nav Item - User Information */}
// 				<UserInfo username={props.username} logout={props.handleLogout} />
// 			</ul>
// 		</nav>
// 	);
// }

// export default Header;
