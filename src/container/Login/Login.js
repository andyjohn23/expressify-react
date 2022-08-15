import React, { useContext, useRef } from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import axios from 'axios';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const response = await axios.post("http://localhost:3000/api/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    console.log(user)

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
                    <form onSubmit={handleSubmit}>
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