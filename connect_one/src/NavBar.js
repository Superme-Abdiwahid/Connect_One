import React from "react";
import { Nav } from "react-bootstrap";
import 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser, faSearch, faCalendarAlt, faInfoCircle , faHome, faPlus, faIcons} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
import { Link } from "react-router-dom"; 

export default function NavBar() {
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <>
      {/* Navbar for mobile view */}
      <div className="fixed-bottom d-lg-none">
        <Nav className="justify-content-around bg-light p-2">
          <Nav.Link href="/" className="icon-link nav-text">
            <FontAwesomeIcon icon={faHome} size="lg" />
            <span className="nav-text">Home</span>
          </Nav.Link>
          <Nav.Link href="/search" className="icon-link">
            <FontAwesomeIcon icon={faSearch}  size="lg" />
            <span className="nav-text">Search</span>
          </Nav.Link>
          <Nav.Link href="/posts" className="icon-link">
            <FontAwesomeIcon icon={faPlus} size="lg" />
            <span className="nav-text">Posts</span>
          </Nav.Link>
          <Nav.Link href="/calendar" className="icon-link">
            <FontAwesomeIcon icon={faCalendarAlt}  size="lg" />
            <span className="nav-text">Calendar</span>
          </Nav.Link>
          <Nav.Link href="/profile" className="icon-link">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <span className="nav-text">Profile</span>
          </Nav.Link>
          <Nav.Link href="/about" className="icon-link">
            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            <span className="nav-text">About</span>
          </Nav.Link>
        </Nav>
      </div>
     
      {/* Navbar for desktop view */}
      <Nav className="d-none d-lg-flex bg-body-tertiary justify-content-between align-items-center" bg="dark" data-bs-theme="dark">
        <Nav.Item>
          <Nav.Link href="/" className="nav-link">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/calendar" className="nav-link">Calendar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" className="nav-link">About Team</Nav.Link>
        </Nav.Item>
        {/* <NavDropdown title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/Profile">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/about">About the Team</NavDropdown.Item>
        </NavDropdown> */}
        {/* Sign out button */}
        <Nav.Item>
          <Nav.Link href="/" className="text-light nav-link" onClick={handleSignOut}>Sign Out</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
