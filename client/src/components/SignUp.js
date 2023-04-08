import React from 'react';
import Navbar from './Navbar';
import SignUpForm from './forms/SignUpForm';

const SignUp = () => {
    return(
        <div>
            <Navbar/>
            <h1>
                Sign Up
            </h1>
            <SignUpForm/>
        </div>
    );
}

export default SignUp;