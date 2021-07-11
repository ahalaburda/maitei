import React from 'react';
import './Header.css'

function Header(props) {
    return (
    	      <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
    	        <div className="container-fluid">
    	          <button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
    	          <ul className="nav navbar-nav flex-nowrap ml-auto">
    	            <li className="nav-item dropdown d-sm-none no-arrow">
    	            <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-search" /></a>
    	              <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
    	                <form className="form-inline mr-auto navbar-search w-100">
    	                  <div className="input-group">
    	                    <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
    	                    <div className="input-group-append">
    	                      <button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button>
    	                    </div>
    	                  </div>
    	                </form>
    	              </div>
    	            </li>
    	            <div className="d-none d-sm-block topbar-divider" />
    	            <li className="nav-item dropdown no-arrow" role="presentation">
    	              <div className="nav-item dropdown no-arrow">
    	                <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">
    	                  <span className="d-none d-lg-inline mr-2 text-gray-600 small">John Smith</span><img className="border rounded-circle img-profile" src="../assets/img/avatars/avatar1.jpeg" /></a>
    	                <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Settings</a>
    	                  <a className="dropdown-item" role="presentation" href="#"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Activity log</a>
    	                  <div className="dropdown-divider" /><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Logout</a>
    	                </div>
    	              </div>
    	            </li>
    	          </ul>
    	        </div>
    	      </nav>

    );
}

export default Header;