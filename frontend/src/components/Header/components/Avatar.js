import React from "react";
import {Link} from "react-router-dom";
import avatar from "../../../assets/img/user.svg";

function Avatar(props) {
  return (
    <Link to='/' className="sidebar-brand d-flex align-content-center justify-content-center">
      {props.image ? <img src={props.image} id="avatar" alt="avatar"/> : <img src={avatar} id="avatar"alt="default-avatar"/>}
    </Link>
  );
}

export default Avatar;