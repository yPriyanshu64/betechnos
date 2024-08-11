import React from 'react';
import './SignupForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const SignupForm = ({ toggleForm }) => {
    return (
        <div className='wrapper'>
            <form>
                <h1>Betechnos Signup</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>

                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>

                <button type='submit'>Signup</button>

                <div className='login-link'>
                    <p>Already have an account?</p>
                    <a href="#" onClick={toggleForm} className='login-link-button'>Log In</a>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
