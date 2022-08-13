import React, { useRef } from 'react'
import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
    const emailRef = useRef
    const passwordRef = useRef

    const handleLoginForm = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const response = await axios.post("http://localhost:3000/api/login", {
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
        <div className="login__container">
            <div className="logo">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h1>Expressify</h1>
                </Link>
            </div>
            <div className="login__form">
                <h2>Login to Expressify</h2>
                <div className="form">
                    <form onSubmit={handleLoginForm}>
                        <div className="emailLogin">
                            <input
                                type="email"
                                className="emailInput"
                                placeholder="Email address"
                                name="email"
                                // onChange={this.onChange}
                                // value={email}
                                autoComplete="off"
                                ref={emailRef}
                            />
                        </div>
                        <div className="passwordLogin">
                            <input
                                type="password"
                                className="passwordInput"
                                placeholder="Password"
                                name="password"
                                minLength="6"
                                // onChange={this.onChange}
                                // value={password}
                                autoComplete="off"
                                ref={passwordRef}
                            />
                        </div>
                        <input type="submit" value="Log In" />
                    </form>
                    <div className="forgotPassword">
                        <Link to="/reset-password" style={{ textDecoration: "none" }}>
                            <span>Forgot password?</span>
                        </Link>
                    </div>
                    <span className="option">or</span>
                    <div className="createAccount">
                        <Link to="/join" style={{ textDecoration: "none" }}>
                            <button>Create New Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login