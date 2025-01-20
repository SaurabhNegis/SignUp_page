import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Sign-Up Successful!");
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-container-title">
          <h2>Sign Up</h2>
          <p>Sign-up to continue</p>
        </div>

        <form id="signup-form" className="form" onSubmit={handleSignUp}>
          <div className="form-group">
            <input
              type="text"
              id="signup-name"
              name="name"
              required
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="signup-email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="signup-password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p className="already-account">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>

      <div className="social-login">
        <p>Or login with</p>
        <div className="line"></div>
        <div className="social-buttons">
          <button className="social-btn google-btn">
            <img src="/img/google_icon.png" alt="Google Icon" /> Sign in with Google
          </button>
          <button className="social-btn facebook-btn">
            <img src="/img/facebook_icon.png" alt="Facebook Icon" /> Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
