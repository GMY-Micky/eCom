import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/features/profileSlice";
import "../css/signIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState();
  const [invalidCre, setInvalidCre] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitHandle(e) {
    e.preventDefault();

    if (email && password) {
      const data = {
        email,
        password,
      };

      const response = await fetch("http://localhost:8000/user/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      if (res.status === "ok") {
        localStorage.clear();
        localStorage.setItem("token", res.token);
        localStorage.setItem("firstName", res.firstName);
        dispatch(setUsername(res.firstName));
        setInvalidCre(false);
        setWarning(false);
        navigate("/");
      } else {
        setInvalidCre(true);
        setWarning(false);
      }
    } else {
      setWarning(true);
      setInvalidCre(false);
    }
  }

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
                <p className="warning" style={{ color: "red" }}>
                  Please Fill the form completely
                </p>
              )}
              {invalidCre && (
                <p className="warning" style={{ color: "red" }}>
                  Invalid email or password
                </p>
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
            <Link to="/register" className="create-account-btn">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
