import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();

    if (email && password) {
      setWarning(false);
      navigate("/");
    } else setWarning(true);
  };

  return (
    <div className="sign-in" style={{ marginTop: "60px" }}>
      <h1 className="sign-in-page-lable">My Account Login</h1>
      <div className="sign-in-form">
        <div className="form">
          <div className="form-left">
            <h3>Returning Customers</h3>
            <p>
              If you are a registered user, please enter your email and
              password.
            </p>
            <form onSubmit={submitHandle}>
              {warning && (
                <p className="warning">Please Fill the form completely</p>
              )}
              <label htmlFor="email">
                <span className="input-lable">Email</span>
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label htmlFor="email">
                <span className="input-lable">Password</span>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <br />
              <input className="sign-in-btn" type="submit" value="Sign In" />
            </form>
          </div>
          <div className="form-right">
            <h3>New Customers</h3>
            <p>
              Create your personalized ECOM account! You can track your orders,
              update and share your wishlist, edit billing/shipping info and
              more.
            </p>
            <Link to="/sign-up" className="create-account-btn">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
