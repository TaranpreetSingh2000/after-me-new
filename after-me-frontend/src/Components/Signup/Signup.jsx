import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const credentailResponseDecoded = jwtDecode(credentialResponse.credential);
    const givenName = credentailResponseDecoded.given_name;
    const picture = credentailResponseDecoded.picture;
    console.log(credentailResponseDecoded);


    navigate("/strapidata", { state: { picture, givenName } })
  };

  return (
    <div className="login module d-flex justify-content-center align-items-center 100-w vh-100">
      <div className="form_container p-5 rounded">
        <form>
          <div className="main-form-header my-2">
            <h3 className="header-title">Create the Account</h3>

            <span className="right-header-panel">
              "Already registered?"
              <Link to="/login">Login In</Link>
            </span>
          </div>

          <div className="mb-2">
            <label htmlFor="first-name">FirstName</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="last-name">LastName</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="form-control"
            />
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

          <div className="d-grid">
            <button className="btn btn-primary" id="signupbtn">Sign Up</button>
          </div>

          <p className="text-center my-2">OR</p>

          <div className="d-flex flex-direction-column justify-content-center align-items-center">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
