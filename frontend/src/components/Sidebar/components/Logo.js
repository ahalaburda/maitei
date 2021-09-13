import React from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/maitei.png";
import minLogo from "../../../assets/img/logo.png";

function Logo(props) {
  return (
    <Link to='/' className="sidebar-brand d-flex align-content-center justify-content-center">
      {props.toggleIcon ? <img src={logo} id="logo" alt="sse-min-logo"/> : <img src={minLogo} id="min-logo"alt="sse-logo"/>}
    </Link>
  );
}

export default Logo;