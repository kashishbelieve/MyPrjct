import React from "react";
import "./navLogin.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import email from "../assets/email.jpg";
import close from "../assets/close.jpg";
import lock from "../assets/lock.jpg";

const UserLogin = () => {
  const nevigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post("/login", loginData);
      console.log(data);
      localStorage.setItem("user", JSON.stringify({ ...data }));
      nevigate("/home");
    } catch (err) {
      console.log(
        "error in login in submit handler /login backend axios " + err
      );
    }
  };
  const changeHandler = (event) => {
    const { id, value } = event.target;
    setLoginData({ ...loginData, [id]: value });
  };

  return (
    <div className="mt-24">
      <div className="wrapper">
        <span className="icon-close">
          <img
            src={close}
            alt=""
            className="input-image"
            height={20}
            width={20}
          />
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form onSubmit={submitHandler}>
            <div className="input-box">
              <span className="icon">
                <img
                  src={email}
                  alt=""
                  className="input-image"
                  height={20}
                  width={20}
                />
              </span>
              <input
                type="email"
                id="email"
                onChange={changeHandler}
                value={loginData.email}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <img
                  src={lock}
                  alt=""
                  className="input-image"
                  height={20}
                  width={20}
                />
              </span>
              <input
                type="password"
                id="password"
                onChange={changeHandler}
                value={loginData.password}
                required
              />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <NavLink to={"/forgot-password"}>Forgot Password?</NavLink>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Dont't have an account?
                <NavLink className="register-link" to={"/sinup"}>
                  Register
                </NavLink>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
