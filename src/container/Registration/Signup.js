import React, { useState } from 'react'
import "./Signup.css";
import { Link } from "react-router-dom"
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { username, email, password } = formData;
    const [ error, setError ] = useState(false)

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSignUpForm = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const response = await axios.post("https://expressify-rails-andy.herokuapp.com/api/users", {
                username,
                email,
                password
            });
            response.data && window.location.replace("/login")
        } catch (error) {
            setError(true)
        }
    };

    return (
        <div className="signup__container">
            <div className="logo">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h1>Expressify</h1>
                </Link>
            </div>
            {error && <span style={{ color: "red"}}>An error occurred!!!</span>}
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

