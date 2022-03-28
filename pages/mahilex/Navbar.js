import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../../public/vercel.svg";
import AcUnitIcon from "@material-ui/icons/AcUnit"; 
// import style from "../../styles/Home.module.css"

const Navbar1 = () => {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand
              style={{ verticalAlignItem: "center", color: "black", fontWeight:"600" ,fontSize:"21px"}}
              href="/"
            >
              {" "}
              Mahilex
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
              <Nav
               
                
                className="me-auto"
              >
                <Nav.Link   href="/Home">
                  Home
                </Nav.Link>
                <Nav.Link
               target="_blank"
                  href="https://riseheight.com"
                >
                  RiseHeight
                </Nav.Link>
                <NavDropdown
                style={{ backGroundColor: "whitesmoke", color:"whitesmoke" }}
                  title="My-Web-App"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item    target="_blank"  href="https://iagriconsultancy.com">
                    iagriconsultancy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                  target="_blank"
                    href="https://mahilex.in"
                  >
                    Mahilex
                  </NavDropdown.Item>
                  <NavDropdown.Item
                  target="_blank"
                    href="http://goalachieversacademy.in"
                  >
                    Goalachieversacademy
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                  target="_blank"
                    href="https://precruit.work"
                  >
                    {" "}
                    precruit.work
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Navbar1;
