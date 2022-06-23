import React from 'react';
import {NavLink} from 'react-router-dom';
import a from '../components/Nav.module.css';

const active = {
  fontWeight: 700,
};

function Nav() {
  return (
    <nav className={a.navBar}>
        <NavLink className={a.navLink} activeStyle={active} to='/' exact>Home</NavLink>
        <NavLink className={a.navLink} activeStyle={active} to='/about' exact>About</NavLink>
    </nav>
  );
};

export default Nav;
