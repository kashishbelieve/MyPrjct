import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import email from "../assets/email.jpg";
import close from "../assets/close.jpg";
import person from "../assets/User.jpg";
import lock from "../assets/lock.jpg";
import "./sinup.css";

const Sinup = () => {
  const nevigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post("/sinup", loginData);
      console.log(data);

      nevigate("/login");
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
      <div className="form-box-register">
        <h2>Registration</h2>
        

        <form onSubmit={submitHandler}>
          <div className="input-box">
            <span className="icon">
              <img
                src={person}
                alt=""
                className="input-image"
                height={25}
                width={25}
              />
            </span>
            <input type="text" />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <img
                src={email}
                alt=""
                className="input-image"
                height={25}
                width={25}
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
                height={25}
                width={25}
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
          <div className="conditions">
            <label>
              <input type="checkbox" />I agree to all the terms & conditions{" "}
            </label>
          </div>
          <button type="submit" className="btn">
            signup
          </button>
          <div className="login-register"><p>Already have an account?<a href="#" className="login-link" >Log in</a></p> 
                            </div>
        </form>
      </div>
    </div>
  );
};

export default Sinup;
