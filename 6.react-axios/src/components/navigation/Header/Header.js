import React from 'react';
import logo from '../../../assets/images/logo-h-vjobs.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
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
  </nav>
);

export default Header;
