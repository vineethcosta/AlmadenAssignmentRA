import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App'
import logo from '../assets/img/band.jpg'
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { GoogleLogout } from 'react-google-login';

const NavBar = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory()
 
    const handleLogOut = () => {
        localStorage.clear();
        dispatch({ type: "CLEAR" });
        history.push("/login");
    };
    return (state &&
        <div >
            <Router >
                <Navbar style={
                    { backgroundColor: 'black' }}
                    variant="dark"
                    expand="lg"
                    sticky="top" >
                    <Navbar.Brand href="#home" > < img  className="img-fluid" src={logo}
                        style={
                            { width: 100, marginTop: -7 }}
                    /></Navbar.Brand >
                    <Navbar.Toggle arial-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="mr-auto" > </Nav>
                        <Nav style={{ color: 'white' }} >
                            <Nav.Link href="/" style={{ color: 'white', fontSize: 13 }} > HOME </Nav.Link>
                            <Nav.Link href="/" style={{ color: 'white', fontSize: 13, marginTop: -8 }} >
                                < NavDropdown href="/whoweare" title="WHO WE ARE" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="/whoweare" > ABOUT US </NavDropdown.Item>
                                    <NavDropdown.Item href="/leaderofaym" > LEADERS OF AYM </NavDropdown.Item>
                                    <NavDropdown.Item href="/membersreflections" > MEMBERS REFLECTIONS</NavDropdown.Item>
                                    <NavDropdown.Item href="/auditions" > AUDITIONS </NavDropdown.Item>
                                    <NavDropdown.Item href="/christmasconcert" > 2019 CHRISTMAS CONCERT </NavDropdown.Item>

                                    <NavDropdown.Item href="/award" > PRESIDENTIAL VOLUNTEER SERVICE AWARD</NavDropdown.Item>
                                    <NavDropdown.Item href="whoweare" > MORE INFORMATION </NavDropdown.Item>
                                </NavDropdown></Nav.Link >

                            <Nav.Link style={{ color: 'white', fontSize: 13 }} href="/monthlynewsletter" > MONTHLY NEWS LETTER </Nav.Link>
                            <Nav.Link style={{ color: 'white', fontSize: 13 }} href="/events" > EVENTS </Nav.Link>
                            <Nav.Link style={{ color: 'white', fontSize: 13 }} href="/photogallery" > PHOTO GALLERY </Nav.Link>
                            <Nav.Link style={{ color: 'white', fontSize: 13 }} href="/donate" > DONATE </Nav.Link>
                            <Nav.Link style={{ color: 'white', fontSize: 13 }} href="/contactus" > CONTACT US </Nav.Link>
                            <Nav.Link style={{ color: 'white', fontSize: 13 }} > Welcome { state.Name ?state.Name:state } !</Nav.Link>
                        </Nav>

                        <Nav.Link href="/" style={{ color: 'white', fontSize: 13, marginTop: -8 }} >
                        <GoogleLogout
      clientId="583670879500-hf68cropiqce4qfjans5bi5rd77qebie.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={handleLogOut}
    >
    </GoogleLogout>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </Router>

        </div>
    )
}


export default NavBar