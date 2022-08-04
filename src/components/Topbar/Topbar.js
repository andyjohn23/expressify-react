import React from 'react'
import "./Topbar.css"
import { Search } from "@mui/icons-material";
// import { Avatar } from "@mui/material";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function Topbar() {
    return (
        <div className="navbar__container">
            <Navbar expand="lg" className="navbar" fixed="top">
                <Container fluid>
                    <Navbar.Brand>
                        <h1>Expressify</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div className="category">
                                <NavDropdown title="Categories" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className="searchbar">
                                <Search className="searchIcon" />
                                <input
                                    type="search"
                                    placeholder="Search by title or author"
                                    className="searchInput"
                                />
                            </div>
                        </Nav>
                        <Nav className="ml-auto">
                            <div className="navbar__right">
                                <div className="navbar__links">
                                    <button>Submit a blog</button>
                                </div>
                                <div className="loginLink">
                                    <Nav.Link className="navLinks">Log in</Nav.Link>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar