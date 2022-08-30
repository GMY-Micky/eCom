import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signUp.css";
// const { expressjwt: jwt } = require("express-jwt");

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notEqual, setNotEqual] = useState(false);
  const [warning, setWarning] = useState(false);
  const [disable, setDisable] = useState(false);

  const navigate = useNavigate();

  async function submitHandle(e) {
    e.preventDefault();

    if (
      firstName &&
      lastName &&
      email &&
      confirmEmail &&
      password &&
      confirmPassword
    ) {
      if (email !== confirmEmail || password !== confirmPassword) {
        setNotEqual(true);
        if (warning) setWarning(false);
      } else {
        const data = {
          firstName,
          lastName,
          email,
          password,
        };

        const response = await fetch("http://localhost:3001/api/register", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const res = await response.json();
        console.log(res);
        // localStorage.clear();
        // localStorage.setItem("Data", JSON.stringify(data));
        if (warning) setWarning(false);
        if (notEqual) setNotEqual(false);
        setDisable(true);
        navigate("/login");
      }
    } else {
      setWarning(true);
      if (notEqual) setNotEqual(false);
    }
  }

  return (
    <div className="sign-up-form" style={{ marginTop: "60px" }}>
      <h1 className="sign-up-page-lable">Create Account</h1>
      {warning && <p className="warning">Please Fill the form completely</p>}
      {notEqual && <p className="not-equal">Email or Passwords are not same</p>}
      <div className="form">
        <form onSubmit={submitHandle}>
          <br />
          <br /> <h3>Name</h3>
          <br />
          <label htmlFor="First Name">
            <span className="input-lable">First Name</span>
            <br />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label htmlFor="Last Name">
            <span className="input-lable">Last Name</span>
            <br />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <br />
          <h3>Login Information</h3>
          <br />
          <label htmlFor="Email">
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
          <label htmlFor="confirm email">
            <span className="input-lable">Confirm Email</span>
            <br />
            <input
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label htmlFor="password">
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
          <label htmlFor="password">
            <span className="input-lable">Confirm Password</span>
            <br />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <br />
          <input
            className="submit-btn"
            type="submit"
            value="Sign Up"
            disabled={disable}
          />
          <br />
          <Link to="/login">
            <p className="acc-exist">Already have an account</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
