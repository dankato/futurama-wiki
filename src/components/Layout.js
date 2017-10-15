import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header>
      <Link to="/">
        <img className="logo" src="/img/logo.png" alt="Logo" />
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        Images from Wikipedia.
      </p>
    </footer>
  </div>
);

export default Layout;
