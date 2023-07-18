import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import logoLight from "../assets/logo/logo_light.png";
import logoDark from "../assets/logo/logo_dark.png";
import { MdLightMode, MdNightlight } from "react-icons/md";

function Navigation({ variant, changeTheme }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg={variant}
      variant={variant}
      expand="lg"
      className={`${isSticky ? "sticky" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand>
          <img src={variant === "light" ? logoLight : logoDark} alt="db logo" />
        </Navbar.Brand>
        <Navbar.Brand>Demo dark mode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="switchContainer ms-auto">
            <MdLightMode
              className="modeIcons"
              style={{ color: variant === "light" ? "#333" : "#fff" }}
            />
            <Form>
              <Form.Check
                type="switch"
                id="darkModeSwitch"
                checked={variant === "dark"}
                onChange={changeTheme}
                className="custom-switch"
              />
              <span
                className="switchText"
                style={{ color: variant === "light" ? "#333" : "#fff" }}
              >
                {variant} mode
              </span>
            </Form>
            <MdNightlight
              className="modeIcons"
              style={{ color: variant === "light" ? "#333" : "#fff" }}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
