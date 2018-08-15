import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Dashoard</NavLink>
    <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
    <NavLink to='/help' activeClassName='is-active' >Help</NavLink>
  </header>
)

export default Header;