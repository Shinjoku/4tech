import React from 'react';
import logo from '../../../assets/images/logo-h-vjobs.png';
import './Header.css';

const Header = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/"><img src={logo} style={{width: "128px", height: "64px"}} alt="Logo Venturus"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/link">Link</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
