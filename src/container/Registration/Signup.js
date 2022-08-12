import React from 'react'
import "./Signup.css";
import { Link } from "react-router-dom"

function Signup() {
    return (
        <div className="signup__container">
            <div className="logo">
                <Link to="/">
                    <img src={PhotoBoardLogo} alt="logo" />
                </Link>
                <h1>Photo-Board</h1>
            </div>
            <div className="signup__form">
                <div className="createHeader">
                    <h2>Create a new account</h2>
                    <h3>It's quick and easy.</h3>
                </div>
                <div className="form">
                    <form onSubmit={handleSignUpForm}>
                        <div className="usernameSignup">
                            <input
                                type="text"
                                className="usernameInput"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <div className="emailSignup">
                            <input
                                type="email"
                                className="emailInput"
                                placeholder="Email address"
                                name="email"
                                value={email}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <div className="passwordSignup">
                            <input
                                type="password"
                                className="passwordInput"
                                placeholder="Password"
                                name="password"
                                value={password}
                                minLength="6"
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <div className="passwordSignup">
                            <input
                                type="password"
                                className="passwordInput"
                                placeholder="Confirm Password"
                                name="re_password"
                                value={password2}
                                minLength="6"
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <input type="submit" value="Sign up" />
                    </form>
                    <div className="haveAccount">
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <span>Already have an account?</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup