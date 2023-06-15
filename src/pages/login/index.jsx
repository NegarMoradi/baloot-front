import React from 'react';
import { useDispatch } from 'react-redux';
import './login.css';
import UseApi from '../../hooks/api';
import { setToken } from '../../store/user/token';
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from '../../store/user';

const Login = () => {
    const { apiCall } = UseApi();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const onSuccess = (res) => {
        console.log(res);
        dispatch(setToken(res.data))
        dispatch(setUserInfo({name: document.getElementById('user-signIn').value}))
        navigate('/')
    }

    const loginApiCall = () => {
        const query = {
            "username": document.getElementById('user-signIn').value,
            "password": document.getElementById('pass-signIn').value
        }

        apiCall({ url: "http://localhost:5432/api/users/login", query, method: 'post', sucessCallback: onSuccess })
    }

    return (
        <>
            <div className='main'>
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user-signIn" className="label">Username</label>
                                    <input id="user-signIn" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass-signIn" className="label">Password</label>
                                    <input id="pass-signIn" type="password" className="input" data-type="password"/>
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" className="check" defaultChecked/>
                                    <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign In" onClick={loginApiCall}/>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user-signUp" className="label">Username</label>
                                    <input id="user-signUp" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass-signUp" className="label">Password</label>
                                    <input id="pass-signUp" type="password" className="input" data-type="password"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass-signUp-repeat" className="label">Repeat Password</label>
                                    <input id="pass-signUp-repeat" type="password" className="input" data-type="password"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="label">Email Address</label>
                                    <input id="email" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Sign Up"/>
                                </div>
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
    )
}

export default Login;