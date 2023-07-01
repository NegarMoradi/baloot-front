import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import UseApi from "../../hooks/api";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../../store/user";
import { userSelectors } from "../../store/user/selector";
import { addMultiToCart } from "../../store/cart";
import { setToken } from "../../store/user/token";

const initialRegisterState = {
  username: "",
  password: "",
  address: "",
  email: "",
  birthdate: "",
};

const Login = () => {
  const { apiCall } = UseApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerField, setRegisterFields] = useState(initialRegisterState);
  const user = useSelector(userSelectors.user);

  useEffect(() => {
    if (user.username) {
      navigate("/");
    }
  }, [user]);

  const onGetUserDataSuccess = (res) => {
    dispatch(setUserInfo(res.data.data));
    dispatch(addMultiToCart(res.data.data.buyList));
  };

  const getUserData = () => {
    const query = {};
    apiCall({
      url: "http://localhost:5432/api/users/loggedInUser",
      query,
      method: "get",
      sucessCallback: onGetUserDataSuccess,
    });
  };

  const onLoginSuccess = (res) => {
    dispatch(
      setToken({
        jwtToken: res.data.data,
      })
    );
    getUserData();
    window.location("/");
  };

  const loginApiCall = () => {
    const query = {
      username: document.getElementById("user-signIn").value,
      password: document.getElementById("pass-signIn").value,
    };

    apiCall({
      url: "http://localhost:5432/api/users/login",
      query,
      method: "post",
      sucessCallback: onLoginSuccess,
    });
  };

  const onSetFields = (e, type) => {
    setRegisterFields((val) => {
      const newVal = { ...val };
      newVal[type] = e.target.value;
      return newVal;
    });
  };

  const onSubmitRegisterSuccess = (res) => {
    dispatch(
      setToken({
        jwtToken: res.data.data,
      })
    );
    getUserData();
    navigate("/");
  };

  const onSubmitRegister = () => {
    apiCall({
      url: "http://localhost:5432/api/users/signup",
      query: registerField,
      method: "post",
      sucessCallback: onSubmitRegisterSuccess,
    });
  };

  return (
    <>
      <div className="main-login">
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user-signIn" className="label">
                    Username
                  </label>
                  <input id="user-signIn" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="pass-signIn" className="label">
                    Password
                  </label>
                  <input
                    id="pass-signIn"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group mt-5">
                  <input
                    type="submit"
                    className="button"
                    value="Sign In"
                    onClick={loginApiCall}
                  />
                </div>
                <a
                  className="github"
                  href={`https://github.com/login/oauth/authorize?client_id=46064a3c8fcc86ae9905&scope=user`}
                >
                  Login with github
                </a>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user-signUp" className="label">
                    Username
                  </label>
                  <input
                    id="user-signUp"
                    type="text"
                    className="input"
                    value={registerField.username}
                    onChange={(e) => {
                      onSetFields(e, "username");
                    }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass-signUp" className="label">
                    Password
                  </label>
                  <input
                    id="pass-signUp"
                    type="password"
                    className="input"
                    data-type="password"
                    value={registerField.password}
                    onChange={(e) => {
                      onSetFields(e, "password");
                    }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="input"
                    value={registerField.email}
                    onChange={(e) => {
                      onSetFields(e, "email");
                    }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="birthdate" className="label">
                    Birthday
                  </label>
                  <input
                    id="birthdate"
                    type="text"
                    className="input"
                    value={registerField.birthday}
                    onChange={(e) => {
                      onSetFields(e, "birthdate");
                    }}
                  />
                </div>
                <div className="group">
                  <label htmlFor="address" className="label">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="input"
                    value={registerField.address}
                    onChange={(e) => {
                      onSetFields(e, "address");
                    }}
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="Sign Up"
                    onClick={onSubmitRegister}
                  />
                </div>
                <a
                  className="github"
                  href={`https://github.com/login/oauth/authorize?client_id=91a476b3535dff814b00&scope=user`}
                >
                  SignUp with github
                </a>
                <div className="hr"></div>
                <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member? </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
