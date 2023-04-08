import React from 'react';
import Navbar from './Navbar';
import LoginForm from './forms/LoginForm';

const Login = () => {
    return(
        <div>
            <Navbar/>
            <h1>
                Login
            </h1>
            <LoginForm/>
        </div>
    );
}

export default Login;