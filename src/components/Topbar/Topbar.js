import React, { useContext } from 'react'
import "./Topbar.css"
import { Search } from "@mui/icons-material";
// import { Avatar } from "@mui/material";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
import { Context } from '../../context/Context';

function Topbar() {
    const { user, dispatch } = useContext(Context)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="navbar__container">
            <Navbar expand="lg" className="navbar" fixed="top">
                <Container fluid>
                    <Navbar.Brand>
                        <Nav.Link>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <h1>Expressify</h1>
                            </Link>
                        </Nav.Link>
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
                                    <Link to="/createblog" style={{ textDecoration: "none" }}>
                                        <button>Submit a blog</button>
                                    </Link>
                                </div>
                                {user ? (
                                    <div className="username__login">
                                        <Nav.Link className="navLinks">
                                            <Link to="" className="navLinks" style={{ textDecoration: "none" }}>
                                                <span style={{ textTransform: "uppercase" }}>{user.username}</span>
                                            </Link>&nbsp;&nbsp;&nbsp;
                                            <Link to="" className="navLinks" style={{ textDecoration: "none" }}>
                                                <span onClick={handleLogout}>{user && "LOGOUT"}</span>
                                            </Link>
                                        </Nav.Link>
                                    </div>
                                ) : (
                                    <div className="loginLink">
                                        <Nav.Link className="navLinks">
                                            <Link to="/login" className="navLinks" style={{ textDecoration: "none" }}>
                                                <span>Log in</span>
                                            </Link>
                                        </Nav.Link>
                                    </div>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Topbar