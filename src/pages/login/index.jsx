import React from 'react';
import { useDispatch } from 'react-redux';
import SignInSignUpHeader from './components/header';
import './login.css';
import UseApi from '../../hooks/api';
import { setToken } from '../../store/user/token';

const Login = () => {
    const { apiCall } = UseApi();
    const dispatch = useDispatch()

    const onSuccess = (res) => {
        console.log(res);
        dispatch(setToken(res.data))
    }

    const loginApiCall = () => {
        const query = {
            "email": "john@mail.com",
            "password": "changeme"
        }

        apiCall({ url: "https://api.escuelajs.co/api/v1/auth/login", query, method: 'post', sucessCallback: onSuccess })
    }

    return (
        <>
            <SignInSignUpHeader/>
            <div className='main'>
                <div class="login-wrap">
                    <div class="login-html">
                        <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
                        <div class="login-form">
                            <div class="sign-in-htm">
                                <div class="group">
                                    <label for="user-signIn" class="label">Username</label>
                                    <input id="user-signIn" type="text" class="input"/>
                                </div>
                                <div class="group">
                                    <label for="pass-signIn" class="label">Password</label>
                                    <input id="pass-signIn" type="password" class="input" data-type="password"/>
                                </div>
                                <div class="group">
                                    <input id="check" type="checkbox" class="check" checked/>
                                    <label for="check"><span class="icon"></span> Keep me Signed in</label>
                                </div>
                                <div class="group">
                                    <input type="submit" class="button" value="Sign In" onClick={loginApiCall}/>
                                </div>
                            </div>
                            <div class="sign-up-htm">
                                <div class="group">
                                    <label for="user-signUp" class="label">Username</label>
                                    <input id="user-signUp" type="text" class="input"/>
                                </div>
                                <div class="group">
                                    <label for="pass-signUp" class="label">Password</label>
                                    <input id="pass-signUp" type="password" class="input" data-type="password"/>
                                </div>
                                <div class="group">
                                    <label for="pass-signUp-repeat" class="label">Repeat Password</label>
                                    <input id="pass-signUp-repeat" type="password" class="input" data-type="password"/>
                                </div>
                                <div class="group">
                                    <label for="email" class="label">Email Address</label>
                                    <input id="email" type="text" class="input"/>
                                </div>
                                <div class="group">
                                    <input type="submit" class="button" value="Sign Up"/>
                                </div>
                                <div class="hr"></div>
                                <div class="foot-lnk">
                                    <label for="tab-1">Already Member? </label>
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