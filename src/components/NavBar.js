import React from "react";
import styles from "../styles/NavBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <Navbar.Brand className="mr-0">
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Nav className="ml-auto text-left">
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin"
          >
            <i className="fas fa-sign-in-alt"></i>Sign in
          </NavLink>
          <NavLink
            to="/signup"
            className={styles.NavLink}
            activeClassName={styles.Active}
          >
            <i className="fas fa-user-plus"></i>Sign up
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
