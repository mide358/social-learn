import React from 'react';

import './header.css';
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  InputGroup,
  NavDropdown,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/images';

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="navigation">
        <div className="container-fluid">
          <Navbar.Brand
            style={{
              color: '#DEF2F1',
              fontSize: '2.1rem',
              fontWeight: 'bolder',
            }}
            href="/"
          >
            <Image src={Logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto all-link">
              <Nav.Link id="link" eventKey={1} as={Link} to="/" exact="true">
                Home
              </Nav.Link>
              <Nav.Link id="link" eventKey={2} as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link id="link" eventKey={3} as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link id="link" eventKey={4} as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>

            <NavDropdown
              title=" Profile"
              id="basic-nav-dropdown"
              className="ml-auto right-link"
            >
              <NavDropdown.Item
                id="link"
                eventKey={5}
                as={Link}
                to="/userprofile"
                exact="true"
              >
                User
              </NavDropdown.Item>
              <NavDropdown.Item
                id="link"
                eventKey={6}
                as={Link}
                to="/settings"
                exact="true"
              >
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item
                id="link"
                eventKey={7}
                as={Link}
                to="/privacy"
                exact="true"
              >
                Privacy
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                id="link"
                eventKey={5}
                as={Link}
                to="/Logout"
                exact="true"
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Form className="d-flex home-search">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};
