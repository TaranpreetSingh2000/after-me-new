import React from "react";
import { Link } from "react-router-dom";

const Loginfile = () => {
  return (
    <div className="login module d-flex justify-content-center align-items-center 100-w vh-100">
      <div className="form_container p-5 rounded ">
        <form>
          <div className="main-form-header">
            <h3 className="header-title">Login In</h3>
            <span className="right-header-panel">
              "Don't have an account?"
              <Link to="/signup">Sign Up</Link>
            </span>
          </div>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              placeholder="Enter your username"
              className="form-control"
              autoComplete="username"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              autoComplete="current-password"
            />
          </div>
          <div className="mb-2 d-flex justify-content-between align-items-baseline">
            <div className="check">
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              />
              <label htmlFor="check" className="custom-input-label ms-2">
                Remember me
              </label>
            </div>
            <p className="text-end mt-2">
              <Link to="/">Forgot Password</Link>
            </p>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary" id="signinbtn">Sign In</button>
          </div>

          <p className="text-center my-2">OR</p>

          <div className="text-center mb-2">
            <button type="button" className="form-control" id="otpbtn">
              <Link to="/otplogin">Login with OTP</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginfile;
