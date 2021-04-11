import React, { useState } from 'react';
import '../App.css';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router
} from "react-router-dom";


function SideBar() {


  return (
    <Router >
      <Navbar style={{ backgroundColor: 'white', textAlign: 'left' }} variant="dark">
        <Navbar.Toggle arial-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" ></Navbar.Collapse>
        <Nav className="flex-column">

          <Nav.Link>
            WHO WE ARE
        </Nav.Link>
          <Nav.Link style={{ color: 'black', fontSize: 20 }}>
            WHO WE ARE
        </Nav.Link>

          <Nav.Link style={{ color: 'black', fontSize: 16 }} href="/whoweare">ABOUT US</Nav.Link>
          <Nav.Link style={{ color: 'black', fontSize: 16 }} href="/leaderofaym">LEADERS OF AYM</Nav.Link>
          <Nav.Link style={{ color: 'black', fontSize: 16 }} href="/membersreflections">MEMBER'S REFLECTIONS</Nav.Link>
          <Nav.Link style={{ color: 'black', fontSize: 16 }} href="/auditions">AUDITIONS</Nav.Link>
          <Nav.Link style={{ color: 'black', fontSize: 16 }} href="/christmasconcert">2019 CHRISTMAS CONCERT</Nav.Link>
          <Nav.Link style={{ color: 'black', fontSize: 16 }} href="/award">PRESIDENTIAL VOLUNTEER SERVICE AWARD</Nav.Link>


        </Nav>
      </Navbar>
    </Router>


  );
}

export default SideBar;
