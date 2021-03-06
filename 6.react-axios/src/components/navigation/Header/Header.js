import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../../assets/images/logo-h-vjobs.png';


// Navbar with route redirectioning
const Header = (props) => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/"><img src={logo} style={{width: "100px", height: "50px"}} alt="Logo Venturus"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Sobre</Link>
        </li>
      </ul>
    </div>
    <a className="nav-item nav-link text-white">{props.userName}</a>
    <a onClick={() => props.logout()} className="nav-item nav-link text-white"><i className="fas fa-sign-out-alt"></i></a>
  </nav>
);

export default Header;
