import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import Button from "./Button";
import logo from "../Assets/logo.png";
const NavBar = () => {
  const [navColour, setNavColour] = useState(false);
  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container fluid className="nav-container">
        <Navbar.Brand href="#home" className="d-flex">
          <img src={logo} alt="AK_logo" className="logo-nav" />
        </Navbar.Brand>

        <div className="nav-main">
          <Button
            href={"#contact"}
            className={"resume-btn nav-contact"}
            content={"Contact with me"}
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
