import 'babel-polyfill';
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import IssueAddNavItem from './IssueAddNavItem.jsx';

const App = props => (
  <div>
    <Header />
    <div className="container-fluid">
      {props.children}
      <h5>
        <small>
          Full source code available at this <a href="https://github.com/vasansr/pro-mern-stack">
          GitHub repository.</a>
        </small>
      </h5>
    </div>
  </div>
);

const Header = () => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/issues">
        <NavItem>Issues</NavItem>
      </LinkContainer>
      <LinkContainer to="/reports">
        <NavItem>Reports</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <IssueAddNavItem />
      <NavDropdown id="user-dropdown" title={<Glyphicon glyph="option-horizontal" />} noCaret>
        <MenuItem>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;
