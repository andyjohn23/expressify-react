import React from 'react'
import "./Topbar.css"
import { Search } from "@mui/icons-material";
// import { Avatar } from "@mui/material";
import { Nav, Navbar, Container } from "react-bootstrap";

function Topbar() {
    return (
        <div className="navbar__container">
            <Navbar expand="lg" className="navbar" fixed="top">
                <Container fluid>
                    <Navbar.Brand>
                        <Nav.Link to="/"><h1>Expressify</h1></Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <div className="searchbar">
                                <Search className="searchIcon" />
                                <input
                                    type="search"
                                    placeholder="Search"
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
                                    <Nav.Link to="" className="navLinks">Log in</Nav.Link>
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