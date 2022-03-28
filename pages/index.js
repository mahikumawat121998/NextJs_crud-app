import React from "react";
import Navbar1 from "./mahilex/Navbar"
import Todo from "./mahilex/Todo"
import Footer from "./mahilex/Footer"
 

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const index = () => {
  return <>
  <Navbar1/>
  <Todo/>
  <Footer/>

  </>;
};

export default index;
