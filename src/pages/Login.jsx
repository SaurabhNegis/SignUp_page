import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Logged In!");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form id="login-form" className="form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              id="login-email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
      <div className="social-login">
        <p>Or login with</p>
        <div className="line"></div>
        <div className="social-buttons">
          <button className="social-btn google-btn">
            <img
              src="/img/google_icon.png"
              alt="Google Icon"
            />{" "}
            Sign in with Google
          </button>
          <button className="social-btn facebook-btn">
            <img
              src="/img/facebook_icon.png"
              alt="Facebook Icon"
            />{" "}
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
